import { useDispatch } from 'react-redux';
import { signupUser } from 'redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './SignUpForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Name may contain only latin letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(`Name is required`),
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

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { resetForm } = actions;
    const name = values.name;
    const email = values.email;
    const password = values.password;
    console.log({ name, email, password });

    dispatch(signupUser({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field className={css.input} type="text" name="name" required />
          <ErrorMessage name="name" component="p" className={css.error} />
        </label>
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
        <button className={css.submitBtn} type="submit" aria-label="Sign up">
          Sign up
        </button>
      </Form>
    </Formik>
  );
};
