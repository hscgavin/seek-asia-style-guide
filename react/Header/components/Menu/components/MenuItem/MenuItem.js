import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-asia-style-guide/react';
import styles from './MenuItem.less';

const withIcon = ({ ItemIcon, children }) => {
  return [
    ...(ItemIcon ? [(<ItemIcon className={styles.icon} />)] : []), 
    children
  ];
};

const interactionButton = ({ ItemIcon, children, ...restProps }) => {
  return (
    <Button {...restProps}>
      { withIcon({ ItemIcon, children }) }
    </Button>
  );
}

const renderInteraction = ({ linkUrl, handleClick, children, ItemIcon }) => {

  const interactionProps = {
    color: "transparent",
    className: styles.interaction,
    children,
    ItemIcon
  };

  if (linkUrl) {
    return interactionButton({
      ...interactionProps,
      component: 'a',
      href: linkUrl
    });
  } else if (handleClick) {
    return interactionButton({
      ...interactionProps,
      onClick: handleClick
    });
  }

  return (
    <span className={styles.item}>
      { withIcon({ ItemIcon, children }) }
    </span>
  );
};

const MenuItem = ({ handleClick, className, linkUrl, ItemIcon, children }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {renderInteraction({ linkUrl, handleClick, ItemIcon, children })}
    </div>
  )
};

export default MenuItem;