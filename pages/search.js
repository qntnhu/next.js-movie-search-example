import React, { Component } from 'react';
import getIMDbData from '../lib/getIMDbData';

export default class Search extends Component {
  static async getInitialProps({ req, res, query }) {
    // server-side
    if (req) {
      const { key } = query;

      if (!key && res) {
        res.statusCode = 404;
      }

      const IMDbData = await getIMDbData(key);

      return {
        IMDbData
      };
    }

    // client-side only code
    return {
      // empty
    };
  }

  render() {
    const { IMDbData } = this.props;

    if (IMDbData) {
      return (
        <div>{IMDbData}</div>
      );
    } else {
      return (
        <h1>client-side</h1>
      );
    }
  }
}
