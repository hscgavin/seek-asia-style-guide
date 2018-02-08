import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './Menu.less';
import { Text, Card, Section } from 'seek-asia-style-guide/react';

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
  
    const links = tenant === "jobsdb" ? [{title:"Home"},
      {title:"MyJobsDB"},
      {title:"Resources"},
      {title:"Career Insights"}
    ] : [{title:"Home"},
      {title:"MyJobsStreet"},
      {title:"Company Profiles"},
      {title:"Career Insights"},
      {title:"Education"},
      {title:"More",onClick:this.openMoreMenu}
    ];
    const secondaryMenuLinks = tenant === "jobsdb" ? [{title:"My Account"},
      {title:"Hong Kong (English)"}
    ] : [{title:"Log In / Sign Up"},
      {title:"Hong Kong (English)"}
    ];
    const thirdMenuLinks = {title:"Employer Site"};
    const moreMenu = [
      {title: "Overseas Jobs"},
      {title: "Fresh Grad Jobs"},
      {title: "Classified Jobs"},
      {title: "Back",onClick:this.closeMoreMenu}
    ];

    return (
      <div className={classnames(styles.root, {
        [styles.showMenu]: shouldShowMenu
      })}>
        <Card className={styles.headerMenu}>
          <Section>
            <Text whispering>JOB SEEKER</Text>
          </Section>
        </Card>
        <ul className={styles.menuBody}>
          {links.map(link => (
          <li className={styles.menuItem} onClick={link.onClick}>
            {link.title}
          </li>
          ))}
        </ul>
        <ul className={styles.menuBody}>
          {secondaryMenuLinks.map(link => (
          <li className={styles.menuItem}>
            {link.title}
          </li>
          ))}
        </ul>
        <ul className={styles.menuBody}>
          <li className={styles.menuItem}>
            {thirdMenuLinks.title}
          </li>
        </ul>
        <ul className={this.state.moreMenuOpen ? styles.showMoreMenu : styles.moreMenu}>
          {moreMenu.map(link => (
          <li className={styles.menuItem} onClick={link.onClick}>
            {link.title}
          </li>
          ))}
        </ul>
      </div>
    );
  }
}
