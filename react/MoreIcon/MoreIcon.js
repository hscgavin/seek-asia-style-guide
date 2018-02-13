import svgMarkup from './MoreIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function MoreIcon(props) {
  return <Icon svgClassName={props.svgClassName} markup={svgMarkup} {...props} />;
}

MoreIcon.displayName = 'MoreIcon';