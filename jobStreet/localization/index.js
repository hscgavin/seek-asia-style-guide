import enMyLocalisation from './en-my';
import enSgLocalisation from './en-sg';
import enPhLocalisation from './en-ph';
import enIdLocalisation from './en-id';
import enVnLocalisation from './en-vn';
import idIdLocalisation from './id-id';
import viVnLocalisation from './vi-vn';

const localization = {
  'en-my': enMyLocalisation,
  'en-sg': enSgLocalisation,
  'en-ph': enPhLocalisation,
  'en-id': enIdLocalisation,
  'en-vn': enVnLocalisation,
  'id-id': idIdLocalisation,
  'vi-vn': viVnLocalisation
};

export const getLocalization = ({ language, country }) => {
  return localization[`${language.toLowerCase()}-${country.toLowerCase()}`] ?
    localization[`${language.toLowerCase()}-${country.toLowerCase()}`] : {};
};

export default localization;
