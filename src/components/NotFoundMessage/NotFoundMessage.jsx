import { TbError404, TbFaceIdError } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import css from './NotFoundMessage.module.css';

export const NotFoundMessage = () => {
  return (
    <div className={css.notFoundWrap}>
      <TbFaceIdError className={css.iconSad} />
      <TbError404 className={css.icon404} />
      <h1>Page not found</h1>
      <p>
        Oooops, the page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <NavLink className={css.goHome} to="/">
        Go Home
      </NavLink>
    </div>
  );
};
