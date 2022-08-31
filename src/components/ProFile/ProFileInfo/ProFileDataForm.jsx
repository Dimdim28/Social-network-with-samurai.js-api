import React from "react";
import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";
import Input from "../../common/FormsControls/Input/Input";
import styles from "./ProFileDataForm.module.css";

const ProFileDataForm = (props) => {
  const onSubmit = (data) => {
    console.log(data);
    const lookingForAJob = Array.isArray(data.lookingForAJob) ? true : false;
    const dataObj = {
      AboutMe: data.AboutMe,
      fullName: data.fullName,
      lookingForAJob: lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      userId: props.userId,
      contacts: {
        github: data.github,
        vk: data.vk,
        facebook: data.facebook,
        instagram: data.instagram,
        twitter: data.twitter,
        website: data.website,
        youtube: data.youtube,
        mainLink: data.mainLink,
      },
    };
    console.log("dataObj =", dataObj);
    props.setEditMode(false);
    props.saveProfile(dataObj);
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
                autoComplete={"fullName"}
                name={"fullName"}
                placeholder={"Enter your name"}
                component={Input}
                value={props.profile.fullName}
              />

              <Field
                validate={formHelpers.composeValidators(formHelpers.required)}
                autoComplete={"AboutMe"}
                name={"AboutMe"}
                placeholder={"Tell about yourself"}
                component={Input}
                value={props.profile.AboutMe}
              />

              <div className={styles.jobWrapper}>
                <h2>Looking for a job</h2>
                <div className={styles.job}>
                  <label htmlFor="lookingForAJob">Looking for a job </label>
                  <Field
                    name="lookingForAJob"
                    component={"input"}
                    type={"checkbox"}
                    value={props.profile.lookingForAJob}
                  />
                </div>
              </div>

              <Field
                validate={formHelpers.required}
                autoComplete={"looking-for-a-job-description"}
                name={"lookingForAJobDescription"}
                placeholder={"Enter description to your job looking"}
                component={Input}
                value={props.profile.lookingForAJobDescription}
              />
              <h2>Contacts</h2>
              <div className={styles.contacts}>
                <div className={styles.leftBar}>
                  <Field
                    autoComplete={"github"}
                    name={"github"}
                    placeholder={" link to your github "}
                    component={Input}
                    value={props.profile.contacts.github}
                  />

                  <Field
                    autoComplete={"vk"}
                    name={"vk"}
                    placeholder={" link to your vk "}
                    component={Input}
                    value={props.profile.contacts.vk}
                  />

                  <Field
                    autoComplete={"facebook"}
                    name={"facebook"}
                    placeholder={" link to your facebook "}
                    component={Input}
                    value={props.profile.contacts.facebook}
                  />

                  <Field
                    autoComplete={"instagram"}
                    name={"instagram"}
                    placeholder={" link to your instagram "}
                    component={Input}
                    value={props.profile.contacts.instagram}
                  />
                </div>
                <div className={styles.rightBar}>
                  <Field
                    autoComplete={"twitter"}
                    name={"twitter"}
                    placeholder={" link to your twitter "}
                    component={Input}
                    value={props.profile.contacts.twitter}
                  />

                  <Field
                    autoComplete={"website"}
                    name={"website"}
                    placeholder={" link to your website "}
                    component={Input}
                    value={props.profile.contacts.website}
                  />

                  <Field
                    autoComplete={"youtube"}
                    name={"youtube"}
                    placeholder={" link to your youtube "}
                    component={Input}
                    value={props.profile.contacts.youtube}
                  />

                  <Field
                    autoComplete={"mainLink"}
                    name={"mainLink"}
                    placeholder={"   your mainLink "}
                    component={Input}
                    value={props.profile.contacts.mainLink}
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
