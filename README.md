## React demo app

## Notes
Please note that im aware that this is a heavily over-engineered application. This could have easily been built without Redux but it's set up to be an example of how to use Redux. The State could have easily lived in the index.tsx (in a parent App layout component) and passed down Create new game prop and the selected items. 

The usage of styling (Emotion) in this application is not concise, sometimes it's inline <div css="" /> and sometimes it's declared at the top of the component in an object (see scorePanel.tsx) or by using 'styled' components, could not decide what worked best to left it as-is to take up in discussion. The use of Emotion in this simple example is probably over-engineering as well, a simple css would have worked just fine but again it's an example for how to use Emotion. In a bigger application one would probably consider Emotion Themes and other more "re-usable" Emotion features so it scales better. 

### Styling
The app uses [Emotion js](https://github.com/emotion-js/emotion) for styling.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
