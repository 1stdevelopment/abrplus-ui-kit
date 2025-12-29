import { RcFile } from 'antd/lib/upload';
import { twMerge } from 'tailwind-merge';

import { colors } from '@configs';

import { Avatar, Flex, Loading } from '../../antOverrides';
import { Icon, IconsNames, Upload } from '../../atoms';

interface AvatarUploadProps {
  customRequest: ((options: { file: string | Blob | RcFile }) => Promise<void>) | undefined;
  src: string;
  shape: 'circle' | 'square';
  size: number;
  iconName?: IconsNames;
  isLoading?: boolean;
  targetId?: string | number;
}

export const AvatarUpload = ({ customRequest, src, shape, size, isLoading }: AvatarUploadProps) => {

  return (
    <Upload accept=".jpg, .jpeg, .img" showUploadList={false} customRequest={customRequest}>
      <div
        className="relative cursor-pointer overflow-hidden group"
        style={{
          borderRadius: shape === 'circle' ? '50%' : 4,
        }}
      >
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Icon
            name="Add_photo"
            color={colors.white_ff}
            className='opacity-0 group-hover:opacity-100'
            style={{  transition: 'all 0.2s' }}
          />
        </div>
        {isLoading ? (
          <div
            className=" bg-light-2 "
            style={{
              width: size,
              height: size,
            }}
          >
            <Loading isLoading size={size} color={colors.primary_light_1} />
          </div>
        ) : (
          <Flex
            className={twMerge('cursor-pointer items-center justify-center')}
            style={{
              minWidth: size,
              minHeight: size,
              width: size,
              height: size,
              borderRadius: shape === 'circle' ? 9999 : 4,
              border: `1px solid ${colors.light_7}`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Avatar
              icon={<Icon name="User" />}
              src={src}
              size={size}
              shape={shape}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            <div
            className='opacity-0 group-hover:opacity-100'
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                transition: 'opacity 0.2s ease-in-out',
              }}
            />
          </Flex>
        )}
      </div>
    </Upload>
  );
};
