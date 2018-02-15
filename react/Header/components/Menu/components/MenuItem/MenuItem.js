import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-asia-style-guide/react';
import styles from './MenuItem.less';

const withIcon = ({ ItemIcon, children, iconProps={} }) => {
  return [
    ...(ItemIcon ? [(<ItemIcon className={styles.icon} {...iconProps} />)] : []), 
    children
  ];
};

const interactionButton = ({ ItemIcon, children, iconProps, ...restProps }) => {
  return (
    <Button {...restProps}>
      { withIcon({ ItemIcon, children, iconProps }) }
    </Button>
  );
}

const renderInteraction = ({ linkUrl, handleClick, children, ItemIcon, iconProps }) => {

  const interactionProps = {
    color: "transparent",
    className: styles.interaction,
    children,
    ItemIcon,
    iconProps
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
      { withIcon({ ItemIcon, children, iconProps }) }
    </span>
  );
};

const MenuItem = ({ className, ...restProps }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {renderInteraction({ ...restProps })}
    </div>
  )
};

export default MenuItem;