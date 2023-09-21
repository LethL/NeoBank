export interface ScoringFormEntity {
  gender: string;
  maritalStatus: string;
  dependentAmount: number | string;
  passportIssueDate: string;
  passportIssueBranch: string;
  employment: {
    employmentStatus: string;
    employerINN: string;
    salary: string;
    position: string;
    workExperienceTotal: string;
    workExperienceCurrent: string;
  };
  account: string;
}
