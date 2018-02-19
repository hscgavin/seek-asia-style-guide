import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Header from './Header';
import { ACTIVE_TAB_HOME, ACTIVE_TAB_SEARCH, ACTIVE_TAB_SAVED_JOBS } from 'seek-asia-style-guide/react/Header/Header';

const ROUTE = '/jobstreet-header';

export default {
  route: ROUTE,
  tenantPath: 'jobStreet',
  title: 'JobStreet Header',
  component: Header,
  initialProps: {
    language: 'en',
    country: 'sg',
    loginAvailable: true,
    activeTab: ACTIVE_TAB_HOME
  },
  options: [{
    label: 'Locale',
    type: 'radio',
    states: [
      {
        label: 'Malaysia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'my'
        })
      },
      {
        label: 'Indonesia (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'id'
        })
      },
      {
        label: 'Indonesia (Bahasa)',
        transformProps: props => ({
          ...props,
          language: 'id',
          country: 'id'
        })
      },
      {
        label: 'Singapore (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'sg'
        })
      },
      {
        label: 'Philipines (English)',
        transformProps: props => ({
          ...props,
          language: 'en',
          country: 'ph'
        })
      },
      {
        label: 'Vietnam (Vietnamese)',
        transformProps: props => ({
          ...props,
          language: 'vi',
          country: 'vn'
        })
      }
    ]
  }, {
    label: 'Login Available',
    type: 'radio',
    states: [
      {
        label: 'Login available',
        transformProps: props => ({
          ...props,
          loginAvailable: true
        })
      },
      {
        label: 'Login unavailable',
        transformProps: props => ({
          ...props,
          loginAvailable: false
        })
      }
    ]
  }, {
    label: 'Active tab',
    type: 'radio',
    states: [
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
  }]
};
