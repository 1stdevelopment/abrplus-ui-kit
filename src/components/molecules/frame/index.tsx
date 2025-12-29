import { notification } from 'antd';
import qs from 'qs';
import { Fragment, memo, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAppKey, parseEnvUrl, resolvePathPlaceholder } from '@configs';

import { Loading, Text } from '../..';
import { ApplicationProvider } from '../../../core';

export interface ExternalViewProps {
  source?: 'menu' | 'settings';
  deepLink?: string;
  externalUrl?: string;
  externalQueryString?: string;
  shouldSyncQueryStrings?: boolean;
}

export const ExternalView = memo(
  ({
    deepLink = '',
    externalUrl = '',
    externalQueryString,
    source = 'menu',
    shouldSyncQueryStrings = true,
  }: ExternalViewProps) => {
    const { t } = useTranslation();

    const [sourceUrl, setSourceUrl] = useState<string>(externalUrl);
    const [isLoading, setLoading] = useState<boolean>(true);

    const location = useLocation();
    const navigate = useNavigate();

    const mounted = useRef<boolean>(false);

    const iframeRef = useRef<HTMLIFrameElement>(null);

    const { setPreparing, routes } = ApplicationProvider.use();

    useEffect(() => {
      if (!externalUrl) return;

      if (!mounted.current) {
        mounted.current = true;

        setPreparing((pre) => ({ ...pre, [source]: true }));
      }

      let url = externalUrl;

      if (__APP__ === 'call') {
        url = resolvePathPlaceholder(url);
      }

      setSourceUrl(url);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [externalUrl, source, location.search]);

    useEffect(() => {
      if (!iframeRef.current) return;
      const iframe = iframeRef.current;
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
            setPreparing({ menu: true, settings: true });
          }
        }
      });

      observer.observe(iframe, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['src'],
      });

      return () => {
        observer?.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const path = useMemo(() => {
      if (sourceUrl && !sourceUrl.includes('{')) {
        if (!externalQueryString) {
          return sourceUrl;
        }

        const parsedQueries = qs.parse(`${externalQueryString}&appKey=${getAppKey() || 'home'}`, {
          ignoreQueryPrefix: true,
        });
        const parsedLocation = qs.parse(location.search, { ignoreQueryPrefix: true });

        return (
          sourceUrl +
          qs.stringify(
            { ...parsedQueries, ...parsedLocation },
            { addQueryPrefix: true, encode: false },
          )
        );
      }
    }, [externalQueryString, location, sourceUrl]);

    const onLoad = (event: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
      setPreparing({ menu: false, settings: false });
      setLoading(false);

      const contentWindow = event.currentTarget.contentWindow;

      if (contentWindow) {
        const iframeLocation = contentWindow.location || contentWindow.document.location;
        const pathname = iframeLocation.pathname;
        const iframeSearch = iframeLocation.search;
        const url = deepLink;

        if (pathname.startsWith('/identity') || !shouldSyncQueryStrings) {
          // Checks if iframe is trying to authenticate by redirecting to identity routes.
          return;
        } else if (routes.isAvailable(pathname)) {
          navigate(pathname);
          return;
        }
        if (url && sourceUrl !== pathname) {
          setSourceUrl(pathname);

          const options = { addQueryPrefix: true, encode: false };
          const search = qs.stringify({ path: url }, options);
          const newUrl = source === 'settings' ? `${window.location.pathname}${search}` : url;
          // Update the URL without causing a refresh
          history.replaceState({}, '', newUrl);
        }
        if (iframeSearch) {
          const parsedLocation = qs.parse(window.location.search, { ignoreQueryPrefix: true });
          const parsedSearch = qs.parse(iframeSearch, { ignoreQueryPrefix: true });
          const search = qs.stringify(
            { ...parsedLocation, ...parsedSearch },
            { addQueryPrefix: true, encode: false },
          );
          // Update the query string without causing a refresh
          history.replaceState({}, '', `${window.location.pathname}${search}`);
        }
      }
    };

    const renderLoading = () => {
      return (
        <div className="absolute flex h-full w-full items-center justify-center">
          <Loading isLoading />
        </div>
      );
    };
    if (!path) {
      return renderLoading();
    }
    return (
      <Fragment>
        {isLoading ? renderLoading() : null}
        <iframe
          ref={iframeRef}
          src={parseEnvUrl(APP_URL) + path}
          style={{ display: 'flex', flex: 1, height: '100%' }}
          onError={() => {
            setPreparing({ menu: false, settings: false });

            notification.open({
              message: <Text size={16}>{t('common.message.loadDataError')}</Text>,
              type: 'error',
              placement: 'top',
              closeIcon: null,
              style: { fontFamily: 'YekanBakhFaRegular' },
            });
          }}
          onLoad={onLoad}
          frameBorder={0}
        />
      </Fragment>
    );
  },
);
