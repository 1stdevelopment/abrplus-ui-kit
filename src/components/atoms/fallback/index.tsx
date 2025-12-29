import { Flex } from '../../antOverrides/flex';
import { Loading } from '../../antOverrides/loading';

export interface FallbackProps {
  size?: number;
}

export const Fallback = ({ size }: FallbackProps) => {
  return (
    <Flex className="h-full min-h-[100px] w-full" align="center" justify="center">
      <Loading isLoading size={size} />
    </Flex>
  );
};
