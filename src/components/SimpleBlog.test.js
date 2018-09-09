import React from 'react';
import { shallow } from 'enzyme';
import SimpleBlog from './SimpleBlog';


describe('<SimpleBlog />', () => {
  let component;

  beforeEach(() => {
    const blog = {
      title: 'otsikko',
      author: 'meitsi',
      likes: 3,
    };

    const onClick = jest.fn();

    component = shallow(<SimpleBlog blog={blog} onClick={onClick} />);
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
});
