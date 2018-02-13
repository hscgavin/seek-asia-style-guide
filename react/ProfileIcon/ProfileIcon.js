import svgMarkup from './ProfileIcon.svg';

import React from 'react';
import classnames from 'classnames';
import Icon from '../private/Icon/Icon';
import styles from './ProfileIcon.less';

export default function ProfileIcon(props) {
  return <Icon svgClassName={classnames(styles.iconSvg, props.svgClassName)} markup={svgMarkup} {...props} />;
}

ProfileIcon.displayName = 'ProfileIcon';
