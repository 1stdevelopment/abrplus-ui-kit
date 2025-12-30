import { UploadProps as AntUploadProps } from 'antd';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';
interface UploadProps<T = any> extends AntUploadProps<T> {
}
export declare const Upload: {
    <T>({ children, itemRender, ...props }: UploadProps<T>): import("react/jsx-runtime").JSX.Element;
    Dragger: import('react').ForwardRefExoticComponent<AntUploadProps<any> & {
        height?: number;
    } & import('react').RefAttributes<import('antd/es/upload/Upload').UploadRef<any>>>;
};
export type { RcFile, UploadChangeParam, UploadFile, UploadProps };
