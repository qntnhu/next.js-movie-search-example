/* eslint-env jest */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Index from '../pages/index';
import Result from '../components/Result';

configure({ adapter: new Adapter() });

describe('Test index', () => {
  const index = mount(<Index />);

  it('should render a <Result />', () => {
    expect(index.find(Result).length).toBe(1);
  });

  it('test input keyup event', () => {
    expect(index.find('form > input').get(0).value).toEqual(undefined);
    expect(index.state()).toEqual({ key: '', result: null });
    index.find('form > input').instance().value = 'hello';
    index.find('form > input').simulate('keyUp');
    // index.find('form > input').simulate('keyUp', {
    // target: { value: 'hello' }
    // });
    expect(index.find('form > input').instance().value).toEqual('hello');
    expect(index.state()).toEqual({ key: 'hello', result: null });
  });
});
