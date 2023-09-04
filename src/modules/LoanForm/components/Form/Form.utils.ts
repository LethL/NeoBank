import { PrescoringFormEntity } from 'domains/PrescoringForm.entity';
import { ScoringFormEntity } from 'domains/ScoringForm.entity';

export const DEFAULT_VALUES: PrescoringFormEntity = {
  amount: 150000,
  term: '6 month',
  firstName: '',
  lastName: '',
  middleName: '',
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
  employmentStatus: '',
  employerINN: '',
  salary: '',
  position: '',
  workExperienceTotal: '',
  workExperienceCurrent: '',
};
