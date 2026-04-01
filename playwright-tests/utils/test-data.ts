export type User = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

export const makeUser = (prefix = 'pw'): User => {
  const stamp = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

  return {
    name: `${prefix}_user_${stamp}`,
    email: `${prefix}.${stamp}@mailinator.com`,
    password: 'Password@123',
    firstName: 'Playwright',
    lastName: 'Tester',
    company: 'QA Team',
    address1: '123 Test Street',
    address2: 'Suite 9',
    country: 'United States',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '0901234567',
  };
};
