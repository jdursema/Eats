import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Recommendations } from './Recomendations.js';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Recommendations', () => {
  it('should match the snapshot', ()=> {
    const mockFunc = jest.fn();

    const renderedRecommendations = shallow(<Recommendations handleRecommendations= {mockFunc}/>);

    expect(renderedRecommendations).toMatchSnapshot();
  });

  it('should call handleRecommendations when the component mounts', () => {
    const mockFunc = jest.fn();

    shallow(<Recommendations handleRecommendations= {mockFunc}/>);

    expect(mockFunc.mock.calls.length).toEqual(1);
  });
});