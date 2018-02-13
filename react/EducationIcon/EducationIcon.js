import svgMarkup from './EducationIcon.svg';

import React from 'react';
import classnames from 'classnames';
import Icon from '../private/Icon/Icon';
import styles from './EducationIcon.less';

export default function EducationIcon(props) {
  return <Icon svgClassName={classnames(styles.iconSvg, props.svgClassName)} markup={svgMarkup} {...props} />;
}

EducationIcon.displayName = 'EducationIcon';