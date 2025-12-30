import { useCallback, useRef, useState } from 'react';
import { Input } from '..';
import { Dropdown, Flex, Icon } from 'src/main';

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
export const EmojiPicker = ({
  value,
  onChange,
  label,
  emojis = ['😊', '👍', '❤️', '😂', '🔥'], // Default emojis
}: EmojiPickerInputProps) => {
  // Ref to the underlying input element
  const inputRef = useRef<any>(null);

  // State to track the current cursor position
  const [cursor, setCursor] = useState<number>(value.length);

  /**
   * Helper function to get the actual input element.
   * Supports both custom Input component and standard input.
   */
  const getInput = () => inputRef.current?.input ?? inputRef.current;

  /**
   * Update cursor position state based on input's current selection
   */
  const updateCursor = () => {
    const el = getInput();
    if (el && el.selectionStart !== null) {
      setCursor(el.selectionStart);
    }
  };

  /**
   * Adds an emoji at the current cursor position
   *
   * @param emoji - The emoji string to insert
   */
  const addEmoji = useCallback(
    (emoji: string) => {
      const el = getInput();
      const pos = cursor ?? value.length;

      // Insert emoji at cursor position
      const newValue = value.slice(0, pos) + emoji + value.slice(pos);
      onChange(newValue);

      // Set the cursor after the newly added emoji
      requestAnimationFrame(() => {
        if (el) {
          const newPos = pos + emoji.length;
          el.setSelectionRange(newPos, newPos);
          el.focus();
          setCursor(newPos);
        }
      });
    },
    [cursor, value, onChange],
  );

  return (
    <Input.Default
      ref={inputRef}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        updateCursor(); // Keep cursor position in sync
      }}
      onClick={updateCursor} // Update cursor on click
      onKeyUp={updateCursor} // Update cursor on key events
      onSelect={updateCursor} // Update cursor when selecting text
      hideErrorMessage
      label={label}
      suffix={
        // Emoji picker dropdown
        <Dropdown
          trigger={['click']}
          placement="topRight"
          openClassName="flex bg-light-5"
          overlayClassName="[&_.ant-dropdown-menu]:flex"
          dropdownRender={() => (
            <Flex className="bg-white-ff max-h-40 overflow-x-auto rounded-md p-2" gap={8}>
              {emojis.map((emoji, i) => (
                <span
                  key={i}
                  className="hover:bg-light-5 mb-1 flex cursor-pointer items-center justify-center rounded text-xl leading-none"
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevent input blur on click
                    addEmoji(emoji);
                  }}
                >
                  {emoji}
                </span>
              ))}
            </Flex>
          )}
        >
          <Flex className="hover:bg-light-5 rounded-full bg-transparent p-1">
            <Icon name="smile-outlined" className="cursor-pointer" />
          </Flex>
        </Dropdown>
      }
    />
  );
};
