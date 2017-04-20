import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as htabsitesActions from '../../actions/htabsitesActions';

class HTabPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedIndex: 0
    };
    this.siteRowHeader = this.siteRowHeader.bind(this);
    this.siteRowContent = this.siteRowContent.bind(this);
  }

  siteRowHeader(site, index) {
    let selectedClass = "htab-left-panel-li";
    if (index === this.state.selectedIndex) {
      selectedClass += " selected";
    }
    // TODO: move bind to constructor
    return (
      <div key={index} className={selectedClass} onClick={this.onSelectTab.bind(this, index)}>
        <div className="site-content">{site.name}
        </div>
        {site.errorDevices !== 0 &&
          <div className="warning-container">
            {site.errorDevices}
          </div>}
        <span className="clearfix"></span>
      </div>
    );
  }

  onSelectTab(index) {
    // this.state.selectedIndex = index; // !!!! not working without calling this.forceUpdate(); should call setState()
    this.setState({selectedIndex: index});
  }

  siteRowContent(site, index) {
    if (index == this.state.selectedIndex) {
      return (
        <div key="{index}" className="htab-right-panel">
          <h1>{site.name}</h1>
          <div>{site.description}</div>
        </div>
      );
    }
  }

  render() {
    const {sites} = this.props;
    const {selectedIndex} = this.state;

    return (
      <div className="page page-htab">
        <div className="htab-left-panel-ul">
          <div className="site-creation">
            <div className="site-creation-icon-container">
              <i className="smarticon icon-add"></i>
            </div>
            <div className="site-creation-content">Add site</div>
            <span className="clearfix"></span>
          </div>
          {sites.map(this.siteRowHeader)}
        </div>
        {sites.map(this.siteRowContent)}
      </div>
    );
  }
}

HTabPage.propTypes = {
  sites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    sites: state.sites // !!!! this sites name match reducer's name in reducers/index.js
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(htabsitesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HTabPage);
