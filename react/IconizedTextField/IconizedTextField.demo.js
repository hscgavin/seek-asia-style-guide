import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconizedTextField from './IconizedTextField';
import styles from './IconizedTextField.less';
import classnames from 'classnames';
import fieldMessageOptions from '../private/FieldMessage/FieldMessage.demo';
import fieldLabelOptions from '../private/FieldLabel/FieldLabel.demo';

class IconizedTextFieldContainer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    componentProps: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleClear = () => {
    this.setState({
      inputValue: ''
    });
  };

  render() {
    const { component: DemoComponent, componentProps } = this.props;
    const { inputValue } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <DemoComponent
          {...componentProps}
          inputProps={{
            onChange: this.handleChange,
            value: inputValue
          }}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}

export default {
  route: '/iconizedtextfield',
  title: 'Iconized Text Field',
  component: IconizedTextField,
  container: IconizedTextFieldContainer,
  initialProps: {
    id: 'firstName',
    label: 'First Name',
    message: 'e.g. Olivia',
    // Documentation only:
    inputProps: {
      onChange: () => {},
      value: '...'
    },
    onClear: () => {}
  },
  options: [
    {
      label: 'States',
      type: 'checklist',
      states: [
        {
          label: 'Focus',
          transformProps: ({ className, ...props }) => ({
            ...props,
            className: classnames(className, styles.rootFocus)
          })
        }
      ]
    },
    ...fieldMessageOptions,
    ...fieldLabelOptions
  ]
};
