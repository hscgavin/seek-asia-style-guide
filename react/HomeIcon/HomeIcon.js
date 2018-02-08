import svgMarkup from './HomeIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';
import styles from './HomeIcon.less';

export default function HomeIcon(props) {
  return <Icon svgClassName={props.svgClassName || styles.svg} markup={svgMarkup} {...props} />;
}

HomeIcon.displayName = 'HomeIcon';