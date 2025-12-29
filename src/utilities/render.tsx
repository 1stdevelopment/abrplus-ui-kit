import React, { Children, Fragment, ReactElement } from 'react';

interface RenderProps<T> {
  when: T;
  children: React.ReactNode;
  fallback?: React.ReactNode | null;
}

const isTruthyWhen = <T,>(when: T): when is NonNullable<T> => {
  return when !== null && typeof when !== 'undefined' && Boolean(when);
};

const Render = <T,>({ children, when, fallback = null }: RenderProps<T>) => {
  return (
    <Fragment>
      {isTruthyWhen<T>(typeof when === 'function' ? when() : when) ? children : fallback}
    </Fragment>
  );
};

interface RenderListProps<T> {
  children: ReactElement<RenderProps<T>>[];
}

const List = <T,>({ children }: RenderListProps<T>) => {
  const props = Children.map(children, (child) => child.props);

  return (
    <Fragment>
      {props.map(({ when, fallback, children }) => {
        if (isTruthyWhen<T>(typeof when === 'function' ? when() : when)) return children;

        return fallback || null;
      })}
    </Fragment>
  );
};

Render.List = List;

export { Render };
