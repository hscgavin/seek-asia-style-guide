import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Text } from 'seek-asia-style-guide/react';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import styles from './Header.less';
import ActionTray from './components/ActionTray/ActionTray';

export const ACTIVE_TAB_HOME = 'HOME';
export const ACTIVE_TAB_SEARCH = 'SEARCH';
export const ACTIVE_TAB_SAVED_JOBS = 'SAVED_JOBS';

const currentLocale = ({ title, ItemIcon }) => {
  return (
    <span className={styles.currentLocale}>
      <ItemIcon className={styles.localeIcon} />
      <Text whispering>{title}</Text>
    </span>
  );
};

currentLocale.propTypes = {
  title: PropTypes.string,
  ItemIcon: PropTypes.func
};

const renderPrimaryNavLinks = ({ links, brandStyles }) => {
  const primaryNavLinks = (links.length && links[0].map) ?
    links[0].map((link, index) => {
      return (
        <span key={index} className={classnames(styles.primaryNavLink, brandStyles.primaryNavLink)}>
          <a href={link.url}>
            <Text>{link.title}</Text>
          </a>
        </span>
      );
    }) : [];

  return (
    <div className={styles.primaryNavLinksWrapper}>
      { primaryNavLinks }
    </div>
  );
};

renderPrimaryNavLinks.propTypes = {
  links: PropTypes.array,
  brandStyles: PropTypes.object.isRequired
};

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false
    };
  }

  handleToggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { loginAvailable = true, LogoComponent, logoProps, activeTab, links, more, locales, messages, brandStyles } = this.props;
    const menuOpen = this.state.menuOpen;

    return (
      <header className={styles.root}>
        <div className={styles.externalNav}>
          <div className={styles.locale}>
            {currentLocale(locales[0])}
          </div>
          <div className={styles.employerLink}>
            <Text whispering>Looking to hire?  Check out our <a className={classnames(styles.employerLink, brandStyles.employerLink)} href={messages['header.employerSiteUrl']}>{messages['header.employerSiteTitle']}</a></Text>
          </div>
        </div>
        <div className={loginAvailable ? styles.primaryNav : styles.primaryNavNoLogin}>
          <LogoComponent {...logoProps} />
          { renderPrimaryNavLinks({ links, brandStyles }) }
          { loginAvailable && (<Login />) }
        </div>
        <ActionTray brandStyles={brandStyles} messages={messages} menuOpen={menuOpen} handleToggleMenu={this.handleToggleMenu.bind(this)} loginAvailable={loginAvailable} activeTab={activeTab} />
        <Menu shouldShowMenu={menuOpen} messages={messages} links={links} more={more} locales={locales} brandStyles={brandStyles} />
      </header>
    );
  }
}

Header.propTypes = {
  loginAvailable: PropTypes.bool,
  LogoComponent: PropTypes.func,
  logoProps: PropTypes.object,
  activeTab: PropTypes.string,
  links: PropTypes.array,
  more: PropTypes.array,
  locales: PropTypes.array,
  messages: PropTypes.object.isRequired,
  brandStyles: PropTypes.object.isRequired
};
