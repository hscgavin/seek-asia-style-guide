import svgMarkup from './PortalIcon.svg';

import React from 'react';
import Icon from '../private/Icon/Icon';

export default function PortalIcon(props) {
  return <Icon svgClassName={props.svgClassName} markup={svgMarkup} {...props} />;
}

PortalIcon.displayName = 'PortalIcon';