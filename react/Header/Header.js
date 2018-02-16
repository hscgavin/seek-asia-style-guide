import React, { Component } from 'react';

import styles from './Header.less';
import { HomeIcon, SearchIcon, BookmarkIcon, HamburgerIcon } from 'seek-asia-style-guide/react';
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
          Language/Country - Employer Link
        </div>
        <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
          <LogoComponent />
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