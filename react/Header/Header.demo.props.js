import { HomeIcon, PortalIcon, CompanyIcon, LightbulbIcon, EducationIcon, ProfileIcon, ResourcesIcon, FlagHKIcon, FlagIDIcon, FlagSGIcon, FlagMYIcon, FlagVNIcon, FlagPHIcon, FlagTHIcon } from 'seek-asia-style-guide/react';
import JobStreetLogo from 'seek-asia-style-guide/jobStreet/Logo/Logo';
import JobsDBLogo from 'seek-asia-style-guide/jobsDB/Logo/Logo';

export const jobStreetProps = {
  LogoComponent: JobStreetLogo,
  links: [
    [ {title:"Home", url: 'https://hk.jobsdb.com/hk', ItemIcon: HomeIcon },
     {title:"MyJobStreet", url: 'https://hk.jobsdb.com/hk', ItemIcon: PortalIcon},
     {title:"Resources", url: 'https://hk.jobsdb.com/hk', ItemIcon: ResourcesIcon},
     {title:"Career Insights", url: 'https://hk.jobsdb.com/hk', ItemIcon: LightbulbIcon} 
    ],
    [{title:"My Account", ItemIcon: ProfileIcon, url: 'https://hk.jobsdb.com/hk'}],
    [{title:"Employer Site",  url: 'https://hk.jobsdb.com/hk'}]
  ],
  more: [   {title: 'Overseas Jobs', url: 'https://hk.jobsdb.com/hk'},
   {title: "Fresh Grad Jobs", url: 'https://hk.jobsdb.com/hk'},
   {title: "Classified Jobs", url: 'https://hk.jobsdb.com/hk'},
  ],
  locales: [{
    title: 'Malaysia (English)',
    ItemIcon: FlagMYIcon,
    url: 'https://hk.jobsdb.com/hk'
  },{
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
  }, {
    title: 'Phillipines (English)',
    ItemIcon: FlagPHIcon,
    url: 'https://hk.jobsdb.com/hk'
  }, {
    title: 'Vietnam (English)',
    ItemIcon: FlagVNIcon,
    url: 'https://hk.jobsdb.com/hk'
  }],
  messages: {
    'header.homeUrl': 'https://jobstreet.com.my',
    'menu.more': 'More',
    'menu.backToMenu': 'Back to Menu'
  }
};

export const jobsDBProps = {
  LogoComponent: JobsDBLogo,
  links: [
    [ {title:"Home", url: 'https://hk.jobsdb.com/hk', ItemIcon: HomeIcon },
     {title:"MyJobsDB", url: 'https://hk.jobsdb.com/hk', ItemIcon: PortalIcon},
     {title:"Resources", url: 'https://hk.jobsdb.com/hk', ItemIcon: ResourcesIcon},
     {title:"Career Insights", url: 'https://hk.jobsdb.com/hk', ItemIcon: LightbulbIcon} 
    ],
    [{title:"My Account", ItemIcon: ProfileIcon, url: 'https://hk.jobsdb.com/hk'}],
    [{title:"Employer Site",  url: 'https://hk.jobsdb.com/hk'}]
  ],
  more: [   {title: 'Overseas Jobs', url: 'https://hk.jobsdb.com/hk'},
   {title: "Fresh Grad Jobs", url: 'https://hk.jobsdb.com/hk'},
   {title: "Classified Jobs", url: 'https://hk.jobsdb.com/hk'},
  ],
  locales: [{
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
  }, {
    title: 'Phillipines (English)',
    ItemIcon: FlagPHIcon,
    url: 'https://hk.jobsdb.com/hk'
  }, {
    title: 'Malaysia (English)',
    ItemIcon: FlagMYIcon,
    url: 'https://hk.jobsdb.com/hk'
  }, {
    title: 'Vietnam (English)',
    ItemIcon: FlagVNIcon,
    url: 'https://hk.jobsdb.com/hk'
  }],
  messages: {
    'header.homeUrl': 'https://hk.jobsdb.com/hk',
    'menu.more': 'More',
    'menu.backToMenu': 'Back to Menu'
  }
};