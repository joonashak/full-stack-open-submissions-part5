import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import blogList from './components/BlogList';
jest.mock('./services/blogs');
import blogService from './services/blogs';


describe('<App />', () => {
  let app;

  beforeAll(() => {
    app = mount(<App />);
  });

  it('does not render blogs if user is not logged in', () => {
    app.update();
    const blogListComponent = app.find('BlogList');
    expect(blogListComponent.length).toEqual(0);
  });
});
