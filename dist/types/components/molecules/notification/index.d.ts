import { ArgsProps } from 'antd/lib/notification';
declare const useNotification: () => {
    success: (props: ArgsProps) => void;
    neutral: (props: ArgsProps) => void;
    negative: (props: ArgsProps) => void;
    informative: (props: ArgsProps) => void;
    successfullyAdded: () => void;
    successfullyEdited: () => void;
    successfullyDeleted: () => void;
    copied: () => void;
    error: (error?: string) => void;
};
export { useNotification };
