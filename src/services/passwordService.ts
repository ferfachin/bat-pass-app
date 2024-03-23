export default function generatePass(passwordLength?: number){
  let password: string = '';
  let chacrecters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+';
  let length = passwordLength || 8;

  for (let index = 0; index < length; index++) {
    password += chacrecters.charAt(
      Math.floor(Math.random() * chacrecters.length)
    );
  }

  return password;
}