/* eslint-env jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Result from '../components/Result';
import ResultItem from '../components/ResultItem';

configure({ adapter: new Adapter() });

// search "hello" */
/* eslint-disable quotes,key-spacing,object-curly-spacing,comma-spacing */
const searchResult = `{"v":1,"q":"hello","d":[{"l":"Hello, My Name Is Doris","id":"tt3766394","s":"Sally Field, Max Greenfield","y":2015,"q":"feature","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_.jpg",486,720]},{"l":"Hello, Dolly!","id":"tt0064418","s":"Barbra Streisand, Walter Matthau","y":1969,"q":"feature","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BODJmZmFiNzQtMDJiYS00ZTgzLTljZGMtNjEzNzM4NmEyYjNiXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg",497,755]},{"l":"Hello Again","id":"tt3710966","s":"Sam Underwood, Nolan Gerard Funk","y":2017,"q":"feature","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BZmFkY2UzZGItNGQ3Yy00NmRjLWIyYjEtN2ZhZDZkOThkNjNmXkEyXkFqcGdeQXVyMjcxODE1Mzk@._V1_.jpg",790,1024]},{"l":"Hello Ladies","id":"tt2378794","s":"Stephen Merchant, Christine Woods","y":2013,"q":"TV series","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_.jpg",1423,2048]},{"l":"Hello, It's Me","id":"tt5063384","s":"Kellie Martin, Kavan Smith","y":2015,"q":"TV movie","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BYjNlYjlmYzUtZWIzMC00NjI5LWJlNjAtODQyZTc1YmQwMzc2XkEyXkFqcGdeQXVyNTE0NTM0Ng@@._V1_.jpg",449,674]},{"l":"Oh, Hello on Broadway","id":"tt6987652","s":"Nick Kroll, John Mulaney","y":2017,"q":"TV movie","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BZmQ3YmM0NGMtYmRmNi00ZWY4LTk5MGYtYzUyODA4ODBlODE3XkEyXkFqcGdeQXVyMjQzNzk2ODk@._V1_.jpg",336,540]},{"l":"Prom Night II","id":"tt0093176","s":"Lisa Schrage, Michael Ironside","y":1987,"q":"feature","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BZGFmZjQ0ZTYtNjNkOC00OTAxLTlmMWMtNThmMWRkMTcyODY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",400,602]},{"l":"Hello Destroyer","id":"tt2489736","s":"Sara Canning, Ian Tracey","y":2016,"q":"feature","i":["https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MTA0NzMwN15BMl5BanBnXkFtZTgwOTg4NzgwMDI@._V1_.jpg",990,1500]}]}`;
/* eslint-enable */

describe('Test Result component', () => {
  const result = shallow(<Result result={searchResult} />);
  const resultWithNull = shallow(<Result result={null} />);
  const resultEmptyItems = shallow(<Result result={'{ }'} />);

  it('should render eight <ResultItem />', () => {
    expect(result.find(ResultItem).length).toBe(8);
  });

  it('should render null', () => {
    expect(resultWithNull.type()).toEqual(null);
  });

  it('should render `No result`', () => {
    expect(resultEmptyItems.text()).toEqual('No result');
  });
});

