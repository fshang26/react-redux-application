import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as htabsitesActions from '../../actions/htabsitesActions';

class HTabPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  siteRow(site, index) {
    return <li key={index}>{site.name}</li>;
  }

  render() {
    const {sites} = this.props;
    return (
      <div className="page page-htab">
        <ul className="htab-left-panel">
          {sites.map(this.siteRow)}
        </ul>
        <div className="htab-right-panel"></div>
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
