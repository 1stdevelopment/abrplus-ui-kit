import { Icon, IconMoonsProps, IconsNames } from '..';
import { Text } from '../../../antOverrides';
import { CopyButton } from '../../../molecules';
import { iconsPack } from '../constants/iconsPack';

export const IconPack = (props: IconMoonsProps) => {
  return (
    <div className="grid h-screen grid-flow-dense grid-cols-4 gap-y-10 overflow-y-auto p-5">
      {Object.keys(iconsPack).map((name) => (
        <CopyButton
          textToCopy={name}
          renderButton={
            <div className="flex cursor-pointer flex-col items-center justify-center gap-3 py-2 hover:bg-white-ff">
              <Icon name={name as IconsNames} className="w-fit" {...props} />
              <Text>{name}</Text>
            </div>
          }
        ></CopyButton>
      ))}
    </div>
  );
};
