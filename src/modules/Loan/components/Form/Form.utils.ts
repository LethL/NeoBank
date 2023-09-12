import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';

export const DEFAULT_VALUES: PrescoringFormEntity = {
  amount: 150000,
  term: 6,
  firstName: '',
  lastName: '',
  email: '',
  birthdate: '',
  passportSeries: '',
  passportNumber: '',
};

export const DEFAULT_VALUES_SCORING: ScoringFormEntity = {
  gender: '',
  maritalStatus: '',
  dependentAmount: '',
  passportIssueDate: '',
  passportIssueBranch: '',
  employment: {
    employmentStatus: '',
    employerINN: '',
    salary: '',
    position: '',
    workExperienceTotal: '',
    workExperienceCurrent: '',
  },
  account: '11223344556677889900',
};
