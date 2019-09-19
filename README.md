# react-math-game
game for react class

## Steps

1. Create a new empty directory named react-math-game
1. Open a terminal emulator and make react-math-game the working directory
1. type node -v to test whether you already have node installed.
1. If you do have it installed correctly, you'll get a version number back that will be in the format #.#.#. The first digit of this version number should be 10 or higher. If it is, skip to step 6. If it isn't you'll need to upgrade node. To upgrade node, go to https://nodejs.org and click the link to download the current LTS version. Double click the downloaded file and follow the instructions to install it.
1. If you had to upgrade or install Node, close and restart your terminal application and type node -v to confirm that the version is now higher than 10.
1. In your terminal, type npm -v. If the number you get back is higher than 5.2, skip to step 8.
1. If your npm version number is lower than 5.2, type npm install npm -g in your terminal.
1. Type npx create-react-app mathificent to create a starter project named "mathificent". The depedencies will be downloaded and after a while you'll have a new React project.
1. Type cd mathificent followed by npm start. A web browser window will open and you'll see the default create-react-app starter project. insert default-create-react-app-project.png
1. Open your mathificent directory in your code editor.
1. Open src/App.js for editing.
1. Take a look at the structure of this file. It imports the React library, and then contains a function with a return statement. This function creates a component. The job of a component is to output a piece of the user interface.
1. Find the ```<header>``` and ```</header>``` tags and delete everything between them except fror the img tag. Your App.js file should now like this:

    ```
    import React from 'react';
    import logo from './logo.svg';
    import './App.css';

    function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

        </header>
        </div>
    );
    }

    export default App;
    ```
1. Insert an ```<h1>``` element below the image, containing the title of our app, "Mathificent."
    ```
        <h1>Mathificent</h1>
    ```
1. Return to your web browser where the app is open and running. If you did everything correctly, you'll see the following. ```<img src="first-text-changes.png">```. If you see an error message, return to your App.js file and make sure that it matches the solution exactly.
If all React did was to use JavaScript to output HTML, it wouldn't be very useful. What makes React useful is that allows you to break your user interface into components which can be reused. So, let's make some components!
1. Create a new file in the src directory named Header.js. Note that the name of this file starts with a capital H. In React, the names of custom components always start with a capital letter.
1. Inside this new file, import React and then define a function named Header.

    ```
    import React from 'react';

    function Header() {
        return (

        )
    }
    ```
1. After the function definition, export this function so that it becomes a JavaScript module that can be imported into other JavaScript files.

    ```
    export default Header;
    ```
1. Inside the return statement of the function, type or copy and paste the code for the header navigation for our app.

    ```
    <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Mathificent</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="leader-boards">Leader Boards</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>

    ```
1. Save Header.js and return to your browser. Notice that nothing has changed. Right now, Header.js isn't imported into the Rest of your React app, so it's not doing anything. Let's fix that.
1. Open App.js in your code editor.
1. Near the beginning of the document, underneath the 3 other import statements, add another one to import Header.js.
    ```
        import Header from './Header';
    ```
    Notice that when we import the Header custom component, we need to use './' before the file name and we don't need to type the '.js' at the end of the file name.
1. Inside the return statement, replace the existing ```<header>``` element with your new custom component, ```<Header>```. To do this, just delete everything from the opening ```<header>``` tag to the closing ```</header>``` tag and type in a single self-closing ```<Header />``` tag.
    ```
        <div className="App">
            <Header />
        </div>
    ```
1. Because the app no longer uses the React logo, delete the import of the logo from App.js.
1. Below the ```<Header />``` tag, re-type the ```<h1>``` element containing the title of the app.
    ```
        <h1>Mathificent</h1>
    ```
1. Return to your web browser to view your app so far. It should look something like this: insert first-component.png
1. To add style to the app, we'll need to install the Bootstrap library. Open the index.html in the Public directory, and put the following link tag between the ```<head>``` tag and the ```</head>``` tag:
    ```
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    ```
1. Return to your web browser. You should now see a responsive navigation bar, like the following: bootstrap-added.png
1. Next we'll make the footer component. Start by making a new file named Footer.js in the src directory.
1. Import React, define a function named Footer, and export the function just as you did with the Header component.
1. In the return statement of Footer, enter the following:
    ```
        <footer className="navbar fixed-bottom bg-dark">
            <a href="https://www.webucator.com">Copyright &amp;copy; Webucator</a>
        </footer>
    ```
