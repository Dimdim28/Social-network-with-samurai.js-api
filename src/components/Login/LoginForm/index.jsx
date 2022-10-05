import React from "react";
import styles from "../Login.module.css";
import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";
import Input from "../../common/FormsControls/Input/Input";

const LoginForm = (props) => {
  const onSubmit = (data) => {
    props.getLoginUserData(data);
  };

  const captchaUrl = props.captchaUrl;

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
              type={"email"}
              component={Input}
            />
            <Field
              className={styles.input}
              validate={formHelpers.required}
              autoComplete={"password"}
              name={"password"}
              placeholder={"Enter password"}
              type={"password"}
              component={Input}
            />
            <div className={styles.rememberMe}>
              <label htmlFor="rememberMe">Remember me</label>
              <Field
                className={styles.checkBox}
                name="rememberMe"
                component={"input"}
                type={"checkbox"}
              />
            </div>

            {captchaUrl && (
              <>
                <img
                  src={captchaUrl}
                  alt={captchaUrl}
                  className={styles.captcha}
                />
                <Field
                  className={styles.input}
                  validate={formHelpers.required}
                  autoComplete={"captcha"}
                  name={"captcha"}
                  placeholder={"Enter captcha"}
                  component={Input}
                />{" "}
              </>
            )}

            {props.error && (
              <span className={styles.generalError}> {props.error} </span>
            )}

            <div className={styles.send}>
              <button
                disabled={submitting || invalid}
                type="submit"
                className={styles.button}
              >
                Login
              </button>
              <a
                className={styles.link}
                href="https://social-network.samuraijs.com/signUp"
                target="blank"
              >
                Register
              </a>
            </div>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default LoginForm;
