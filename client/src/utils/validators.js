export function isValidEmail(email) {
  return email.includes("@");
}

export function isStrongPassword(password) {
  return password.length >= 8;
}