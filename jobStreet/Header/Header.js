import React from 'react';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { HomeIcon, PortalIcon, CompanyIcon, LightbulbIcon, EducationIcon, ProfileIcon } from 'seek-asia-style-guide/react';
import { getLocalization, locales } from '../localization';

const getJobStreetProps = ({ country, language, loginAvailable }) => {
  const messages = getLocalization({ country, language });

  const links = [];
  links.push([   // first group of links
      { title: messages['header.homeTitle'], url: messages['header.homeUrl'], ItemIcon: HomeIcon },
      { title: messages['header.myJobStreetTitle'], url: messages['header.myJobStreetUrl'], ItemIcon: PortalIcon },
      { title: messages['header.companyProfilesTitle'], url: messages['header.companyProfilesUrl'], ItemIcon: CompanyIcon },
      { title: messages['header.careerInsightsTitle'], url: messages['header.careerInsightsUrl'], ItemIcon: LightbulbIcon },
      { title: messages['header.educationTitle'], url: messages['header.educationUrl'], ItemIcon: EducationIcon } 
  ]);
  
  links.push(  // second group of links, login awareness goes here 
    loginAvailable ? 
      [ { title: messages['header.myAccountTitle'], url: messages['header.myAccountUrl'], ItemIcon: ProfileIcon } ] :
      []
  );

  links.push([
    { title: messages['header.employerSiteTitle'], url: messages['header.employerSiteUrl'] }
  ]);

  const more = [
    { title: messages['header.overseasJobsTitle'], url: messages['header.overseasJobsUrl'] },
    { title: messages['header.freshGradJobsTitle'], url: messages['header.freshGradJobsUrl'] },
    { title: messages['header.classifiedJobsTitle'], url: messages['header.classifiedJobsUrl'] }
  ];

  const currentLocale = locales.filter(locale => {
    return locale.country === country && locale.language === language;
  });

  const otherLocales = locales.filter(locale => {
    return !(locale.country === country && locale.language === language);
  });

  const sortedLocales = [
    ...currentLocale,
    ...otherLocales
  ];

  return {
    links,
    messages,
    locales: sortedLocales
  }
};



const Header = ({ country='my', language='en', activeTab, loginAvailable=true }) => {
  const CountryLogo = () => (
    <Logo country={country} />
  );

  return (
    <GlobalHeader 
      LogoComponent={CountryLogo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobStreetProps({ country, language, loginAvailable })}
      brandStyles={styles}
    />
  );
};

export default Header;