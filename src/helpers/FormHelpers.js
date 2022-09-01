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
  githubLinkValidation(link) {
    if (!link) return null;
    if (
      link.startsWith("github.com") ||
      link.startsWith("https://github.com")
    ) {
      return null;
    } else {
      return "Invalid link!!!";
    }
  },
  vkLinkValidation(link) {
    if (!link) return null;

    if (link.startsWith("vk.com") || link.startsWith("https://vk.com")) {
      return null;
    } else {
      return "Invalid link";
    }
  },
  facebookLinkValidation(link) {
    if (!link) return null;

    if (
      link.startsWith("facebook.com") ||
      link.startsWith("https://www.facebook.com")
    ) {
      return null;
    } else {
      return "Invalid link";
    }
  },

  instagramLinkValidation(link) {
    if (!link) return null;

    if (
      link.startsWith("instagra.com") ||
      link.startsWith("instagram.com") ||
      link.startsWith("https://www.instagram.com/") ||
      link.startsWith("www.instagram.com")
    ) {
      return null;
    } else {
      return "Invalid link";
    }
  },

  twitterLinkValidation(link) {
    if (!link) return null;

    if (
      link.startsWith("https://twitter.com") ||
      link.startsWith("twitter.com")
    ) {
      return null;
    } else {
      return "Invalid link";
    }
  },
  youtubeLinkValidation(link) {
    if (!link) return null;

    if (
      link.startsWith("https://www.youtube.com") ||
      link.startsWith("www.youtube.com")
    ) {
      return null;
    } else {
      return "Invalid link";
    }
  },
};
