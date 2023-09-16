import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './LoginForm.module.css';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useEffect } from 'react';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'Please enter a valid email. For example Adrian@mail.com'
    )
    .required(`Email is required`),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z-0-9]{8,}$/,
      'Password should be 8 chars minimum and can contain latin letters and numeric digits'
    )
    // .matches(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    //   'Password should be 8 chars minimum and contain 1 upper case letter, 1 lower case letter and 1 numeric digit'
    // )
    .required(`Password is required`),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { resetForm } = actions;
    const email = values.email;
    const password = values.password;

    // const isRegistered = isUserAlreadyRegistered(name);

    // if (isAdded !== -1) {
    //   alert(`${name} is already in contacts`);
    //   resetForm();
    //   return;
    // }

    dispatch(loginUser({ email, password }));
    resetForm();
  };

  const userLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (userLoggedIn) {
      navigate('/contacts', { replace: true });
    }
  }, [navigate, userLoggedIn]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" required />
          <ErrorMessage name="email" component="p" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field
            className={css.input}
            type="password"
            name="password"
            required
          />
          <ErrorMessage name="password" component="p" className={css.error} />
        </label>
        <button className={css.submitBtn} type="submit" aria-label="log in">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
