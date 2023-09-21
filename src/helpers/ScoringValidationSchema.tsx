import * as Yup from 'yup';

export const ScoringValidationSchema = Yup.object({}).shape({
  gender: Yup.string().required('Select one of the options'),
  maritalStatus: Yup.string().required('Select one of the options'),
  dependentAmount: Yup.number().required('Select one of the options'),
  passportIssueDate: Yup.string().required('Incorrect date of passport issue date'),
  passportIssueBranch: Yup.string()
    .required('Enter your passport division code')
    .min(6, 'The series must be 6 digits')
    .max(6, 'The series must be 6 digits'),
  employment: Yup.object().shape({
    employmentStatus: Yup.string().required('Select one of the options'),
    employerINN: Yup.string()
      .required('Enter your department code')
      .min(12, 'Department code must be 12 digits')
      .max(12, 'Department code must be 12 digits'),
    salary: Yup.string().required('Enter your salary').min(4, 'Salary must be more 3 digits'),
    position: Yup.string().required('Select one of the options'),
    workExperienceTotal: Yup.string().required('Enter your work experience total').max(2, 'Max 2 digits'),
    workExperienceCurrent: Yup.string().required('Enter your work experience current').max(2, 'Max 2 digits'),
  }),
});
