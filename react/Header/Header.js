import React, { Component } from 'react';

import styles from './Header.less';
import { HomeIcon, SearchIcon, BookmarkIcon, HamburgerIcon, Text } from 'seek-asia-style-guide/react';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';

export const ACTIVE_TAB_HOME = "HOME";
export const ACTIVE_TAB_SEARCH = "SEARCH";
export const ACTIVE_TAB_SAVED_JOBS = "SAVED_JOBS";

const actionTrayLink = ({ linkUrl, LinkIcon, activeTab, tabName, menuOpen }) => {
  return !menuOpen && activeTab === tabName ? (
    <LinkIcon svgClassName={styles.activeIcon} />
  ) : (
    <a href={linkUrl}>
      <LinkIcon svgClassName={styles.svg} />
    </a>
  )
}

const currentLocale = ({ title, ItemIcon }) => {
  return (
    <span className={styles.currentLocale}>
      <ItemIcon className={styles.localeIcon} />
      <Text whispering>{title}</Text>
    </span>
  )
}

const renderPrimaryNavLinks = (links) => {
  const primaryNavLinks = (Array.isArray(links) && links.length && links[0].map) ? 
    links[0].map(link => {
      return (
        <span className={styles.primaryNavLink}>
          <a href={link.url}>
            <Text>{link.title}</Text>
          </a>
        </span>
      )
    }) : [];

    return (
      <div className={styles.primaryNavLinksWrapper}>
        { primaryNavLinks }
      </div>
    );
};

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  
  render () {
    const { loginAvailable = true, LogoComponent, activeTab, links, more, locales, messages } = this.props;
    
    const menuOpen = this.state.menuOpen;

    return (
      <header className={styles.root}>
        <div className={styles.externalNav}>
          <div className={styles.locale}>
            {currentLocale(locales[0])}
          </div>
          <div className={styles.employerLink}>
            <Text whispering>Looking to hire?  Check out our <a href={messages['header.employerSiteUrl']}>{messages['header.employerSiteTitle']}</a></Text>
          </div>
        </div>
        <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
          <LogoComponent />
          { renderPrimaryNavLinks(links) }
          { loginAvailable && (<Login />) }
        </div>
        <div className={styles.actionTray}>
          <div>
            { actionTrayLink({ LinkIcon: HomeIcon, linkUrl: messages['header.homeUrl'], activeTab, tabName: ACTIVE_TAB_HOME, menuOpen }) }
          </div>
          <div>
            { actionTrayLink({ LinkIcon: SearchIcon, linkUrl: messages['header.homeUrl'], activeTab, tabName: ACTIVE_TAB_SEARCH, menuOpen }) }
          </div>
          { loginAvailable && (
            <div>
              { actionTrayLink({ LinkIcon: BookmarkIcon, linkUrl: messages['header.homeUrl'], activeTab, tabName: ACTIVE_TAB_SAVED_JOBS, menuOpen }) }
            </div>
          )}
          <div onClick={this.toggleMenu} className={styles.menuToggle}>
            <HamburgerIcon svgClassName={menuOpen ? styles.activeIcon : styles.svg} />
          </div>
        </div>
        <Menu shouldShowMenu={menuOpen} messages={messages} links={links} more={more} locales={locales} />
      </header>
    )
  }
}