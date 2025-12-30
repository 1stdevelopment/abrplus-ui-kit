/**
 * Props for the EmojiPickerInput component
 */
interface EmojiPickerInputProps {
    /** Current value of the input */
    value: string;
    /** Callback fired when input value changes */
    onChange: (value: string) => void;
    /** Optional label for the input field */
    label?: string;
    /** Optional list of emojis to show in the picker */
    emojis?: string[];
}
/**
 * EmojiPickerInput Component
 *
 * A text input component with an integrated emoji picker.
 * Users can click the emoji icon to select emojis, which
 * are inserted at the current cursor position.
 */
export declare const EmojiPicker: ({ value, onChange, label, emojis, }: EmojiPickerInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
