/**
 *
 * DownLoader
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
import makeSelectDownLoader from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from "axios";

/* eslint-disable react/prefer-stateless-function */
export class DownLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      urlLink: 'arif25169.github.io',
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.downloadTxtFile = this.downloadTxtFile.bind(this);
  }

  // componentDidMount() {
  //   this.getDataFromApi();
  // }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      this.getDataFromApi();
    }
    target.preventDefault();
  }

  getDataFromApi =async () => {
    let requestedObject = {
      "url": "http://www.setubondhon.com/music/?p=kobita/Shimul%20Mustapha/Banglar%20Mukh",
      "lastext": ".mp3",
      "extension": ".mp3",
      "htmltag": "a",
      "htmlattrib": "href"
  }
  const rawResponse = await fetch('https://rifapi.herokuapp.com/url', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestedObject)
  });
  const content = await rawResponse.json();
  this.setState({ links: content });
  console.log(content);
  };
  // downloadTxtFile = () => {
  //   let links;
  //   if (this.state.downloadValue) {
  //     links = this.state.downloadValue.map(item => item.link);
  //   }
  //   console.log(links.slice(','));
  //   var data = new Blob([links.splice(',')], { type: 'text/csv' });
  //   var csvURL = window.URL.createObjectURL(data);
  //   var tempLink = document.createElement('a');
  //   tempLink.href = csvURL;
  //   tempLink.setAttribute('download', 'download.txt');
  //   tempLink.click();
  // };
  render() {
    var header = (
      <div style={{ textAlign: 'left' }}>
        <i className="pi pi-search" style={{ margin: '4px 4px 0 0' }} />
        <InputText
          type="search"
          onInput={e => this.setState({ globalFilter: e.target.value })}
          placeholder="Global Search"
          size="50"
        />
      </div>
    );
    return (
      <div>
        <Helmet>
          <title>DownLoader</title>
          <meta name="description" content="Description of DownLoader" />
        </Helmet>

        <div className="p-fluid ">
          <Panel>
            <div className="p-grid">
              <div className="p-col-12 p-lg-12 p-xl-12">
                <div className=" p-grid p-col-12 p-md-12">
                  <div className="p-col-4 p-md-4 p-md-offset-2">
                    <div className="p-inputgroup padding-top">
                      <InputText
                        value={this.state.regNo}
                        onChange={e =>
                          this.setState({ urlLink: e.target.value })
                        }
                        onKeyPress={this.handleKeyPress}
                        placeholder="Enter Url"
                        style={{ width: '100%' }}
                        type="text"
                        name="url"
                      />
                    </div>
                  </div>

                  <div
                    className="p-col-3 p-md-2 p-xl-2"
                    style={{ marginTop: '23px' }}
                  >
                    <Button
                      className="p-button p-component p-button-success p-button-text-only"
                      label="Search"
                      onClick={this.getDataFromApi}
                    />
                  </div>
                </div>
              </div>

              {this.state.links ? (
                <DataTable
                  header={header}
                  selection={this.state.downloadValue}
                  onSelectionChange={e =>
                    this.setState({ downloadValue: e.value })
                  }
                  value={this.state.links}
                  responsive={true}
                  paginator={true}
                  rows={10}
                  rowsPerPageOptions={[10, 20, 50]}
                  globalFilter={this.state.globalFilter}
                  emptyMessage="No records found"
                >
                  <Column selectionMode="multiple" style={{ width: '2em' }} />
                  <Column field="link" header="Links" sortable={true} />
                  <Column field="desc" header="Description" sortable={true} />
                </DataTable>
              ) : (
                ''
              )}

              <div className="p-col-12 p-lg-3 p-xl-3" />
              <div
                className="p-col-5 p-md-5 p-xl-5"
                style={{ marginTop: '23px' }}
              >
                <Button
                  className="p-button p-component p-button-success p-button-text-only"
                  label="Download"
                  onClick={this.downloadTxtFile}
                />
              </div>
            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

DownLoader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  downLoader: makeSelectDownLoader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'downLoader', reducer });
const withSaga = injectSaga({ key: 'downLoader', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DownLoader);
