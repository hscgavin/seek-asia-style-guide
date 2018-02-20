import React from 'react';
import classnames from 'classnames';
import { Button } from 'seek-asia-style-guide/react';
import styles from './MenuItem.less';

const withIcon = ({ ItemIcon, children, brandStyles, iconProps={} }) => {
  iconProps.svgClassName = iconProps.svgClassName ? classnames(iconProps.svgClassName, brandStyles.menuIcon) : brandStyles.menuIcon;

  return [
    ...(ItemIcon ? [(<ItemIcon className={styles.icon} {...iconProps} />)] : []), 
    children
  ];
};

const interactionButton = ({ ItemIcon, children, iconProps, brandStyles, ...restProps }) => {
  return (
    <Button {...restProps}>
      { withIcon({ ItemIcon, children, iconProps, brandStyles }) }
    </Button>
  );
}

const renderInteraction = ({ linkUrl, handleClick, children, ItemIcon, iconProps, brandStyles }) => {

  const interactionProps = {
    color: "transparent",
    component: 'a',
    className: styles.item,
    children,
    ItemIcon,
    iconProps,
    brandStyles
  };

  if (linkUrl) {
    return interactionButton({
      ...interactionProps,
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
      { withIcon({ ItemIcon, children, iconProps, brandStyles }) }
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