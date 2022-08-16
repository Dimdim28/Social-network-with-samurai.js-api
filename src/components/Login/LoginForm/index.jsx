import React from "react";
import styles from "../Login.module.css";
import { Field, Form } from "react-final-form";
//import { emailValidation, required, composeValidators } from '../../utilities/validators'

const LoginForm = (props) => {
  const onSubmit = (data) => {
    props.getLoginUserData(data);
  };
  return (
    <div className={styles.loginWrapper}>
      <h2>Login</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, invalid }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field
              // validate={ composeValidators(required, emailValidation) }
              autoComplete={"username"}
              name={"email"}
              placeholder={"Enter login"}
              component="input"
            />
            <Field
              // validate={required}
              autoComplete={"current-password"}
              name={"password"}
              placeholder={"Enter password"}
              type={"password"}
              component="input"
            />
            <div className="">
              <label htmlFor="rememberMe">Remember me</label>
              <Field name="rememberMe" component={"input"} type={"checkbox"} />
            </div>
            {props.error && (
              <span className={styles.generalError}> {props.error} </span>
            )}
            <button disabled={submitting || invalid} type="submit">
              Login
            </button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default LoginForm;