1. Import the Footer component into App.js and put the new custom Footer component at the end of the return statement, before the ```</div>``` tag. Your return statement in App.js should now look like this:
    ```
        <div className="App">
            <Header />
            <h1>Mathificent</h1>
            <Footer />
        </div>
    ```
1. If you app isn't already running, cd to your mathificent directory and type npm run start and then open your browser to http://localhost:3000 (if it doesn't automatically open). You should now have a header, main content of the page with the h1 element, and a footer.
1. Take a look at the finished Mathificent program and think about how you might split up the main content of the app into components.
1. Here's one way that the homepage could be split into components. (insert image). The first step in the React development process is to create static (meaning without any functionality) version of the app. Create a new functional component for each of the unique components in the following outline.

    ```
        App
        Header
        Main
            SelectInput
            ScoreOutputBox
            PlayButton
        Footer
    ```
1. In the return statement for each component, put a placeholder element containing the name of the component for now. For example, here's what the SelectInput component should look like:
    ```
        import React from 'react';
        function SelectInput(){
            return(
                <div>SelectInput Component</div>
            )
        }
        export default SelectInput;
    ```
1. Now that you have all the components, it's time to put them together in the right order. Think about the heirarchy of components in your app. The App component contains Header, Main, and Footer. Main contains 2 instances of SelectInput, 1 ScoreOutputBox, and PlayButton.
1. Import the correct components into App.js and Main.js and then modify the return statements of these two components to include the correct sub-components (also known as "child" components). When you're done, it should look like the following in your browser:
1. Make the PlayButton component contain a button using this code:
    ```
        <button class="btn btn-success">Play!</button>
    ```
1. Code a static version of the ScoreOutputBox component, like this:
    ```
        <div className="w-25" style={{margin:"0 auto"}}>
            <ul>
                <li>The record for multiplacation with a high number of 10 is 42.</li>
                <li>Your personal record is 38.</li>
            </ul>
            <p><b>Can you do better?</b></p>
        </div>
    ```
1. Code the select dropdowns using static options and labels for now. We'll make them dynamic shortly.
    ```
        <div><label>Select Label
        <input type="select">
            <option name="sample value">Sample Value</option>
        </input>
        </label>
        </div>
    ```
1. Next, we'll pass props between components. Open Main.js in your code editor.
1. Inside the function, but before the return statement, create an array to hold the possible operations.
    ```
        const operations = ["Addition",
                            "Multiplication",
                            "Division",
                            "Subtraction"];
    ```
1. Pass this array to the first SelectInput component using an attribute. Remember that since operations is a variable, you need to surround it with curly braces.
    ```
        <SelectInput label = "Operation" values = {operations} />
    ```
1. Create an empty array inside the SelectInput component (also outside of the return statement) that will hold the list of numbers that we'll use to populate the maximum number dropdown.
    ```
        let numbers = [];
    ```
1. Use a for loop to create an array of the numbers from 0 to 100.
    ```
        for (let number = 0;number<=100;number++){
            numbers.push(number);
        }
    ```
1. Modify your two SelectInput elements to pass the select dropdown values as well as labels to them.
    ```
        <SelectInput label = "Operation" values = {operations} />
        <SelectInput label = "Maximum Number" values = {numbers} />
    ```
1. Open SelectInput.js in your code editor.
1. Pass props into SelectInput as a parameter.
    ```
        function SelectInput(props){
            ...
        }
    ```
1. Outside of the return statement in SelectInput, use the Array.map method to generate a list of option elements. This same statement will be used by both of our dropdown boxes, as well as any future ones that we might add.
    ```
        const values = props.values;
        const selectOptions = values.map((value)=>
            <option value={value} key={value.toString()}>{value}</option>
        );
    ```
1. Replace the hard-coded form field label with the value of the label attribute.
    ```
            <div><label>{props.label}
    ```
