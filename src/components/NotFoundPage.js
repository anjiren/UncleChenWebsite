/* eslint react/forbid-prop-types: "off" */

import React from 'react';
import { Link } from 'react-router-dom';

export class NotFoundPage extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.is404 = true;
    }
  }

  render() {
    return (
      <div className="uc-title-wrapper">
        <h2 className="uc-title">Page not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
