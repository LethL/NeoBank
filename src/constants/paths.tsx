import applicationId from './applicationId';

export const HOME = '/';
export const LOAN = 'loan';
export const APPLICATIONID = applicationId;
export const DOCUMENT = 'document';
export const SIGN = 'sign';
export const CODE = 'code';
export const NOTFOUND = '*';

export const PATH_LIST = {
  HOME,
  LOAN: `${HOME}${LOAN}`,
  APPLICATIONID: `${HOME}${LOAN}/${APPLICATIONID}`,
  DOCUMENT: `${HOME}${LOAN}/${APPLICATIONID}/${DOCUMENT}`,
  SIGN: `${HOME}${LOAN}/${APPLICATIONID}/${DOCUMENT}/${SIGN}`,
  CODE: `${HOME}${LOAN}/${APPLICATIONID}/${CODE}`,
  NOTFOUND,
};
