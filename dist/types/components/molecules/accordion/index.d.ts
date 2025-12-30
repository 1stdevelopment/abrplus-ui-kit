import { ReactElement, RefObject } from 'react';
interface AccordionItem {
    children: React.ReactNode;
    label: React.ReactNode;
}
export interface AccordionProps {
    currentIndex?: number;
    accordionRef?: RefObject<HTMLDivElement>;
    children: ReactElement<AccordionItem>[];
    indexedStyle?: boolean;
    transparent?: boolean;
    noPaddingItem?: boolean;
    noGapBetweenItems?: boolean;
    onChangeIndex?(key: number): void;
}
declare const Accordion: {
    ({ children, accordionRef, onChangeIndex, currentIndex, indexedStyle, noPaddingItem, noGapBetweenItems, transparent, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
    Item: (_props: AccordionItem) => null;
};
export { Accordion };
