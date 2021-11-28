// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'

import { render } from '@testing-library/svelte'

import Comp from './About.svelte';

test('Renders stuff', () => {
  const {getByText} = render(Comp);

  expect(getByText('About')).toBeInTheDocument()
})
