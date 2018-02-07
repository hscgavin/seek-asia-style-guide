import svgMarkup from './BookmarkIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';
import styles from './BookmarkIcon.less';

export default function BookmarkIcon(props) {
  return <Icon svgClassName={styles.svg} markup={svgMarkup} {...props} />;
}

BookmarkIcon.displayName = 'BookmarkIcon';