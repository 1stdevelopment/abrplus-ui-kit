import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

import { colors } from '@configs';

import { Flex, Icon, Text } from '../..';

interface UploadProps<T = any> extends AntUploadProps<T> {}

export const Upload = <T,>({ children, itemRender = undefined, ...props }: UploadProps<T>) => {
  // const { mutate, isPending, error } = usePostV2FileUploadfile({
  //   onError: (error) => {
  //     negative({ message: error.message });
  //   },
  //   onSuccess({ filePath }) {
  //     if (filePath) onChange?.(filePath);
  //   },
  // });

  // const { mutate: uploadExell, isPending: pendingExell } =
  //   usePostV3PlatformFileManagementUploadfile({
  //     onError: (error) => {
  //       negative({ message: error.message });
  //     },
  //     onSuccess({ filePath }) {
  //       if (filePath) onChange?.(filePath);
  //     },
  //   });

  return (
    <AntUpload
      {...props}
      multiple={false}
      maxCount={1}
      itemRender={
        itemRender
          ? itemRender
          : (_node, file, _list, { remove }) => (
              <Flex className="w-full max-w-40 p-1" gap={8} justify="center">
                <Text size={14} color={colors.primary} weight="medium" numberOfLines={1}>
                  {file?.name}
                </Text>

                <Icon
                  name="Delete_fill"
                  color={colors.negative}
                  size={16}
                  className="cursor-pointer"
                  onClick={remove}
                />
              </Flex>
            )
      }
    >
      {children}
    </AntUpload>
  );
};

Upload.Dragger = AntUpload.Dragger;

export type { RcFile, UploadChangeParam, UploadFile, UploadProps };
