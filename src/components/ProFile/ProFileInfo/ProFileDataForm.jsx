import React from "react";
import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";
import Input from "../../common/FormsControls/Input/Input";
import styles from "./ProFileDataForm.module.css";

const ProFileDataForm = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.editProfileForm}>
        <h1>Edit Profile info </h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field
                validate={formHelpers.composeValidators(formHelpers.required)}
                autoComplete={"fullNme"}
                name={"fullName"}
                placeholder={"Enter your name"}
                component={Input}
                value={props.fullName}
              />
              <div className={styles.jobWrapper}>
                <h2>Looking for a job</h2>
                <div className={styles.job}>
                  <label htmlFor="lookingForAJob">Looking for a job </label>
                  <Field
                    name="lookingForAJob"
                    component={"input"}
                    type={"checkbox"}
                  />
                </div>
              </div>

              <Field
                validate={formHelpers.required}
                autoComplete={"looking-for-a-job-description"}
                name={"lookingForAJobDescription"}
                placeholder={"Enter description to your job looking"}
                component={Input}
              />
              <h2>Contacts</h2>
              <div className={styles.contacts}>
                <div className={styles.leftBar}>
                  <Field
                    validate={formHelpers.required}
                    autoComplete={"github"}
                    name={"github"}
                    placeholder={" link to your github "}
                    component={Input}
                  />

                  <Field
                    validate={formHelpers.required}
                    autoComplete={"vk"}
                    name={"vk"}
                    placeholder={" link to your vk "}
                    component={Input}
                  />

                  <Field
                    validate={formHelpers.required}
                    autoComplete={"facebook"}
                    name={"facebook"}
                    placeholder={" link to your facebook "}
                    component={Input}
                  />

                  <Field
                    validate={formHelpers.required}
                    autoComplete={"instagram"}
                    name={"instagram"}
                    placeholder={" link to your instagram "}
                    component={Input}
                  />
                </div>
                <div className={styles.rightBar}>
                  <Field
                    validate={formHelpers.required}
                    autoComplete={"twitter"}
                    name={"twitter"}
                    placeholder={" link to your twitter "}
                    component={Input}
                  />

                  <Field
                    validate={formHelpers.required}
                    autoComplete={"website"}
                    name={"website"}
                    placeholder={" link to your website "}
                    component={Input}
                  />

                  <Field
                    validate={formHelpers.required}
                    autoComplete={"youtube"}
                    name={"youtube"}
                    placeholder={" link to your youtube "}
                    component={Input}
                  />

                  <Field
                    validate={formHelpers.required}
                    autoComplete={"mainLink"}
                    name={"mainLink"}
                    placeholder={"   your mainLink "}
                    component={Input}
                  />
                </div>
              </div>

              {props.error && <span> {props.error} </span>}
              <button
                className={styles.button}
                disabled={submitting || invalid}
                type="submit"
              >
                Login
              </button>
            </form>
          )}
        ></Form>
      </div>
    </div>
  );
};

export default ProFileDataForm;
