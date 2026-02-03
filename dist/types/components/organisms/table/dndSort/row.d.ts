import { default as React } from 'react';
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    'data-row-key': string;
}
export declare const DndRow: React.FC<RowProps>;
export {};
