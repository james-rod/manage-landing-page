export function checkEmail(email) {
  const error = [];

  if (!emailRegex(email)) {
    error.push("Please insert a valid email");
  }

  return error;
}

// Required Email Address @
function emailRegex(email) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
}
