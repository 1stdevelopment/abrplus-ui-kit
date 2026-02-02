import { LogoIconNameType } from '@configs';
import { CSSProperties, Fragment, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Avatar, Flex, Icon, Render, Tooltip, TooltipProps } from '../..';

/* -------------------------------------------------------------------------- */
export type LogoProps = {
  style?: CSSProperties;
  shape?: 'circle' | 'square';
  className?: string;
  toolTipTitle?: string;
  iconName?: LogoIconNameType;
  hasAnimation?: boolean;
  iconSize?: number;
  badged?: boolean;
  isFullSizeLogo?: boolean;
  badgeColor?: string;
  badgeStatus?: 'success' | 'error' | 'warn' | 'default';
  badgePosition?: 'left' | 'right';
  onClick?: () => void;
  imageSrc?: string;
} & ({ hasToolTip: true; tooltipProps?: Partial<TooltipProps> } | { hasToolTip?: false });
/* -------------------------------- CONSTANTS ------------------------------- */
const icon: Record<LogoIconNameType, JSX.Element> = {
  User: <Icon name="User" />,
  SecurityGroup: <Icon name="User_Group" />,
  Position: <Icon name="User" />,
  Department: <Icon name="User" />,
  Office: <Icon name="User" />,
  SecurityAgent: <Icon name="User" />,
  SecurityCustomer: <Icon name="User" />,
  SecurityOperator: <Icon name="User" />,
};
/* -------------------------------------------------------------------------- */
export const Logo = ({
  style,
  shape,
  className,
  toolTipTitle,
  imageSrc,
  iconName,
  badgeStatus = 'default',
  badgePosition = 'left',
  badgeColor,
  badged,
  hasAnimation = false,
  iconSize = 24,
  isFullSizeLogo = false,
  onClick,
  ...rest
}: LogoProps) => {
  const badgeColorStatus: Record<typeof badgeStatus, string> = {
    default: 'bg-onsurface-disabled',
    error: 'bg-negative',
    success: 'bg-primary',
    warn: 'bg-warn',
  };

  const Wrapper =
    rest.hasToolTip && toolTipTitle
      ? ({ children }: { children: ReactNode }) => (
          <Tooltip
            className={twMerge(!rest.hasToolTip && 'pointer-events-none')}
            variant="default"
            title={toolTipTitle}
            placement="top"
            {...rest.tooltipProps}
          >
            {children}
          </Tooltip>
        )
      : Fragment;

  return (
    <>
      <Wrapper>
        <Flex
          onClick={onClick}
          className={twMerge(isFullSizeLogo && '!h-full !w-full', 'relative')}
        >
          <Avatar
            shape={shape || 'circle'}
            style={style}
            size={iconSize}
            className={twMerge(
              hasAnimation &&
                'border-2 transition-all hover:z-50 hover:scale-125  hover:border-black/60',
              className,
            )}
            {...(imageSrc
              ? { src: imageSrc }
              : {
                  icon: icon[iconName ?? LogoIconNameType.User],
                  className: twMerge(isFullSizeLogo && '!w-full !h-full'),
                })}
          />
          <Render when={badged}>
            <div
              style={{ backgroundColor: badgeColor }}
              className={twMerge(
                'outline-surface absolute bottom-0  h-2 w-2 rounded-full outline outline-1',
                badgePosition === 'left' ? 'left-0' : 'right-0',
                badgeColorStatus[badgeStatus],
              )}
            />
          </Render>
        </Flex>
      </Wrapper>
    </>
  );
};
