import React from 'react';
import Enzyme from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { fetchCuisineIds } from '../cuisineHelper';
import { apiKey } from '../.apikey.js';


Enzyme.configure({ adapter: new Adapter() });

describe('fetch cuisine', () => {
  beforeEach(() => {
    window.fetch =
    jest.fn().mockImplementation(()=> 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(
          {cuisines:[
            {cuisine: {
              cuisine_id: 6,
              cuisine_name: "Afghani"
            }},
            {cuisine: {
              cuisine_id: 1,
              cuisine_name: "American"
            }},
            {cuisine: {
              cuisine_id: 25,
              cuisine_name: "Chinese"
            }}
          ]
        }
        )
      }));
  });

  it('should return the fetch cuisine ids', async () => {

    const fetch = await fetchCuisineIds(70, 130);
    const mockCuisineArray = [
      {cuisine: {
        cuisine_id: 6,
        cuisine_name: "Afghani"
      }},
      {cuisine: {
        cuisine_id: 1,
        cuisine_name: "American"
      }},
      {cuisine: {
        cuisine_id: 25,
        cuisine_name: "Chinese"
      }}
    ];


    expect(fetch).toEqual(mockCuisineArray);
  });
});