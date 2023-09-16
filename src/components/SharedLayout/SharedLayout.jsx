import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <div className={css.mainWrapper}>
        <Suspense fallback={<div className="message">Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
