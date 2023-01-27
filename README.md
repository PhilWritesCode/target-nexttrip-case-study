

## Running the NextTrip app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Assumptions

I assumed the provided APIs will be up and working 100% of the time.  If there are network errors, the error will be logged to the console, but there are no user-facing messages.
I also assumed that the values received from the route and direction APIs would be valid inputs for the direction and stops APIs

### Why did you choose this framework?

I chose to use React because it's a popular framework for creating front-end applications.

### How did your solution for this problem evolve over time?

My first goal was to have a functionally working application.  Once that was complete, I looked for reusability (as in my Selector component) and efficiency.  Finally, I tried prettifying
the app a bit: cleaned up the layout, hid the lower components while the higher components were still being interacted with.

### Completeness: Were problems addressed, did the code run? Is it production ready (if not, explain why)

This is NOT production ready.  I'd call this a Proof of Concept to demonstrate that react can be used to fetch data from Metro Transit and display it to customers.

If we were to send this to production:
1. We'd want designers to mock up a prettier UI
2. I'd want more tests (details in the test files)
3. I'd want better error handling (if the APIs are down, we should fail gracefully and display some friendly message to the user)

### Testing—how did you test?

Tested using Jest.  I quickly realized that testing Hooks would require me switching to the React Testing Library, as Enzyme is dead.  I'm not currently familiar with the React Testing Library,
so I obted to submit my code as-is, but I defined the tests I would add if I were more familiar w/ RTL inside my .test files.  I'd also create mocks for the API calls so that our tests don't
put actual traffic over the wire.

I'd also want to add tests around invalid input parameters:  asking for directions for a route that doesn't exist should fail gracefully (a helpful message being displayed to the user, perhaps).  Likewise 
for asking for stops for a route/direction combo that doesn't exist.