 export class RegistrationForm {
  validateUsername(username: string): boolean {
    if (!username) return false;
    if (username.length < 3 || username.length > 20) return false;
    return /^[a-zA-Z0-9]+$/.test(username);
  }

  validateEmail(email: string): boolean {
    if (!email) return false;
    return email.includes('@') && email.includes('.');
  }

  validatePassword(password: string): boolean {
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 8;

    return hasUppercase && hasDigit && hasMinLength;
  }

  validateConfirmPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }

  validateAge(age: number): boolean {
    if (typeof age !== 'number') return false;
    return age >= 18 && age <= 99;
  }

  validateTermsAccepted(accepted: boolean): boolean {
    return accepted === true;
  }
}
