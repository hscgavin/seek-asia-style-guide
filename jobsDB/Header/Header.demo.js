import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Header } from 'seek-asia-style-guide/jobsDB';

const ROUTE = '/jobsdb-header';

export default {
  route: ROUTE,
  tenantPath: 'jobsDB',
  title: 'JobsDB Header',
  component: Header,
  initialProps: {
    language: 'en',
    country: 'hk'
  },
  options: []
};
