import React from 'react';
import classnames from 'classnames';
import styles from './Menu.less';

const Menu = ({ messages, shouldShowMenu, loginAvailable }) => {
  return (
    <div className={classnames(styles.root, {
      [styles.showMenu]: shouldShowMenu
    })}>
      
    </div>
  );
};

export default Menu;