const checkValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Invalid email format", field: "email" };
  } else {
    return { valid: true };
  }
};

const checkValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return {
      valid: false,
      message:
        "Password must be at least 8 characters long and include both letters and numbers",
      field: "password",
    };
  } else {
    return { valid: true };
  }
};
export { checkValidEmail, checkValidPassword };
