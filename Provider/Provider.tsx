var LOWERCASE = "abcdefghijklmnopqrstuvwxyz",
  UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  NUMBERS = "0123456789",
  SYMBOLS = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

export function generateRandomUpperCase(length: number) {
  let result = "";
  const charactersLength = UPPERCASE.length;
  for (let i = 0; i < length; i++) {
    result += UPPERCASE.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomLowerCase(length: number) {
  let result = "";
  const charactersLength = LOWERCASE.length;
  for (let i = 0; i < length; i++) {
    result += LOWERCASE.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export function generateRandomNumber(length: number) {
  let result = "";
  const charactersLength = NUMBERS.length;
  for (let i = 0; i < length; i++) {
    result += NUMBERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomSymbols(length: number) {
  let result = "";
  const charactersLength = SYMBOLS.length;
  for (let i = 0; i < length; i++) {
    result += SYMBOLS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generatePassword(
  lenght: number,
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  symbols: boolean
) {
  let char = "";
  let password = "";

  if (uppercase) {
    char += UPPERCASE;
    password += generateRandomUpperCase(1);
  }

  if (lowercase) {
    char += LOWERCASE;
    password += generateRandomLowerCase(1);
  }

  if (numbers) {
    char += NUMBERS;
    password += generateRandomNumber(1);
  }

  if (symbols) {
    char += SYMBOLS;
    password += generateRandomSymbols(1);
  }

  for (let i = password.length; i < lenght; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
  }

  return password;
}