1. Replace the hard-coded option element with the array of option elements that you created in step 32.
    ```
            <div><label>{props.label}
                <select id="operation" className="form-control">
                    {selectOptions}
                </select>
                </label>
            </div>
    ```
As your app starts to get more complex, it can be helpful to start organizing it into subdirectories, rather than having everything in the same location as we have now.
1. Create a new directory inside src and name it <code>components</code>.
1. In your code editor, drag the following files into the new <code>components</code> directory.
    Footer.js
    Header.js
    Main.js
    PlayButton.js
    ScoreOutputBox.js
    SelectInput.js
1. Create another directory inside src and name it <code>containers</code>. Containers are components whose purpose to hold other components, manage state, and pass data to presentational components.
1. In your code editor, drag App.js, App.css, and App.test.js into the containers directory.
1. Open App.js in your code editor and update the import statements to correctly import the subcomponents, like this:
    ```
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import Main from '../components/Main';
    ```
1. Open index.js in your code editor and update the path to App.js in the import.
    ```
    import App from './containers/App';
    ```
1. If it's not already running, start up your development server by entering <code>npm start</code> in your terminal. Your application should open in a web browser without displaying errors.
    Next, we'll add state to the application. State is data in your application that changes over time. In Mathificent, the initial screen with the operation and maximum number dropdowns has two pieces of state that need to be tracked and that can change over time. These are the currently selected operation and the currently selected maximum number. We'll use a technique called React Hooks to create two state variables and the functions for updating them.
1. Inside App.js, modify the first import statement (the one that imports React) to also import a function called <code>useState</code>. When you import a single function from a file containing multiple functions, you can use curly braces around the name of the function. Here's what your new React import should look like:
    ```
    import React,{useState} from 'react';
    ```
1. Inside the function definition for the App component, create a new state variable called operation and a function for modifying that variable. Pass a 0 into the useState function to set the initial value of the operation variable to "addition".
    ```
    const [operation, setOperation] = useState('addition');
    ```
1. The useState function returns two values when it's called: a state variable, and the function for modifying that variable. Because we know this, we can use Next, use the same technique to create a state variable named maxNumber and a function called setMaxNumber. Set the default value to 0.
    ```
    const [maxNumber, setMaxNumber] = useState(0);
    ```
1. Inside App.js, pass all of the state variables and functions to the Main component:
    ```
    <Main operation = {operation}
          setOperation = {setOperation}
          maxNumber = {maxNumber}
          setMaxNumber = {setMaxNumber} />
    ```
1. Update the Main function component to receive props as a parameter.
    ```
        function Main(props){
    ```
