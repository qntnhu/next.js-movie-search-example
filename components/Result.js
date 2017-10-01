import React, { Component } from 'react';
import ResultItem from './ResultItem';

class Result extends Component {
  render() {
    const result = JSON.parse(this.props.result);
    if (!result) {
      return null;
    }
    const items = result.d;

    if (process.env.NODE_ENV !== 'test') {
      console.log('result: ', result);
      console.log('items: ', items);
    }

    if (typeof items === 'undefined') {
      return (
        <div>
          No result
        </div>
      );
    }

    return (
      <div>
        {items.map((item, ind) => {
          return <ResultItem ind={ind + 1} key={item.id} itemProp={item} />;
        })}
      </div>
    );
  }
}

export default Result;
