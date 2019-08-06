/**
*
* RenderHtml
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';

import renderHTML from 'react-render-html';

class RenderHtml extends React.Component { 
  state = {
    template: ''
  };
  componentDidMount = () => {
    axios
      .get('http://localhost:3005')
      .then(response => {
        // const value = response.data.replace(/id/gm, 'ref');
        this.setState({ template: response.data });
      })
      .catch(_ => this.setState({ template: '' }));
  };
  render() {
      return (
        <div>
        {renderHTML(this.state.template)}
      </div>
      );
  }
}


export default RenderHtml;
