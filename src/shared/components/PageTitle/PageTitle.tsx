import * as React from 'react';

import type { IPageTitleProps } from './PageTitle.types';

const PageTitle = ({ title, children }: IPageTitleProps): JSX.Element => {
  React.useEffect(() => {
    document.title = `${title || 'Без имени'} | Supermebel`;
  }, [title]);

  return <div>{children}</div>;
};

export default PageTitle;
