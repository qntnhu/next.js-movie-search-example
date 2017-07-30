import React from 'react';

export default (props) => {
  return (
    <h1>About foo {props.url.query.foo}</h1>
  );
};
