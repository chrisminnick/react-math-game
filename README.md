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
1. Find the &lt;header&gt; and &lt;/header&gt; tags and delete everything between them except fror the img tag. Your App.js file should now like this:

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
1. Insert an &lt;h1&gt; element below the image, containing the title of our app, "Mathificent."
```
    &lt;h1&gt;Mathificent&lt;/h1&gt;
```
1. Return to your web browser where the app is open and running. If you did everything correctly, you'll see the following. &lt;img src="first-text-changes.png"&gt;. If you see an error message, return to your App.js file and make sure that it matches the solution exactly.
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
&lt;header&gt;
        &lt;nav className=&quot;navbar navbar-expand-lg navbar-dark bg-dark&quot;&gt;
            &lt;a className=&quot;navbar-brand&quot; href=&quot;/&quot;&gt;Mathificent&lt;/a&gt;
            &lt;button className=&quot;navbar-toggler&quot; type=&quot;button&quot; data-toggle=&quot;collapse&quot; data-target=&quot;#navbarText&quot;&gt;
            &lt;span className=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt;
            &lt;/button&gt;
            &lt;div className=&quot;collapse navbar-collapse&quot; id=&quot;navbarText&quot;&gt;
            &lt;ul className=&quot;navbar-nav mr-auto&quot;&gt;
                &lt;li className=&quot;nav-item active&quot;&gt;
                &lt;a className=&quot;nav-link&quot; href=&quot;/&quot;&gt;Home&lt;/a&gt;
                &lt;/li&gt;
                &lt;li className=&quot;nav-item&quot;&gt;
                &lt;a className=&quot;nav-link&quot; href=&quot;leader-boards&quot;&gt;Leader Boards&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

```
1. Save Header.js and return to your browser. Notice that nothing has changed. Right now, Header.js isn't imported into the Rest of your React app, so it's not doing anything. Let's fix that.
1. Open App.js in your code editor.
1. Near the beginning of the document, underneath the 3 other import statements, add another one to import Header.js.
```
    import Header from './Header';
```
Notice that when we import the Header custom component, we need to use './' before the file name and we don't need to type the '.js' at the end of the file name.
1. Inside the return statement, replace the existing &lt;header&gt; element with your new custom component, &lt;Header&gt;. To do this, just delete everything from the opening &lt;header&gt; tag to the closing &lt;/header&gt; tag and type in a single self-closing &lt;Header /&gt; tag.
```
    &lt;div className=&quot;App&quot;&gt;
        &lt;Header /&gt;
    &lt;/div&gt;
```
1. Because the app no longer uses the React logo, delete the import of the logo from App.js.
1. Below the &lt;Header /&gt; tag, re-type the &lt;h1&gt; element containing the title of the app.
```
    &lt;h1&gt;Mathificent&lt;/h1&gt;
```
1. Return to your web browser to view your app so far. It should look something like this: insert first-component.png
1. To add style to the app, we'll need to install the Bootstrap library. Open the index.html in the Public directory, and put the following link tag between the &lt;head&gt; tag and the &lt;/head&gt; tag:
```
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css&quot; integrity=&quot;sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T&quot; crossorigin=&quot;anonymous&quot;&gt;
```
1. Return to your web browser. You should now see a responsive navigation bar, like the following: bootstrap-added.png
1. Next we'll make the footer component. Start by making a new file named Footer.js in the src directory.
1. Import React, define a function named Footer, and export the function just as you did with the Header component.
1. In the return statement of Footer, enter the following:
```
    &lt;footer className=&quot;navbar fixed-bottom bg-dark&quot;&gt;
        &lt;a href=&quot;https://www.webucator.com&quot;&gt;Copyright &amp;copy; Webucator&lt;/a&gt;
    &lt;/footer&gt;
```
1. Import the Footer component into App.js and put the new custom Footer component at the end of the return statement, before the &lt;/div&gt; tag. Your return statement in App.js should now look like this:
```
    &lt;div className=&quot;App&quot;&gt;
        &lt;Header /&gt;
        &lt;h1&gt;Mathificent&lt;/h1&gt;
        &lt;Footer /&gt;
    &lt;/div&gt;
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
    &lt;button class=&quot;btn btn-success&quot;&gt;Play!&lt;/button&gt;
```
1. Code a static version of the ScoreOutputBox component, like this:
```
    &lt;div className=&quot;w-25&quot; style={{margin:&quot;0 auto&quot;}}&gt;
        &lt;ul&gt;
            &lt;li&gt;The record for multiplacation with a high number of 10 is 42.&lt;/li&gt;
            &lt;li&gt;Your personal record is 38.&lt;/li&gt;
        &lt;/ul&gt;
        &lt;p&gt;&lt;b&gt;Can you do better?&lt;/b&gt;&lt;/p&gt;
    &lt;/div&gt;
```
1. Code the select dropdowns using static options and labels for now. We'll make them dynamic shortly.
```
    &lt;div&gt;&lt;label&gt;Select Label
    &lt;input type=&quot;select&quot;&gt;
        &lt;option name=&quot;sample value&quot;&gt;Sample Value&lt;/option&gt;
    &lt;/input&gt;
    &lt;/label&gt;
    &lt;/div&gt;
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
    &lt;SelectInput label = &quot;Operation&quot; values = {operations} /&gt;
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
    &lt;SelectInput label = &quot;Operation&quot; values = {operations} /&gt;
    &lt;SelectInput label = &quot;Maximum Number&quot; values = {numbers} /&gt;
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
        &lt;option value={value} key={value.toString()}&gt;{value}&lt;/option&gt;
    );
```
1. Replace the hard-coded form field label with the value of the label attribute.
```
        &lt;div&gt;&lt;label&gt;{props.label}
```
1. Replace the hard-coded option element with the array of option elements that you created in step 32.
```
        &lt;div&gt;&lt;label&gt;{props.label}
            &lt;select id=&quot;operation&quot; className=&quot;form-control&quot;&gt;
                {selectOptions}
            &lt;/select&gt;
            &lt;/label&gt;
        &lt;/div&gt;
```

Next Steps
- Organize the app into folders
- Add state
- Update the state with hooks?
- Add the routes
- Make the game screen
- Make the game work
- 



