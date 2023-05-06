# Tic Tac Toe

Hosting URL: https://tic-tac-toe-by-chatgpt4.web.app

Firebase console: https://console.firebase.google.com/project/tic-tac-toe-by-chatgpt4/overview



## Creating using Chat GPT 4, using the following prompts

Prompts:

```
Write a complete tic-tac-toe game web application using react

rewrite content of src/App.css with the following styles:

Increase the font size of X and O. Add a Play again button

At the bottom of page, add "Created by Debprakash Patnaik" and "Copyright 2023-2024"

detect end of game and enable playAgain

Change title of page to "Tik-Tac-Toe"

Change favicon to a tic tac toe icon

Create an svg tic-tac-toe icon

Change the color of the winning row or column

commit the code to github

Deploy it to Firebase hosting

Should I add .firebase/hosting cache file to git?

Should I ignore everything under .firebase ?
```

There was a minor bug due to change in signature of calculateWinner() that had to be fixed manually.

## Deploying to Firebase

To deploy your Tic-Tac-Toe web application to Firebase Hosting, follow these steps:

1. Install the Firebase CLI: If you haven't installed the Firebase CLI already, you can do so by running the following command:
   ```
   npm install -g firebase-tools
   ```
   This installs the Firebase CLI globally on your system.

2. Sign in to your Firebase account: Sign in to your Google account associated with Firebase by running the following command:
   ```
   firebase login
   ```
   This will open a new browser window asking you to authorize the Firebase CLI with your Google account.

3. Initialize Firebase in your project: In your terminal or command prompt, navigate to your project folder and run the following command to initialize Firebase in your project:
   ```
   firebase init
   ```
   You'll be prompted to select the Firebase features you'd like to set up for your project. Select "Hosting" by using the arrow keys and pressing the spacebar, then press Enter.

4. Choose an existing Firebase project or create a new one: You'll be asked to select an existing Firebase project or create a new one. Choose the appropriate option and proceed.

5. Configure your project: After selecting a project, you'll be prompted to configure your project for Firebase Hosting:

   - For "What do you want to use as your public directory?", enter `build` (since this is where Create React App outputs the production build).
   - For "Configure as a single-page app (rewrite all URLs to /index.html)?", type `y` or `yes` to ensure that all URLs will be redirected to `index.html`.
   - For "Set up automatic builds and deploys with GitHub?", type `n` or `no` since we're not setting up automatic deployment in this example.

6. Build your project for production: Run the following command to create an optimized production build of your React application:
   ```
   npm run build
   ```

7. Deploy your application: Deploy your application to Firebase Hosting by running the following command:
   ```
   firebase deploy
   ```

8. View your deployed application: After the deployment is successful, you'll see a "Hosting URL" in the terminal output. Visit this URL in your browser to view your deployed Tic-Tac-Toe web application.

Your Tic-Tac-Toe web application is now deployed to Firebase Hosting!


---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
