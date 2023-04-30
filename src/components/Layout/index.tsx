import { FC, PropsWithChildren } from 'react';
import Meta from '@/components/Meta';
import { LayoutProps } from '@/components/Layout/types';
import styles from './styles.module.scss'

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  title,
  description,
  children
}): JSX.Element => {
  return (
    <Meta title={title} description={description}>
      <main className={styles.container}>{children}</main>
    </Meta>
  );
};

export default Layout;
