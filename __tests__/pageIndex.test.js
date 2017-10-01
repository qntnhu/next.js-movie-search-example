/* eslint-env jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Index from '../pages/index';
import Result from '../components/Result';

configure({ adapter: new Adapter() });

describe('Test index', () => {
  const index = shallow(<Index />);

  it('should render a <Result />', () => {
    expect(index.find(Result).length).toBe(1);
  });

  // it('test input keyup event', () => {
  //   expect(index.find('form > input').get(0).value).toEqual(undefined);
  //   // index.find('form > input').simulate('keyUp', {
  //   //   target: { value: 'hello' }
  //   // });
  //   index.find('form > input').instance().placeholder = 'hello';
  //   expect(index.find('form > input').get(0).value).toEqual('hello');
  // });
});
