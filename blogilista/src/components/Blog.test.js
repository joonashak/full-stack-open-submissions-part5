import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog';

describe('<Blog />', () => {
  let component;

  beforeEach(() => {
    const blog = {
      title: 'otsikko',
      author: 'kirjoittaja',
      _id: 'asd',
      url: 'www',
      likes: 4,
      user: {
        _id: 'qwe',
        username: 'kayttaja',
        name: 'nimi',
      },
    };

    const loggedInUser = {
      username: 'kayttaja',
    };

    component = shallow(<Blog blog={blog} loggedInUser={loggedInUser} />);
  });

  describe('When closed', () => {
    it('Renders title and author', () => {
      const target = component.find('.blog-heading');
      expect(target.text()).toContain('otsikko');
      expect(target.text()).toContain('kirjoittaja');
    });

    it('Additional info is not visible', () => {
      const target = component.find('.hidden');
      expect(target.getElement().props.style).toEqual({ display: 'none' });
    });
  });

  describe('When open', () => {
    it('Renders url', () => {
      const target = component.find('.url');
      expect(target.text()).toContain('www');
    });

    it('Renders likes', () => {
      const target = component.find('.likes');
      expect(target.text()).toContain('4 likes');
    });

    it('Renders username', () => {
      const target = component.find('.user');
      expect(target.text()).toContain('nimi');
    });

    it('Additional info is visible', () => {
      const trigger = component.find('.blog-heading');
      trigger.simulate('click');

      const target = component.find('.hidden');
      expect(target.getElement().props.style).toEqual({ display: '' });
    });
  });
});
