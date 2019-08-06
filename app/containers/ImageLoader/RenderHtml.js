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
  constructor(props) {
    super(props);
    this.state = {
      articleHTML: null,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:${this.props.name}/`, {
      method: 'GET',
      headers: {
        'Accept': 'text/html',
        'Content-Type': 'text/html',
      },
    })
      .then(res => res.text())
      .then((result) => {
        console.log(result)
        this.setState({
          articleHTML: result,
        });
      })
      .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });

  }
  render() {
    console.log("hello")
    console.log(this.props.name)
      return (
        <div>
         {this.state.articleHTML === null ? undefined : renderHTML(this.state.articleHTML)}
      </div>
      );
  }
}


export default RenderHtml;
