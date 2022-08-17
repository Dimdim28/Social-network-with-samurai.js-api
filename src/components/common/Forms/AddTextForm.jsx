import { Field, Form } from "react-final-form";
import { formHelpers } from "../../../helpers/FormHelpers";

const AddTextForm = (props) => {
  return (
    <div>
      <Form
        onSubmit={props.submit}
        render={({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name={"newText"}
              component="textarea"
              validate={formHelpers.required}
            />
            <button disabled={submitting || invalid} type="submit">
              {props.buttonLabel}
            </button>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default AddTextForm;
