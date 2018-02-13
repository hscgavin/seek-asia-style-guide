import svgMarkup from './CompanyIcon.svg';

import React from 'react';
import classnames from 'classnames';
import Icon from '../private/Icon/Icon';
import styles from './CompanyIcon.less';

export default function CompanyIcon(props) {
  return <Icon svgClassName={classnames(styles.iconSvg, props.svgClassName)} markup={svgMarkup} {...props} />;
}

CompanyIcon.displayName = 'CompanyIcon';