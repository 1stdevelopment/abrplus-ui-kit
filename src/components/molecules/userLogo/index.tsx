import { useState } from 'react';

import { colors, useProfileImageByUserId } from '@configs';
import { Icon, Image, ImageProps, Skeleton } from '@abrplus/ui';

export interface UserLogoProps extends ImageProps {
  identityId?: string;
  isMe?: boolean;
}

const UserLogo = ({ src, isMe, identityId, ...rest }: UserLogoProps) => {
  const [hasError, sethasError] = useState(false);
  const { imageSrc } = useProfileImageByUserId({ userId: identityId || '' });
  return (
    <>
      {!hasError ? (
        <Image
          preview={false}
          src={imageSrc}
          onError={() => sethasError(true)}
          placeholder={<Skeleton.Avatar active shape="circle" />}
          {...rest}
        />
      ) : (
        <Icon color={isMe ? colors.tertiary : colors.primary} name={'User'} />
      )}
    </>
  );
};

export { UserLogo };
