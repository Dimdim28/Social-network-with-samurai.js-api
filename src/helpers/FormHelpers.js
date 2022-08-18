export const formHelpers = {
  composeValidators:
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      ),

  maxLength: (maxValue) => (text) =>
    text.length > maxValue ? `Max length is ${maxValue}` : undefined,

  required: (value) => (value ? undefined : "Field is required!!"),

  emailValidation(email) {
    const regEmail =
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/;
    return email.match(regEmail) ? undefined : "The email is invalid";
  },
};
