/**
 *
 * ImageLoader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectImageLoader, { makeSelectedYrID } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import RenderHtml from './RenderHtml';
import {Dialog} from 'primereact/dialog';

import {Button} from 'primereact/button';
import { selectYear } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class ImageLoader extends React.Component {
  constructor() {
    super();
    this.state = {visible: false, visible2:false};
    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onHide2 = this.onHide2.bind(this);
}
onClick() {
  this.setState({visible: true});
}
onClick2() {
  this.setState({visible2: true});
}

onHide() {
  this.setState({visible: false});
}
onHide2() {
  this.setState({visible2: false});
}



  render() {
    const footer = (
      <div>
          <Button label="Yes" icon="pi pi-check" onClick={this.onHide} />
          <Button label="No" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
      </div>
  );

    return (
      <div>
                <div className="content-section implementation">
                    <Dialog header="Godfather I" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide}  maximizable>
                    <RenderHtml name='3005'/>
                    </Dialog>
                    <Dialog header="Godfather I" visible={this.state.visible2} style={{width: '50vw'}} footer={footer} onHide={this.onHide2}  maximizable>
                    <RenderHtml name='3006'/>
                    </Dialog>

                    <Button label="Show" icon="pi pi-external-link" onClick={this.onClick} />
                    <Button label="Show2" icon="pi pi-external-link" onClick={this.onClick2} />
                </div>
      
      </div>
    );
  }
}

ImageLoader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectYearID: PropTypes.any,
  someThing: PropTypes.func,

};


const mapStateToProps = createStructuredSelector({
  imageLoader: makeSelectImageLoader(),
  selectYearID: makeSelectedYrID(),
});

function mapDispatchToProps(dispatch) {
  return {
    someThing: (evt) => { 
      console.log("3005")
      dispatch(selectYear(3005))
     },
      
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'imageLoader', reducer });
const withSaga = injectSaga({ key: 'imageLoader', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ImageLoader);
