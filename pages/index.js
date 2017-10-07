import React from 'react';
import NextLink from 'next/link';
import 'isomorphic-fetch';
import { Link } from '../routes';
import Result from '../components/Result';
import { getIMDbData } from '../lib/getIMDbData';

export default class MyPage extends React.Component {
  static async getInitialProps() {
    return {};
  }
  state = {
    key: '',
    result: null
  }

  handleKeyUpSearchInput = (e) => {
    const val = e.currentTarget.value;

    this.setState({
      key: val
    });
  }
  handlerSearchSubmit = async(e) => {
    e.preventDefault();
    const IMDbData = await getIMDbData(this.state.key, true);

    this.setState({
      result: IMDbData
    });
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
        <form method="GET">
          <input type="text" placeholder="search" onKeyUp={this.handleKeyUpSearchInput} defaultValue="" />
          <button type="submit" onClick={this.handlerSearchSubmit}>search</button>
        </form>
        <Result result={this.state.result} />
      </div>
    );
  }
}
