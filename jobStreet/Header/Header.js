import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import {
  Text,
  PageBlock,
  Section,
  HamburgerIcon,
  Button
} from 'seek-asia-style-guide/react';
import Nav from './components/Nav/Nav';
import styles from './header.less';
import links from './links';
import localization from '../localization';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick(e) {
    const userClickedOutsideOfDropdown = !this.dropdownNode.contains(e.target);
    if (userClickedOutsideOfDropdown) {
      this.showNav(false);
    }
  }

  showNav(shouldShowNav) {
    const eventAction = shouldShowNav ? 'addEventListener' : 'removeEventListener';
    document[eventAction]('click', this.handleClick, false);
    this.setState({
      isNavActive: shouldShowNav
    });
  }

  render() {
    const { username, userToken, language, country, authenticationStatus, activeNavLinkTextKey } = this.props;
    const { isNavActive } = this.state;
    const userLinks = links.getUserLinks(username, userToken);
    const navLinks = links.getNavLinks(username, userToken);
    const messages = localization[`${language}-${country}`];

    return (
      <header className={styles.root} role="banner" aria-label="Primary navigation">
        {/*
          * PageBlock / Section being a functional component doesn't work with `ref`.
          * https://reactjs.org/docs/refs-and-the-dom.html
         */}
        <PageBlock
          className={
            classNames({
              [styles.navWrapper]: true,
              [styles.navWrapperHideOnMobile]: !isNavActive
            })
          }>
          <div
            className={styles.navContainer}
            ref={node => {
              this.dropdownNode = node;
            }}>
            <Nav key={'navLinks'} links={navLinks} messages={messages} activeNavLinkTextKey={activeNavLinkTextKey} />
            {
              authenticationStatus === 'pending' ||
              (
                <Nav key={'userLinks'} links={userLinks} messages={messages} />
              )
            }
          </div>
        </PageBlock>
        <PageBlock className={styles.bannerWrapper}>
          <Section className={styles.bannerContainer}>
            <Button
              className={styles.toggle}
              onClick={() => {
                if (!isNavActive) {
                  this.showNav(true);
                }
              }}>
              <HamburgerIcon />
            </Button>
            <div className={styles.logoContainer}>
              <a href="/" title={messages['header.homeTitle']}>
                <Logo className={styles.logo} />
              </a>
            </div>
            <a
              className={styles.employerLink}
              href={messages['header.employerLink']}
              title={messages['header.employerTitle']}>
              <Text strong>{messages['header.employerText']}</Text>
            </a>
          </Section>
        </PageBlock>
      </header >
    );
  }
}

Header.propTypes = {
  username: PropTypes.string,
  userToken: PropTypes.string,
  authenticationStatus: PropTypes.oneOf(
    ['authenticated', 'unauthenticated', 'pending']
  ).isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  activeNavLinkTextKey: PropTypes.string
};

export default Header;
