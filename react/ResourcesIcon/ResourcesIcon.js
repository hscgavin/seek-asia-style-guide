import svgMarkup from './ResourcesIcon.svg';

import React from 'react';
import classnames from 'classnames';
import Icon from '../private/Icon/Icon';
import styles from './ResourcesIcon.less';

export default function ResourcesIcon(props) {
  return <Icon svgClassName={classnames(styles.iconSvg, props.svgClassName)} markup={svgMarkup} {...props} />;
}

ResourcesIcon.displayName = 'ResourcesIcon';