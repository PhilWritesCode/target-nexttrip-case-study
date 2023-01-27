import { render, screen } from '@testing-library/react';
import App from './App';


test('displays route-selection on initial render', () => {
  render(<App />);
  const routeSelector = screen.getByText(/Select Route/i);
  expect(routeSelector).toBeInTheDocument();
});

test('does not display direction-selection on initial render', () => {
  render(<App />);
  const routeSelector = screen.queryByText(/Select Direction/i);
  expect(routeSelector).toBeNull();
});

test('does not display stops on initial render', () => {
  render(<App />);
  const stopDisplay = screen.queryByText(/Available Stops/i);
  expect(stopDisplay).toBeNull();
});

/* Tests I'd write prior to productionalizing this code:

test('routes are fetched on initial load', () => {
  - load the app
  - ensure a call to fetch routes is made -- this should be a mocked call, and no real traffic should go over the wire
});

test('directions are fetched when a route is selected', () => {
 - load the app
 - update the 'chosenRoute' 
 - ensure a mocked call to fetch directions, with chosenRoute as a parameter, is made.
});

test('direction selector is displayed after a route is selected', () => {
 - load the app
 - update the 'chosenRoute' 
 - ensure that the "Select Directions" Selector is displayed to the user
});

test('stops are fetched when a direction is selected', () => {
 - load the app
 - update the 'chosenRoute' 
 - update the 'chosenDirection'
 ensure a mocked call to fetch directions, with chosenRoute and chosenDirection as a parameters, is made.
});

test('list of stops is displayed after a direction is selected', () => {
 - load the app
 - update the 'chosenRoute' 
 - update the 'chosenDirection'
 - ensure that the "Available Stops" section is displayed to the user
});

test('when the route is changed after a direction is selected, the stops are hidden', () => {
 - load the app
 - update the 'chosenRoute' 
 - update the 'chosenDirection'
 - ensure that the "Available Stops" section is displayed to the user
 - update the 'chosenRoute' again
 - ensure that the "Available Stops" section is no longer displayed
});

test('when the route is set back to 'Select', the direction selector and stops are hidden', () => {
 - load the app
 - update the 'chosenRoute' 
 - update the 'chosenDirection'
 - ensure that the "Available Stops" section is displayed to the user
 - update the 'chosenRoute' to 'Select'
 - ensure that the "Available Stops" section is no longer displayed
 - ensure that the "Select Directions" selector is no longer displayed
});

test('when the route is changed after a direction is selected, the direction selector is reset', () => {
 - load the app
 - update the 'chosenRoute' 
 - update the 'chosenDirection'
 - ensure that the "Available Stops" section is displayed to the user
 - update the 'chosenRoute' again
 - ensure that the "Select Directions" selector's value is reset to "Select"
});

test('when the direction is set back to 'Select', the stops are hidden', () => {
 - load the app
 - update the 'chosenRoute' 
 - update the 'chosenDirection'
 - ensure that the "Available Stops" section is displayed to the user
 - update the 'chosenDirection' to 'Select'
 - ensure that the "Available Stops" section is no longer displayed
});

test('updating a chosenRoute to null or 'Select' makes no call', () => {
 - load the app
 - update the 'chosenRoute' to null
 - ensure a mocked call to fetch directions is NOT made.
 - update the 'chosenRoute' to 'Select'
 - ensure a mocked call to fetch directions is NOT made.
});

test('updating a chosenDirection to null or 'Select' makes no call', () => {
 - load the app
 - update the 'chosenRoute' to a valid route
 - update the 'chosenDirection' to null
 - ensure a mocked call to fetch stops is NOT made.
 - update the 'chosenDirection' to 'Select'
 - ensure a mocked call to fetch stops is NOT made.
});
*/
