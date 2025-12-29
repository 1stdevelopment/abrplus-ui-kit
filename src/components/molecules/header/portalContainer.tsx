import { useMainHeaderContext } from './context';

export const PortalContainer = () => {
  const { setContainer } = useMainHeaderContext();

  return <div className="ml-4 flex w-[100px] flex-1" ref={setContainer}></div>;
};
