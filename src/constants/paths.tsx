export const HOME = '/';
export const LOAN = 'loan';
export const APPLICATION = '/4';
export const NOTFOUND = '*';

export const PATH_LIST = {
  HOME,
  LOAN: `${HOME}${LOAN}`,
  APPLICATION: `${HOME}${LOAN}${APPLICATION}`,
  NOTFOUND,
};
