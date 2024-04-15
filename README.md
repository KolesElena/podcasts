This is a Podcaster project created with React js.

## Available Scripts

To start the project directory you should run:

### `npm start:dev`

It will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build:prod`

Compiles the build with the webpack for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The Homepage is showing 100 podcasts recieved from the api. 

Once the list of podcasts is served from the external service it will be cached in the Local storage of the user for the next 24 hours (no more api calls will be executed during this period).

The user can filter podcasts by title o author.





