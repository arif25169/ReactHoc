import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
           Downloader
          </HeaderLink>
          <HeaderLink to="/image">
            Images
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
