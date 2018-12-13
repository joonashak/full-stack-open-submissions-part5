import React from 'react';
import { shallow } from 'enzyme';
import SimpleBlog from './SimpleBlog';


describe('<SimpleBlog />', () => {
  let component;
  let handler;

  beforeEach(() => {
    const blog = {
      title: 'otsikko',
      author: 'meitsi',
      likes: 3,
    };

    handler = jest.fn();

    component = shallow(<SimpleBlog blog={blog} onClick={handler} />);
  });

  it('Renders title', () => {
    const target = component.find('.title');
    expect(target.text()).toContain('otsikko');
  });

  it('Renders author', () => {
    const target = component.find('.title');
    expect(target.text()).toContain('meitsi');
  });

  it('Renders likes', () => {
    const target = component.find('.likes');
    expect(target.text()).toContain('3 likes');
  });

  it('Button calls correctly multiple times', () => {
    const target = component.find('button');
    target.simulate('click');
    target.simulate('click');
    expect(handler.mock.calls.length).toBe(2);
  });
});
