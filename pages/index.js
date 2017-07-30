import React from 'react';
// import Link from 'next/link'
import 'isomorphic-fetch';
import { Link, Router } from '../routes'

export default class MyPage extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json();

    // return { stars: json.stargazers_count }
    return {};
  }

  render() {
    return (
      <ul>
        <li>
          <Link route='blog' params={{ slug: 'hello-world' }}>
            <a>Blog: Hello world</a>
          </Link>
        </li>
        <li>
          <Link route='blog' params={{ slug: 'another-blog-post' }}>
            <a>Blog: Another blog post</a>
          </Link>
        </li>
        <li>
          <Link route='blog' params={{ slug: 'non-existant' }}>
            <a>Blog: Not found</a>
          </Link>
        </li>
        <li>
          <button onClick={() => Router.pushRoute('about', { foo: 'bar' })}>About foo bar</button>
        </li>
        <li>
          <button onClick={() => Router.pushRoute('about', { foo: 'baz' })}>About foo baz</button>
        </li>
      </ul>
    );

    // return (
    //   <div>
    //     <p>Next.js has {this.props.stars} ⭐️</p>
    //     <Link prefetch href='/preact'><a>How about preact?</a></Link>
    //   </div>
    // )
  }
}
