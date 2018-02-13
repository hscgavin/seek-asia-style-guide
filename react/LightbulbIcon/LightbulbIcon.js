import svgMarkup from './LightbulbIcon.svg';

import React from 'react';
import classnames from 'classnames';
import Icon from '../private/Icon/Icon';
import styles from './LightbulbIcon.less';

export default function LightbulbIcon(props) {
  return <Icon svgClassName={classnames(styles.iconSvg, props.svgClassName)} markup={svgMarkup} {...props} />;
}

LightbulbIcon.displayName = 'LightbulbIcon';