import { Radio as AntRadio, RadioChangeEvent, RadioProps } from 'antd';

const Radio = (props: RadioProps) => <AntRadio {...props} />;

Radio.Group = AntRadio.Group;

export { Radio };
export type { RadioChangeEvent };
