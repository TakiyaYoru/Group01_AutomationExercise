export const authRegisterSuccessCases = [
  {
    title: 'TC01 - Register User (Success) [DD-1]',
    prefix: 'tc01',
  },
] as const;

export const authValidLoginCases = [
  {
    title: 'TC02 - Login User (Correct) [DD-1]',
    prefix: 'tc02',
  },
] as const;

export const authIncorrectLoginCases = [
  {
    title: 'TC03 - Login User (Incorrect) [DD-invalid-user]',
    email: 'wrong_user@mailinator.com',
    password: 'wrongPassword123',
  },
  {
    title: 'TC03 - Login User (Incorrect) [DD-empty-password]',
    email: 'wrong_user@mailinator.com',
    password: '123',
  },
] as const;

export const authRegisterExistingCases = [
  {
    title: 'TC04 - Register (Existing Email) [DD-1]',
    prefix: 'tc04',
    reSignupName: 'Another Name',
  },
] as const;

export const authDeleteCases = [
  {
    title: 'TC05 - Delete Account [DD-1]',
    prefix: 'tc05',
  },
] as const;

export const authEmptyLoginCases = [
  {
    title: 'TC06 - Login with Empty Fields [DD-1]',
  },
] as const;

export const authSignupMissingCases = [
  {
    title: 'TC07 - Signup Missing Required Info [DD-1]',
    prefix: 'tc07',
  },
] as const;

export const authLoginStateCases = [
  {
    title: 'TC08 - Verify Login State After Signup [DD-1]',
    prefix: 'tc08',
  },
] as const;
