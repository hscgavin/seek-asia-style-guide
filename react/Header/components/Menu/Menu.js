import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Menu.less';
import MenuItem from './components/MenuItem/MenuItem';
import { Text, Section, MoreIcon, ChevronIcon, CheckMarkIcon } from 'seek-asia-style-guide/react';

export default class Menu extends Component {
  constructor() {
    super();

    this.state = {
      moreMenuOpen: false,
      localesMenuOpen: false
    };
  }

  toggleMoreMenu() {
    this.setState({ moreMenuOpen: !this.state.moreMenuOpen });
  }

  toggleLocalesMenu() {
    this.setState({ localesMenuOpen: !this.state.localesMenuOpen });
  }

  renderMenuLinks = ({ links, locales, more, messages, brandStyles }) => {
    if (links && links.map) {
      return links.map((linksList, index) => {
        const menuItems = linksList.map ? linksList.map((link, linkIndex) => (
          <MenuItem key={linkIndex} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles}>
            <Text>{link.title}</Text>
          </MenuItem>
        )) : [];
        if (more && index === 0) {
          menuItems.push((
            <MenuItem key={menuItems.length} handleClick={this.toggleMoreMenu} ItemIcon={MoreIcon} brandStyles={brandStyles}>
              <Text>{messages['menu.more']}</Text>
            </MenuItem>
          ));
        }
        if (locales && locales.length && index === 1) {
          menuItems.push((
            <MenuItem key={menuItems.length} handleClick={this.toggleLocalesMenu} ItemIcon={locales[0].ItemIcon} brandStyles={brandStyles}>
              <Text>{locales[0].title}</Text>
            </MenuItem>
          ));
        }
        return (
          <div key={index} className={styles.menuBody}>
            {menuItems}
          </div>
        );
      });
    }

    return null;
  }

  render() {
    const { messages, shouldShowMenu, links, locales, more, brandStyles } = this.props;
    return (
      <div className={classnames(styles.root, { [styles.showMenu]: shouldShowMenu })}>
        <Section className={styles.headerMenu}>
          <Text whisperingTitle>JOB SEEKER</Text>
        </Section>
        {
          this.renderMenuLinks({ links, locales, more, messages, brandStyles })
        }
        <div className={this.state.moreMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem handleClick={this.toggleMoreMenu} ItemIcon={ChevronIcon} iconProps={{ direction: 'left' }} brandStyles={brandStyles}>
            <Text>{messages['menu.backToMenu']}</Text>
          </MenuItem>
          <Section className={styles.headerMenu}>
            <Text whisperingTitle>MORE</Text>
          </Section>
          {more && more.map && more.map((link, index) => (
            <MenuItem key={index} linkUrl={link.url} ItemIcon={link.ItemIcon} brandStyles={brandStyles}>
              <Text>{link.title}</Text>
            </MenuItem>
          ))}
        </div>
        <div className={this.state.localesMenuOpen ? styles.showSubMenu : styles.subMenu}>
          <MenuItem handleClick={this.toggleLocalesMenu} ItemIcon={ChevronIcon} iconProps={{ direction: 'left' }} brandStyles={brandStyles}>
            <Text>{messages['menu.backToMenu']}</Text>
          </MenuItem>
          {locales && locales.map && locales.map((link, index) => (
            <MenuItem key={index} linkUrl={index > 0 ? link.url : null} ItemIcon={link.ItemIcon} brandStyles={brandStyles}>
              <Text>{link.title}</Text>
              {index === 0 && (
                <CheckMarkIcon className={styles.selectedLocaleCheck} svgClassName={styles.selectedLocaleCheckIcon} />
              )}
            </MenuItem>
          ))}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  messages: PropTypes.object,
  shouldShowMenu: PropTypes.bool,
  links: PropTypes.array,
  locales: PropTypes.array,
  more: PropTypes.array,
  brandStyles: PropTypes.object.isRequired
};
