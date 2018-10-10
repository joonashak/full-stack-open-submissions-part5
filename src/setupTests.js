import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Local Storage mock

let savedItems = {}

const localStorageMock = {
  setItem: (key, item) => {
    savedItems[key] = item;
  },
  getItem: key => savedItems[key],
  clear: savedItems = {},
};

window.localStorage = localStorageMock;
