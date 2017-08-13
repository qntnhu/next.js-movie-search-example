import React, { Component } from 'react';

class Result extends Component {
  render() {
    const result = this.props.result;

    console.log('result: ', JSON.parse(result));

    return (
      <div>
        {result}
      </div>
    );
  }
}

export default Result;
