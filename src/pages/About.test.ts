import '@testing-library/jest-dom'

import { render } from '@testing-library/svelte'

import About from './About.svelte';

test('Renders About', () => {
  const {getByText} = render(About, { foo: 'bar'});

  expect(getByText('About: bar')).toBeInTheDocument()
})