1. Pass the correct props variables and functions to the SelectInput components.
function Main(props){
    ```
    <SelectInput currentValue = {props.operation} 
                 setValue = {props.setOperation}
                 label = "Operation" 
                 values = {operations} />

    <SelectInput currentValue = {props.maxNumber}
                 setValue = {props.setMaxNumber}
                 label = "Maximum Number" 
                 values = {numbers} />
    ```
1. Inside the SelectInput component, set the default value of the select input and use an onChange handler to update the state when a the user selects a different dropdown item.
    ```
    <select defaultValue = {props.currentValue} 
        onChange = {(e)=>props.setCurrentValue(e.target.value)}
        id="operation" 
        className="form-control">
    ```
1. In App.js, output the the value of both the currently selected operation and the maximum number, so that we can test whether the state is being updated correctly.

Next, we'll add routing to the app. Routing refers to the ability to change what displays in the browser based on the current value of the browser location property.

The location property of the browser is how the browser tracks the current web page being viewed. However, with JavaScript "single page" applications, the actual URL of the web page is always the same (index.html in our case), so we can use the location property to determine which components are mounted at any one time, without needing to download another html file from the server.

1. Install React Router with the following command:
    ```
    npm install react-router-dom --save
    ```
1. Use the following import statement to import the necessary components into App.js
    ```
    import {Route} from 'react-router-dom';
    ```
1. Open index.js and import BrowserRouter into it.
    ```
    import { BrowserRouter } from 'react-router-dom';
    ```
1. Inside the ReactDOM.render method, wrap the App component with BrowserRouter.
    ```
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
    ```
1. In App.js, replace the ```<Main />``` component with two Routes.
    ```
    <Route exact path="/" component={Main} />
    <Route path="/play" component={Game} />
    ```
1. Create a new component (in the components directory) named Game. For now, just make it render some placeholder text.
    ```
    import React from 'react';

    function Game(){
        return (
        <div>Game here</div>
        )
    }

    export default Game;
    ```
1. Import the Game component into App.
    ```
    import Game from '../components/Game';
    ```
1. Start up your development server if it's not running already. You should see the same view as before, with the Mathificent header and the two dropdowns.
1. Manually change the URL in the browser address bar to http://localhost:3000/play. The new game component will render where the Main component was, as shown in the following figure:
1. Use your browser's "Back" button to return to the homepage route.
1. Try to change the selected option in one of the dropdown menus. You'll  get a screen full of errors, as shows here: <img src="missing-props-errors.jpg"> 
1. The reason for this error is that we're no longer passing the state data into the Main component. Let's fix that.
1. Replace the ```component``` attribute in the Main Route with a render attribute that defines a function and passes the state variables into it.
    ```<Route path="/play"
              component={()=>
              <Main operation = {operation}
                    setOperation = {setOperation}
                    maxNumber = {maxNumber}
                    setMaxNumber = {setMaxNumber} />}>} />
    ```
1. Return to your browser and you should be able to change the currently selected option and see the changes working correctly.
The next thing we need to do is to make the button change the route to the game and pass in the current operation and maxNumber values.
1. Open the Main component and pass maxNumber and operation to the PlayButton component as props.
    ```<PlayButton
            operation={props.operation}
            maxNumber={props.maxNumber} />
    ```
1. Open PlayButton.js and import Link from react-router-dom.
    ```import {Link} from 'react-router-dom';```
1. Change the ```<Button>``` element to a ```<Link>``` element and add a ```to``` attribute. The ```to``` attribute indicates what the location property should be set to when the ```<Link>``` element is clicked. So, set the value of the ```to``` attribute to ```/play```.
1. In your browser, try clicking on the button, and the currently-displayed component should change from ```<Main>``` to ```<Game>```.
1. Update the Route for ```<Game>``` in the App component so that it passes operation and maxNumber as props.
    ```      
    <Route path="/play"
        render={()=>{
          return(<Game  operation = {operation}
                        maxNumber = {maxNumber}
                  />);}
                } />
    ```
1. Import ```<Link>``` into the Game component, then add a button for changing back to ```<Main>```.
    ```
    <Link className="btn btn-success" to="/">
    Change Game
    </Link>
    ```
Congratulations! You now have routing set up, and we're ready to implement the actual logic of the game.

Here's what the game will look like when it's complete:

Can you identify from looking at this screenshot which individual components we'll need to build? We'll need the number buttons, the clear button (which might eventually be the same component that we use for the number buttons), the score output, and the timer.
1. Create a NumberButton component, a ClearButton component, a Score component, and a Timer component and just put placeholder text into each for now.
1. Include each of these new components into Game.
1. In the return statement of Game, place a Timer, Score, 10 NumberButtons, and a Clear button. Use <br /> elements to create line breaks in the correct places.
    ```
    <div>
        <Score />
        <Timer /><br />
        <NumberButton />
        <NumberButton />
        <NumberButton /><br/>
        <NumberButton />
        <NumberButton />
        <NumberButton /><br />
        <NumberButton />
        <NumberButton />
        <NumberButton /><br />
        <NumberButton />
        <NumberButton />
        <ClearButton />

        <Link className="btn btn-success" to="/">Change Game</Link>
    </div>
    ```
Your app should now look something like the following:
<img src="start-of-game.png">
1. Make the NumberButton component render a button and accept a prop named value:
    ```
    <button className="btn btn-success">
            {props.value}
    </button>
    ```
1. Make the ClearButton component output a button:
    ```
    <button className="btn btn-success">
            Clear
    </button>
    ```

Next Steps

- Add the routes
- Make the game screen
- Make the game work
- 



