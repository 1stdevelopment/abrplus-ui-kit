import { RcFile } from 'antd/lib/upload';
import { IconsNames } from '../../atoms';
interface AvatarUploadProps {
    customRequest: ((options: {
        file: string | Blob | RcFile;
    }) => Promise<void>) | undefined;
    src: string;
    shape: 'circle' | 'square';
    size: number;
    iconName?: IconsNames;
    isLoading?: boolean;
    targetId?: string | number;
}
export declare const AvatarUpload: ({ customRequest, src, shape, size, isLoading }: AvatarUploadProps) => import("react/jsx-runtime").JSX.Element;
export {};
