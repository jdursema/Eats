import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { FavoritesContainer } from './FavoritesContainer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Favorites', () => {
  it('should match the snapshot', ()=> {

    const renderedFavoritesContainer = shallow(<FavoritesContainer />);

    expect(renderedFavoritesContainer).toMatchSnapshot();
  });
});