This is a Podcaster project created with React js/Typescript.

## Available Scripts

### `npm run start`
It will run the app in the development mode.\
Open [http://localhost:3000] to view it in the browser.

### `npm run build:prod`
Compiles the build with the webpack for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run test`
It will execute all existed integration tests.

## App description and functionality

As per requirements the Homepage reproduces 100 podcasts recieved from the api.

While the api call is still fetching the page will show a loader: user friendly blue circle in the right upper corner.

Once the list of podcasts is served from the external service it will be cached in the Local storage of the user for the next 24 hours (no more api calls will be executed during this period).

The user can filter podcasts by title o author. The search is not case sensitive, it will match values regardless of their lower or upper case letters.

## Styling

The app styles are implemented with the Styled-components library that allows to write CSS code in Javascript and re-use variables.






