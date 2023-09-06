const offerChoosenData = localStorage.getItem('offersData');
const jsonData = offerChoosenData ? JSON.parse(offerChoosenData) : '';

export const HOME = '/';
export const LOAN = 'loan';
export const APPLICATIONID = jsonData[0].applicationId;
export const DOCUMENT = 'document';
export const NOTFOUND = '*';

export const PATH_LIST = {
  HOME,
  LOAN: `${HOME}${LOAN}`,
  APPLICATIONID: `${HOME}${LOAN}/${APPLICATIONID}`,
  DOCUMENT: `${HOME}${LOAN}/${APPLICATIONID}/${DOCUMENT}`,
  NOTFOUND,
};
