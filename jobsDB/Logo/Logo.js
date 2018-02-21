import React from 'react';
import PropTypes from 'prop-types';

import markup from './JobsDBLogo.svg';

export default function Logo({ svgClassName, ...restProps }) {
  const svgWithClasses = markup
    .replace('<svg ', `<svg class="${svgClassName}" `);

  return (
    <span dangerouslySetInnerHTML={{ __html: svgWithClasses }} {...restProps} /> // eslint-disable-line react/no-danger
  );
}

Logo.propTypes = {
  svgClassName: PropTypes.string,
  className: PropTypes.string
};

Logo.defaultProps = {
  svgClassName: '',
  className: ''
};
