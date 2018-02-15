import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'seek-asia-style-guide/react';
import { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } from './Header';
import { jobsDBProps, jobStreetProps } from './Header.demo.props';

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
    ...jobsDBProps,
    loginAvailable: true,
    country: 'hk',
    language: 'en'
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
      label: 'tenant',
      type: 'radio',
      states: [
        {
          label: 'JobsDB',
          transformProps: props => ({
            ...props,
            ...jobsDBProps
          })
        },
        {
          label: 'JobStreet',
          transformProps: props => ({
            ...props,
            ...jobStreetProps
          })
        }
      ]
    },
    {
      label: 'Active Tab',
      type: 'radio',
      states: [
        {
          label: 'None',
          transformProps: props => ({
            ...props,
            activeTab: null
          })
        },
        {
          label: 'Home',
          transformProps: props => ({
            ...props,
            activeTab: ACTIVE_TAB_HOME
          })
        },
        {
          label: 'Search',
          transformProps: props => ({
            ...props,
            activeTab: ACTIVE_TAB_SEARCH
          })
        },
        {
          label: 'Saved Jobs',
          transformProps: props => ({
            ...props,
            activeTab: ACTIVE_TAB_SAVED_JOBS
          })
        }
      ]
    }
  ]
};
