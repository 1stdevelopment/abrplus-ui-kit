import { Input, Tooltip } from 'antd';
import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { InputFieldError, colors, getLocaleFromCulture, i18nInstance } from '@configs';
import { ResourceDataValueVM, useGetGeneralLanguageAll } from '@configs/global';

import { Icon, InputErrorMessage, Text } from '../..';
import { Render } from '../../../utilities';
import { Flex } from '../../antOverrides';

export interface LanguageTabTextareaProps {
  value?: ResourceDataValueVM[];
  required?: boolean;
  helperText?: string;
  label?: string | React.ReactNode;
  disabled?: boolean;
  resizable?: boolean;
  rows?: number;
  height?: number;
  /**
   * if `error` property provided, regardless of its value, the error gap is applied to component.
   */
  error?: InputFieldError;
  hideErrorMessage?: boolean;
  lang?: string;
  id?: string;
  onChange?(values: ResourceDataValueVM[]): void;
}

const baseClass = `border relative border-b-0 after:absolute
                     after:w-full after:bottom-[-1px] after:left-0 after:h-[1px]
                     after:bg-white-ff after:z-50 group-hover:border-primary-dark-1`;

const disabledClass = `bg-light-6 after:bg-light-6`;

const activeClass = twMerge(baseClass, 'border-primary-light-3');
const errorClass = twMerge(baseClass, 'border-negative');

export const LanguageTabTextarea = forwardRef<HTMLInputElement, LanguageTabTextareaProps>(
  (
    {
      lang: langFromProps = 'fa',
      disabled,
      helperText,
      label,
      error,
      hideErrorMessage = false,
      required,
      resizable = true,
      value = [],
      onChange,
      rows,
      height,
    },
    ref,
  ) => {
    const [lang, setLang] = useState(langFromProps);
    const [activeLang, setActiveLang] = useState<string>('');

    const { data: languages } = useGetGeneralLanguageAll({
      gcTime: Infinity,
      staleTime: Infinity,
    });

    const sortedLanguages = useMemo(() => {
      return languages?.sort((a) => (a.isDefault ? -1 : 1));
    }, [languages]);

    useEffect(() => {
      if (!languages || !languages.length) return;

      const firstLang = languages.find(({ isDefault }) => isDefault);

      if (firstLang?.culture) {
        setActiveLang(firstLang.culture);
      }
    }, [languages]);

    const getLanguageValue = (value: ResourceDataValueVM[], id: string) => {
      return (value || []).find(({ language }) => id === language)?.value;
    };

    const isFilled = (value: ResourceDataValueVM[], id: string) => {
      return (value || []).some(({ language, value }) => id === language && !!value);
    };

    return (
      <Flex className="group" vertical flex={1}>
        <Flex vertical={false} justify="space-between">
          <label htmlFor="language-textarea" className="flex flex-row items-center gap-1">
            <Render when={helperText}>
              <Tooltip title={helperText} arrow={{ pointAtCenter: true }}>
                <Icon name="Help_header" color={colors.primary_light_3} size={15} />
              </Tooltip>
            </Render>
            {typeof label === 'string' ? <Text color={colors.primary}>{label}</Text> : label}
            <Render when={required}>
              <Icon name="Asterisk" size={6} color={colors.negative} className="mb-2" />
            </Render>
          </label>
          <Flex vertical={false} className="direction-ltr h-6">
            {(sortedLanguages || []).map(({ culture, key, name }) => (
              <Tooltip key={key} title={name} arrow={{ pointAtCenter: true }}>
                <button
                  className={twMerge(
                    'rounded-t-[4px] border border-b-0 border-transparent px-[6px] outline-none transition-none',
                    activeLang === culture &&
                      (disabled ? disabledClass : error?.message ? errorClass : activeClass),
                    activeLang === culture &&
                      isFilled(value, activeLang) &&
                      !disabled &&
                      'border-primary-dark-1',
                    disabled && 'cursor-not-allowed',
                  )}
                  onClick={() => {
                    if (disabled) return;
                    if (culture) {
                      setActiveLang(culture);
                      setLang(culture.includes('fa') ? 'fa' : culture);
                    }
                  }}
                >
                  <Text
                    size={14}
                    lang="en"
                    color={colors[activeLang === culture ? 'primary_dark_1' : 'primary_light_3']}
                  >
                    {getLocaleFromCulture(culture)}
                  </Text>
                </button>
              </Tooltip>
            ))}
          </Flex>
        </Flex>
        <Input.TextArea
          key={activeLang}
          disabled={disabled}
          ref={ref}
          value={getLanguageValue(value, activeLang)}
          rows={rows}
          onChange={(event) => {
            if (onChange) {
              const current = (value || []).find((item) => item.language === activeLang);

              if (current) {
                current.value = event.target.value;
                onChange([...value]);
              } else {
                onChange([...value, { language: activeLang, value: event.target.value }]);
              }
            }
          }}
          styles={{ textarea: { height } }}
          className={twMerge(
            'focus:border-primary-light-3 font-yekan-normal input-filled  rounded-tl-none shadow-none !transition-none',
            isFilled(value, activeLang) &&
              !disabled &&
              'border-primary-dark-1 focus:border-primary-dark-1',
            disabled
              ? '!border-light-6 !resize-none'
              : 'group-hover:border-primary-dark-1 resize-y',
            !resizable && '!resize-none',
            !hideErrorMessage && error?.message && 'border-negative focus:border-negative',
            lang === 'fa' ? 'font-yekan-normal' : 'font-roboto-normal',
          )}
        />
        {!hideErrorMessage && error?.message && <InputErrorMessage message={error?.message} />}
      </Flex>
    );
  },
);
/* -------------------------------------------------------------------------- */
// eslint-disable-next-line react-refresh/only-export-components
export const textAreaValidator = (nameResourceValues: ResourceDataValueVM[] | undefined) => {
  if (!nameResourceValues) return i18nInstance.t('common.error.fieldRequired');
  const systemLanguage = nameResourceValues?.find((nameResourceValue) =>
    nameResourceValue?.language?.includes(i18nInstance.language),
  );
  if (!systemLanguage || !systemLanguage.value) return i18nInstance.t('common.error.fieldRequired');
  return true;
};
