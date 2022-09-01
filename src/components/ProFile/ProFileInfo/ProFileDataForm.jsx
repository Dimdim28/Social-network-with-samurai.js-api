import React from "react";
import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";
import Input from "../../common/FormsControls/Input/Input";
import styles from "./ProFileDataForm.module.css";

const ProFileDataForm = (props) => {
  console.log("props =", props);
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

  const initialValues = {
    fullName: props.profile.fullName,
    AboutMe: props.profile.aboutMe,
    lookingForAJob: props.profile.lookingForAJob ? ["job"] : [],
    lookingForAJobDescription: props.profile.lookingForAJobDescription,
    github: props.profile.contacts.github,
    vk: props.profile.contacts.vk,
    facebook: props.profile.contacts.facebook,
    instagram: props.profile.contacts.instagram,
    twitter: props.profile.contacts.twitter,
    website: props.profile.contacts.website,
    youtube: props.profile.contacts.youtube,
    mainLink: props.profile.contacts.mainLink,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.editProfileForm}>
        <h1>Edit Profile info </h1>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting, invalid, values }) => (
            <form onSubmit={handleSubmit}>
              <Field
                validate={formHelpers.composeValidators(formHelpers.required)}
                autoComplete={"fullName"}
                name={"fullName"}
                placeholder={"Enter your name"}
                component={Input}
                value={values.fullName}
              />

              <Field
                validate={formHelpers.composeValidators(formHelpers.required)}
                autoComplete={"AboutMe"}
                name={"AboutMe"}
                placeholder={"Tell about yourself"}
                component={Input}
                value={values.AboutMe}
              />

              <div className={styles.jobWrapper}>
                <h2>Looking for a job</h2>
                <div className={styles.job}>
                  <label htmlFor="lookingForAJob">Looking for a job </label>
                  <Field
                    name="lookingForAJob"
                    component={"input"}
                    type={"checkbox"}
                    value={"job"}
                  />
                </div>
              </div>

              <Field
                validate={formHelpers.required}
                autoComplete={"looking-for-a-job-description"}
                name={"lookingForAJobDescription"}
                placeholder={"Enter description to your job looking"}
                component={Input}
                value={values.lookingForAJobDescription}
              />
              <h2>Contacts</h2>
              <div className={styles.contacts}>
                <div className={styles.leftBar}>
                  <Field
                    validate={formHelpers.githubLinkValidation}
                    autoComplete={"github"}
                    name={"github"}
                    placeholder={" link to your github "}
                    component={Input}
                    value={values.github}
                  />

                  <Field
                    validate={formHelpers.vkLinkValidation}
                    autoComplete={"vk"}
                    name={"vk"}
                    placeholder={" link to your vk "}
                    component={Input}
                    value={values.vk}
                  />

                  <Field
                    validate={formHelpers.facebookLinkValidation}
                    autoComplete={"facebook"}
                    name={"facebook"}
                    placeholder={" link to your facebook "}
                    component={Input}
                    value={values.facebook}
                  />

                  <Field
                    validate={formHelpers.instagramLinkValidation}
                    autoComplete={"instagram"}
                    name={"instagram"}
                    placeholder={" link to your instagram "}
                    component={Input}
                    value={values.instagram}
                  />
                </div>
                <div className={styles.rightBar}>
                  <Field
                    validate={formHelpers.twitterLinkValidation}
                    autoComplete={"twitter"}
                    name={"twitter"}
                    placeholder={" link to your twitter "}
                    component={Input}
                    value={values.twitter}
                  />

                  <Field
                    autoComplete={"website"}
                    name={"website"}
                    placeholder={" link to your website "}
                    component={Input}
                    value={values.website}
                  />

                  <Field
                    validate={formHelpers.youtubeLinkValidation}
                    autoComplete={"youtube"}
                    name={"youtube"}
                    placeholder={" link to your youtube "}
                    component={Input}
                    value={values.youtube}
                  />

                  <Field
                    autoComplete={"mainLink"}
                    name={"mainLink"}
                    placeholder={"   your mainLink "}
                    component={Input}
                    value={values.mainLink}
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
