import { Checkbox as AntCheckbox, CheckboxProps } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export const Checkbox = (props: CheckboxProps) => <AntCheckbox {...props} />;

Checkbox.Group = AntCheckbox.Group;

export type { CheckboxChangeEvent, CheckboxProps };
