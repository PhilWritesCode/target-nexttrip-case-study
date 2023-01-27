import { render, screen } from '@testing-library/react';
import Selector from './Selector';

test('empty selector still displays Select option', () => {
  render(<Selector options={[]}/>);
  const selectOption = screen.getByDisplayValue('Select');
  expect(selectOption).toBeInTheDocument();
});

/*
test('A Selector populated with options will display those options in addition to 'Select'', () => {
  render(<Selector options={[ -- some array of valid options -- ]}/>);
  -- ensure those items are available in the selector
  -- size of the list of options should be the size of the input array +1 (for the 'Select' option)
});

test('Updating a selection triggers the onSelection function', () => {
  -- render a Selector with options
  -- update the selected option
  -- ensure the onSelection function is triggered with the selected value as a parameter
});
*/