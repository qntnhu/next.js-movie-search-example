/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ResultItem from '../components/ResultItem';

describe('Test ResultItem component', () => {
  const resultItem = shallow(<ResultItem ind={12} itemProp={{ l: 'One title', s: 'One description' }} />);

  it('should render three divs', () => {
    expect(resultItem.find('div').length).toBe(4);
  });

  it('should render `ind` prop', () => {
    expect(resultItem.childAt(0).text()).toEqual('12');
  });

  it('should render `itemProp` prop 1', () => {
    expect(resultItem.childAt(1).text()).toEqual('title: One title');
  });

  it('should render `itemProp` prop 2', () => {
    expect(resultItem.childAt(2).text()).toEqual('description: One description');
  });
});
