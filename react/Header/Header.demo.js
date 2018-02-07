import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'seek-asia-style-guide/react';
import JobStreetLogo from 'seek-asia-style-guide/jobStreet/Logo/Logo';
import JobsDBLogo from 'seek-asia-style-guide/jobsDB/Logo/Logo';

const HeaderContainer = ({ component: DemoComponent, componentProps }) => {
  return (
    <DemoComponent {...componentProps} />
  );
};

HeaderContainer.propTypes = {
  component: PropTypes.component,
  componentProps: PropTypes.object
};

export default {
  route: '/header',
  title: 'Header',
  component: Header,
  container: HeaderContainer,
  initialProps: {
    loginAvailable: true,
    logoComponent: JobsDBLogo,
    country: 'hk',
    language: 'en',
    tenant: 'jobsDB'
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Login not available',
          transformProps: ({ className, ...props }) => ({
            ...props,
            loginAvailable: false
          })
        }
      ]
    },
    {
      label: 'Logo',
      type: 'radio',
      states: [
        {
          label: 'JobsDB',
          transformProps: props => ({
            ...props,
            logoComponent: JobsDBLogo
          })
        },
        {
          label: 'JobStreet',
          transformProps: props => ({
            ...props,
            logoComponent: JobStreetLogo
          })
        }
      ]
    }
  ]
};
