# react-math-game
game for react class

## Steps

1. Create a new empty directory named react-math-game
2. Open a terminal emulator and make react-math-game the working directory
3. type node -v to test whether you already have node installed.
4. If you do have it installed correctly, you'll get a version number back that will be in the format #.#.#. The first digit of this version number should be 10 or higher. If it is, skip to step 6. If it isn't you'll need to upgrade node. To upgrade node, go to https://nodejs.org and click the link to download the current LTS version. Double click the downloaded file and follow the instructions to install it.
5. If you had to upgrade or install Node, close and restart your terminal application and type node -v to confirm that the version is now higher than 10.
6. In your terminal, type npm -v. If the number you get back is higher than 5.2, skip to step 8.
7. If your npm version number is lower than 5.2, type npm install npm -g in your terminal.
8. Type npx create-react-app mathificent to create a starter project named "mathificent". The depedencies will be downloaded and after a while you'll have a new React project.
9. Type cd mathificent followed by npm start. A web browser window will open and you'll see the default create-react-app starter project. <img src="default-create-react-app-project.png">
10. Open your mathificent directory in your code editor.
11. Open src/App.js for editing.
12. Take a look at the structure of this file. It imports the React library, and then contains a function with a return statement. This function creates a component. The job of a component is to output a piece of the user interface.
13. Find the <header> and </header> tags and delete everything between them except fror the img tag. Your App.js file should now like this:
<pre>import React from 'react';
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

export default App;</pre>
14. Insert an <h1> element below the image, containing the title of our app, "Mathificent."
<pre><h1>Mathificent</h1></pre>
15. Return to your web browser where the app is open and running. If you did everything correctly, you'll see the following. <img src="first-text-changes.png">. If you see an error message, return to your App.js file and make sure that it matches the solution exactly.
If all React did was to use JavaScript to output HTML, it wouldn't be very useful. What makes React useful is that allows you to break your user interface into components which can be reused. So, let's make some components!
16. Create a new file in the src directory named Header.js. Note that the name of this file starts with a capital H. In React, the names of custom components always start with a capital letter.
16. Inside this new file, import React and then define a function named Header.
<pre>import React from 'react';


function Header() {
    return (

    )
}
</pre>
17. After the function definition, export this function so that it becomes a JavaScript module that can be imported into other JavaScript files.
<pre>export default Header;</pre>
18. Inside the return statement of the function, type or copy and paste the code for the header navigation for our app.
<pre><header>
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
    </header></pre>
19. Save Header.js and return to your browser. Notice that nothing has changed. Right now, Header.js isn't imported into the Rest of your React app, so it's not doing anything. Let's fix that.
20. Open App.js in your code editor.
21. Near the beginning of the document, underneath the 3 other import statements, add another one to import Header.js.
<pre>import Header from './Header';</pre>
Notice that when we import the Header custom component, we need to use './' before the file name and we don't need to type the '.js' at the end of the file name.
22. Inside the return statement, replace the existing <header> element with your new custom component, <Header>. To do this, just delete everything from the opening <header> tag to the closing </header> tag and type in a single self-closing <Header /> tag.
<pre><div className="App">
    <Header />
</div></pre>
23. Because the app no longer uses the React logo, delete the import of the logo from App.js.
24. Below the <Header /> tag, re-type the <h1> element containing the title of the app.
<pre><h1>Mathificent</h1></pre>
24. Return to your web browser to view your app so far. It should look something like this: <img src="first-component.png">
25. To add style to the app, we'll need to install the Bootstrap library. Open the index.html in the Public directory, and put the following link tag between the <head> tag and the </head> tag:
<pre><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></pre>
26. Return to your web browser. You should now see a responsive navigation bar, like the following: <img src="bootstrap-added.png">
27.
28. Next we'll make the footer component. Start by making a new file named Footer.js in the src directory.
29. Import React, define a function named Footer, and export the function just as you did with the Header component.
30. In the return statement of Footer, enter the following:
<pre><footer className="navbar fixed-bottom bg-dark">
        <a href="https://www.webucator.com">Copyright &copy; Webucator</a>
    </footer></pre>
31. Import the Footer component into App.js and put the new custom Footer component at the end of the return statement, before the </div> tag. Your return statement in App.js should now look like this:
<pre>
    <div className="App">
      <Header />
      <h1>Mathificent</h1>
      <Footer />
</div></pre>
32. If you app isn't already running, cd to your mathificent directory and type npm run start and then open your browser to http://localhost:3000 (if it doesn't automatically open). You should now have a header, main content of the page with the h1 element, and a footer.
33. Take a look at the finished Mathificent program and think about how you might split up the main content of the app into components.
34. Here's one way that the homepage could be split into components. (insert image). The first step in the React development process is to create static (meaning without any functionality) version of the app. Create a new functional component for each of the unique components in the following outline.
<pre>
App
  Header
  Main
    SelectInput
    ScoreOutputBox
    PlayButton
  Footer
</pre>
35. In the return statement for each component, put a placeholder element containing the name of the component for now. For example, here's what the SelectInput component should look like:
<pre>import React from 'react';
function SelectInput(){
    return(
        <div>SelectInput Component</div>
    )
}
export default SelectInput;</pre>
36. Now that you have all the components, it's time to put them together in the right order. Think about the heirarchy of components in your app. The App component contains Header, Main, and Footer. Main contains 2 instances of SelectInput, 1 ScoreOutputBox, and PlayButton.
37. Import the correct components into App.js and Main.js and then modify the return statements of these two components to include the correct sub-components (also known as "child" components). When you're done, it should look like the following in your browser:
38. Make the PlayButton component contain a button using this code:
<pre>
<button class="btn btn-success">Play!</button>
</pre>
39. Code a static version of the score, like this:
<pre>
<div>
<ul>
    <li>The record for multiplacation with a high number of 10 is 42.</li>
    <li>Your personal record is 38.</li>
</ul>
<p><b>Can you do better?</b></p>
</div>
40. Code the select dropdowns using static options and labels for now. We'll make them dynamic shortly.
<pre>
<div><label>Select Label
<input type="select">
    <option name="sample value">Sample Value</option>
</input>
</label>
</div></pre>


