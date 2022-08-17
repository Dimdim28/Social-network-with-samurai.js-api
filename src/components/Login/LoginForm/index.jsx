import React from "react";
import styles from "../Login.module.css";
import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";

const LoginForm = (props) => {
  const onSubmit = (data) => {
    props.getLoginUserData(data);
  };
  return (
    <div className={styles.loginWrapper}>
      <h2 className={styles.title}>Login</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, invalid }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field
              className={styles.input}
              validate={formHelpers.composeValidators(
                formHelpers.required,
                formHelpers.emailValidation
              )}
              autoComplete={"username"}
              name={"email"}
              placeholder={"Enter email"}
              component="input"
            />
            <Field
              className={styles.input}
              validate={formHelpers.required}
              autoComplete={"current-password"}
              name={"password"}
              placeholder={"Enter password"}
              type={"password"}
              component="input"
            />
            <div className="">
              <label htmlFor="rememberMe">Remember me</label>
              <Field
                className={styles.rememberMe}
                name="rememberMe"
                component={"input"}
                type={"checkbox"}
              />
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
