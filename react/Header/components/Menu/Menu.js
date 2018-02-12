import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Menu.less';
import MenuItem from './components/MenuItem/MenuItem';
import { Text, Section, HomeIcon } from 'seek-asia-style-guide/react';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      moreMenuOpen: false
    };
  }

  openMoreMenu = () => {
    this.setState({ moreMenuOpen: true });
  };

  closeMoreMenu = () => {
    this.setState({ moreMenuOpen: false });
  };

  render() {
    const { messages, shouldShowMenu, loginAvailable, tenant } = this.props;
  
    const links = tenant === "jobsdb" ? [{title:"Home", url: 'https://hk.jobsdb.com/hk', ItemIcon: HomeIcon },
      {title:"MyJobsDB", url: 'https://hk.jobsdb.com/hk'},
      {title:"Resources", url: 'https://hk.jobsdb.com/hk'},
      {title:"Career Insights", url: 'https://hk.jobsdb.com/hk'}
    ] : [{title:"Home", url: 'https://hk.jobsdb.com/hk', ItemIcon: HomeIcon},
      {title:"MyJobsStreet", url: 'https://hk.jobsdb.com/hk'},
      {title:"Company Profiles", url: 'https://hk.jobsdb.com/hk'},
      {title:"Career Insights", url: 'https://hk.jobsdb.com/hk'},
      {title:"Education", url: 'https://hk.jobsdb.com/hk'},
      {title:"More", onClick:this.openMoreMenu}
    ];
    const secondaryMenuLinks = tenant === "jobsdb" ? [{title:"My Account"},
      {title:"Hong Kong (English)"}
    ] : [{title:"Log In / Sign Up"},
      {title:"Hong Kong (English)"}
    ];
    const thirdMenuLinks = {title:"Employer Site"};
    const moreMenu = [
      {title: 'Overseas Jobs', url: 'https://hk.jobsdb.com/hk'},
      {title: "Fresh Grad Jobs", url: 'https://hk.jobsdb.com/hk'},
      {title: "Classified Jobs", url: 'https://hk.jobsdb.com/hk'},
      {title: "Back",onClick:this.closeMoreMenu}
    ];

    return (
      <div className={classnames(styles.root, {
        [styles.showMenu]: shouldShowMenu
      })}>
        <Section className={styles.headerMenu}>
          <Text whisperingTitle>JOB SEEKER</Text>
        </Section>
        <div className={styles.menuBody}>
          {links.map(link => (
            <MenuItem handleClick={link.onClick} linkUrl={link.url} ItemIcon={link.ItemIcon}>
              <Text>{link.title}</Text>
            </MenuItem>
          ))}
        </div>
        <div className={styles.menuBody}>
          {secondaryMenuLinks.map(link => (
            <MenuItem linkUrl={link.url}>
              <Text>{link.title}</Text>
            </MenuItem>
          ))}
        </div>
        <div className={styles.menuBody}>
          <MenuItem>
            <Text>{thirdMenuLinks.title}</Text>
          </MenuItem>
        </div>
        <div className={this.state.moreMenuOpen ? styles.showMoreMenu : styles.moreMenu}>
          {moreMenu.map(link => (
            <MenuItem handleClick={link.onClick}>
              <Text>{link.title}</Text>
            </MenuItem>
          ))}
        </div>
      </div>
    );
  }
}
