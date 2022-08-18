import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";
import TextArea from "../FormsControls/TextArea/TextArea";
import styles from "./AddTextForm.module.css";

const AddTextForm = (props) => {
  return (
    <div>
      <Form
        onSubmit={props.submit}
        render={({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field
              className={styles.inputDescr}
              name={"newText"}
              component={TextArea}
              validate={formHelpers.required}
            />
            <button
              className={styles.addButton}
              disabled={submitting || invalid}
              type="submit"
            >
              {props.buttonLabel}
            </button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default AddTextForm;
