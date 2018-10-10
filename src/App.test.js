import React from 'react';
import { mount } from 'enzyme';
import App from './App';

jest.mock('./services/blogs');


describe('<App />', () => {
  let app;

  describe('when user is not logged', () => {
    beforeEach(() => {
      app = mount(<App />);
    });

    it('blogs are not rendered', () => {
      app.update();
      const blogListComponent = app.find('BlogList');
      expect(blogListComponent.length).toEqual(0);
    });
  });

  describe('when user is logged', () => {
    beforeEach(() => {
      const user = {
        username: 'tester',
        token: '1231231214',
        name: 'Teuvo Testaaja',
      };

      window.localStorage.clear();
      window.localStorage.setItem('authenticatedUser', user);
    });

    it('blogs are rendered', () => {
      app.update();
      const blogListComponent = app.find('BlogList');
      expect(blogListComponent.length).toEqual(1);
    });
  });
});
