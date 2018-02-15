import enHkLocalization from './en-hk';
import enSgLocalization from './en-sg';
import enIdLocalization from './en-id';
import idIdLocalization from './id-id';
import enThLocalization from './en-th';
import thThLocalization from './th-th';

const localization = {
  'en-hk': enHkLocalization,
  'en-sg': enSgLocalization,
  'en-id': enIdLocalization,
  'id-id': idIdLocalization,
  'en-th': enThLocalization,
  'th-th': thThLocalization
};

export const getLocalization = ({ language, country }) => {
  return localization[`${language.toLowerCase()}-${country.toLowerCase()}`] ?
    localization[`${language.toLowerCase()}-${country.toLowerCase()}`] : {};
};

export default localization;