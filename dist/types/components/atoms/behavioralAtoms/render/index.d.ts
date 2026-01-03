import { default as React, ReactElement } from 'react';
interface RenderProps<T> {
    when: T;
    children: React.ReactNode;
    fallback?: React.ReactNode | null;
}
declare const Render: {
    <T>({ children, when, fallback }: RenderProps<T>): import("react/jsx-runtime").JSX.Element;
    List: <T>({ children }: RenderListProps<T>) => import("react/jsx-runtime").JSX.Element;
};
interface RenderListProps<T> {
    children: ReactElement<RenderProps<T>>[];
}
export { Render };
