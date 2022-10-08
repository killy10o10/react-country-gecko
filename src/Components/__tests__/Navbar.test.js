import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

it('Test Navbar renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
