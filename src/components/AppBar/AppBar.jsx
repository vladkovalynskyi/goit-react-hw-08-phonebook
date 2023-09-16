import css from './AppBar.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser, selectIsLoggedIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu';
import { AppNav } from 'components/AppNav';

export const AppBar = () => {
  const user = useSelector(selectUser);
  const userLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.appBar}>
      <AppNav userLoggedIn={userLoggedIn} />
      {userLoggedIn && <UserMenu email={user.email} />}
    </header>
  );
};
