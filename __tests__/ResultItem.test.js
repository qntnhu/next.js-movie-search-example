/* eslint-env jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ResultItem from '../components/ResultItem';

configure({ adapter: new Adapter() });

describe('Test ResultItem component', () => {
  const detailObj = { l: 'One title', s: 'One description' };
  const resultItem = shallow(<ResultItem ind={12} itemProp={detailObj} />);

  it('should render three divs', () => {
    // expect(resultItem.find('div')).to.have.length(4);
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
