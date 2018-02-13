import svgMarkup from './BookmarkIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function BookmarkIcon(props) {
  return <Icon svgClassName={props.svgClassName} markup={svgMarkup} {...props} />;
}

BookmarkIcon.displayName = 'BookmarkIcon';