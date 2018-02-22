import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { HomeIcon, PortalIcon, LightbulbIcon, ProfileIcon, ResourcesIcon } from 'seek-asia-style-guide/react';
import { getLocalization, locales } from '../localization';

const getJobsDBProps = ({ country, language, loginAvailable }) => {
  const messages = getLocalization({ country, language });

  const links = [];
  links.push([ // first group of links
    { title: messages['header.homeTitle'], url: messages['header.homeUrl'], ItemIcon: HomeIcon },
    { title: messages['header.myJobsDBTitle'], url: messages['header.myJobsDBUrl'], ItemIcon: PortalIcon },
    { title: messages['header.resourcesTitle'], url: messages['header.resourcesUrl'], ItemIcon: ResourcesIcon },
    { title: messages['header.careerInsightsTitle'], url: messages['header.careerInsightsUrl'], ItemIcon: LightbulbIcon }
  ]);

  // links.push( // second group of links, login awareness goes here
  //   loginAvailable ?
  //     [ { title: messages['header.myAccountTitle'], url: messages['header.myAccountUrl'], ItemIcon: ProfileIcon } ] :
  //     []
  // );

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
  };
};

const Header = ({ country = 'hk', language = 'en', activeTab, loginAvailable = false }) => {
  return (
    <GlobalHeader
      LogoComponent={Logo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobsDBProps({ country, language, loginAvailable })}
      brandStyles={styles}
    />
  );
};

Header.propTypes = {
  country: PropTypes.string,
  language: PropTypes.string,
  activeTab: PropTypes.string,
  loginAvailable: PropTypes.bool
};

export default Header;
