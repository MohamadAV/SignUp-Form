export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Username required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password < 6) {
    errors.password = "password need to be 6 or more characters";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Password do not match";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Accept our regulatios";
  }

  return errors;
};
