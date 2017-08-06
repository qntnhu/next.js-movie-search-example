import React from 'react';
import NextLink from 'next/link';
import 'isomorphic-fetch';
import { Link } from '../routes';

export default class MyPage extends React.Component {
  static async getInitialProps() {
    return {};
  }

  handleKeyUpSearchInput = (e) => {
    const val = e.currentTarget.value;

    console.log(val);
  }
  handlerSearchSubmit = (e) => {
    console.log('test1');

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <NextLink href={{ pathname: '/api/search', query: { key: 'hello' } }}>
              <a>next/link api</a>
            </NextLink>
          </li>
          <li>
            <Link route="api" params={{ key: 'hello' }}>
              <a>api</a>
            </Link>
          </li>
          <li>
            <Link route="search" params={{ key: 'hello' }}>
              <a>IMDb serach &quot;hello&quot;</a>
            </Link>
          </li>
        </ul>
        <form method="POST">
          <input type="text" placeholder="search" onKeyUp={this.handleKeyUpSearchInput} />
          <button type="submit" onClick={this.handlerSearchSubmit}>search</button>
        </form>
      </div>
    );
  }
}
