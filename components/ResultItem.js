import React, { Component } from 'react';

class ResultItem extends Component {
  render() {
    const { itemProp, ind } = this.props;

    console.log('itemP', itemProp);

    return (
      <div>
        <div>{ind}</div>
        <div>title: {itemProp.l}</div>
        <div>description: {itemProp.s}</div>
        <br />
      </div>
    );
  }
}

export default ResultItem;
