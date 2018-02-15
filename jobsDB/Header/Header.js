import React from 'react';

import { Header as GlobalHeader } from 'seek-asia-style-guide/react';
import Logo from '../Logo/Logo';
import { HomeIcon, PortalIcon, CompanyIcon, LightbulbIcon, EducationIcon, ProfileIcon, ResourcesIcon, FlagHKIcon, FlagIDIcon, FlagSGIcon, FlagTHIcon } from 'seek-asia-style-guide/react';
import { getLocalization } from '../localization';

const getJobsDBProps = ({ country, language, loginAvailable }) => {
  const messages = getLocalization({ country, language });

  const links = [];
  links.push([   // first group of links
      { title: messages['header.homeTitle'], url: messages['header.homeUrl'], ItemIcon: HomeIcon },
      { title: messages['header.myJobsDBTitle'], url: messages['header.myJobsDBUrl'], ItemIcon: PortalIcon },
      { title: messages['header.resourcesTitle'], url: messages['header.resourcesUrl'], ItemIcon: ResourcesIcon },
      { title: messages['header.careerInsightsTitle'], url: messages['header.careerInsightsUrl'], ItemIcon: LightbulbIcon } 
  ]);
  
  links.push(  // second group of links, login awareness goes here 
    loginAvailable ? 
      [ { title: messages['header.myAccountTitle'], url: messages['header.myAccountUrl'], ItemIcon: ProfileIcon } ] :
      []
  );

  links.push([
    { title: messages['header.employerSiteTitle'], url: messages['header.employerSiteUrl'] }
  ]);

  const locales = [
    {
      title: 'Hong Kong (English)',
      ItemIcon: FlagHKIcon,
      url: 'https://hk.jobsdb.com/hk'
    }, {
      title: 'Singapore (English)',
      ItemIcon: FlagSGIcon,
      url: 'https://hk.jobsdb.com/hk'
    }, {
      title: 'Indonesia (English)',
      ItemIcon: FlagIDIcon,
      url: 'https://hk.jobsdb.com/hk'
    }, {
      title: 'Thailand (English)',
      ItemIcon: FlagTHIcon,
      url: 'https://hk.jobsdb.com/hk'
    }
  ];

  return {
    links,
    locales,
    messages
  }
};

const Header = ({ country, language, activeTab, loginAvailable=true }) => {
  return (
    <GlobalHeader 
      LogoComponent={Logo}
      activeTab={activeTab}
      loginAvailable={loginAvailable}
      {...getJobsDBProps({ country, language, loginAvailable })}
    />
  );
};

export default Header;