import { Section } from 'components/Section';
import { NavLink } from 'react-router-dom';
import css from './Welcome.module.css';

export const Welcome = () => {
  return (
    <Section className="welcomeSection" title="Phonebook">
      <div className={css.welcomeMessage}>
        <button className={css.welcomeBtn}>
        <NavLink to="/login" className={css.loginLink}>
            Log in
          </NavLink>
        </button>
        <button className={css.welcomeBtn}>
        <NavLink to="/signup" className={css.signupLink}>
            Sign up
          </NavLink>
        </button>
      </div>
    </Section>
  );
};
