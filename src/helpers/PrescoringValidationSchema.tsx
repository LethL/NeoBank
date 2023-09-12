import * as Yup from 'yup';

export const PrescoringValidationSchema = Yup.object({}).shape({
  lastName: Yup.string().required('Enter your last name').min(2, 'Last name must be at least 2 characters'),
  firstName: Yup.string().required('Enter your first name').min(2, 'First name must be at least 2 characters'),
  email: Yup.string().email().required('Email is required'),
  birthdate: Yup.string().required('Incorrect date of birth'),
  passportSeries: Yup.string()
    .required('Enter your passport series')
    .min(4, 'The series must be 4 digits')
    .max(4, 'The series must be 4 digits'),
  passportNumber: Yup.string()
    .required('Enter your passport number')
    .min(6, 'The series must be 6 digits')
    .max(6, 'The series must be 6 digits'),
  term: Yup.number(),
  amount: Yup.number(),
});
