import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from './App';
import { Grommet } from 'grommet';
import { BrowserRouter } from 'react-router-dom';

describe('Smoke testing', () => {
  it('shallow renders without crashing', () => {
    shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('dependencies testing', () => {
  let app;
  beforeAll(() => {
    app = shallow(<App />);
  });
  describe('Gromet', () => {
    it('expects Grommet to be included', () => {
      expect(app).toContainMatchingElement(Grommet);
    });
    it('expects theme to be plain', () => {
      expect(app.find(Grommet)).toHaveProp('plain');
    });
  });
  describe('React Router', () => {
    it('expects BrowserRouter to be included', () => {
      expect(app).toContainMatchingElement(BrowserRouter);
    });
  });
});
