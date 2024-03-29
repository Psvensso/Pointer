## React demo app

## Notes
Please note that im aware that this is a heavily over-engineered application for the simple use-case. This could have easily been built without Redux but it's set up to be an example of how to use Redux. The State could have easily lived in the index.tsx (in a parent App layout component) and passing down "Create new game" handler and the selected items as props. 

### Styling
The app uses [Emotion js](https://github.com/emotion-js/emotion) for styling.

However the usage of styling (Emotion) in this application is not concise, sometimes it's inline <div css="" /> and sometimes it's declared at the top of the component in an object (see scorePanel.tsx) or by using 'styled' components, i could not decide what worked best so i left it as-is to take it up in discussion. The use of Emotion in this simple example is probably over-engineering as well, a simple css would have worked just fine but again it's an example for how to use Emotion. In a bigger application one would probably consider Emotion Themes and other more "re-usable" Emotion features so it scales better. 

### Component granularity and component structure
Component granularity is a never ending React discussion topic. In this application im trying to show multiple strategies. First there is the "global" folder where all small "pure" components live. Then there is the "layout" folder where the main layout components live, they often don't hold any state but are connected to the Redux store. If they have children that are not meant to be re-used, they are added to the subComponents folder, this created better cohesion. This codebase have to examples, one with a more broken down structure (scorePanel) and one left as a bigger component (collectorPanel). 

### Domain
Everything Redux in this application lives inside the domain folder. By using the 'domain' concept and trying to follow some lightweight DDD principles the structure of reducers, selectors and actions can be improved in larger application. 
Since this is a super simple application there is not much to see here other than the plumbing. But there is one "settings" aggregate with the game rules in it, this reducer is for now static, but here we can easily load it via ajax. The other aggregate is "game", since we only have one main purpose of this application it all goes under "game" in this case. The action and the reducer are not 1-to-1 (as they shouldn't be but i often see), any action can be handled by any reducer. This is where the aggregates/domain roots come in, a reducer can only handle global actions or an action from the same aggregate, this is not enforced by code but in principle and decides how the structure looks here (this is a great discussion point for larger applications).

## Up and running
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
