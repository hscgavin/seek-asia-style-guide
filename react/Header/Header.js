import React from 'react';

import styles from './Header.less';
import { HomeIcon, SearchIcon, BookmarkIcon, HamburgerIcon } from 'seek-asia-style-guide/react';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import localization from './localization';

const Header = ({ loginAvailable = true, logoComponent: LogoComponent, language, country, tenant }) => {
  const messages = localization[tenant] && localization[tenant][`${language}-${country}`] ? localization[tenant][`${language}-${country}`] : {};

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
          <a href={messages['header.homeUrl']}>
            <HomeIcon svgClassName={styles.svg} />
          </a>
        </div>
        <div>
          <SearchIcon svgClassName={styles.svg} />
        </div>
        { loginAvailable && (
          <div>
            <BookmarkIcon svgClassName={styles.svg} />
          </div>
        )}
        <div>
          <HamburgerIcon svgClassName={styles.svg} />
        </div>
      </div>
      <Menu shouldShowMenu />
    </header>
  )
};

export default Header;