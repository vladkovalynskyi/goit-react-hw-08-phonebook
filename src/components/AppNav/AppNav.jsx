import { NavLink } from 'react-router-dom';
import css from './AppNav.module.css';
import PropTypes from 'prop-types';

export const AppNav = ({ userLoggedIn }) => {
  return (
    <nav>
      {!userLoggedIn && (
        <ul className={css.navList}>
          <li cla>
            <NavLink className={css.navLink} to="/">
              Home
            </NavLink>
          </li>
        </ul>
      )}
      {userLoggedIn && (
        <li>
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </nav>
  );
};

AppNav.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
};
