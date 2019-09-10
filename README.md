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
9. Type cd mathificent followed by npm start. A web browser window will open and you'll see the default create-react-app starter project.
<img src="default-create-react-app-project.png">
10. Open your mathificent directory in your code editor.
11. Open src/App.js for editing.
12. Take a look at the structure of this file. It imports the React library, and then contains a function with a return statement. This function creates a component. The job of a component is to output a piece of the user interface.
13. Next we'll make the footer component. Start by making a new file named Footer.js in the src directory.
14. Import React, define a function named Footer, and export the function just as you did with the Header component.
15. In the return statement of Footer, enter the following:
<pre><footer className="navbar fixed-bottom bg-dark">
        <a href="https://www.webucator.com">Copyright &copy; Webucator</a>
    </footer></pre>
16. Import the Footer component into App.js and put the new custom Footer component at the end of the return statement, before the </div> tag. Your return statement in App.js should now look like this:
<pre>
    <div className="App">
      <Header />
      <h1>Mathificent</h1>
      <Footer />
</div></pre>
17. If you app isn't already running, cd to your mathificent directory and type npm run start and then open your browser to http://localhost:3000 (if it doesn't automatically open). You should now have a header, main content of the page with the h1 element, and a footer.
18. Take a look at the finished Mathificent program and think about how you might split up the main content of the app into components.
19. Here's one way that the homepage could be split into components. (insert image). The first step in the React development process is to create static (meaning without any functionality) version of the app. Create a new functional component for each of the unique components in the following outline.
<pre>
App
  Header
  Main
    SelectInput
    ScoreOutputBox
    PlayButton
  Footer
</pre>
20. In the return statement for each component, put a placeholder element containing the name of the component for now. For example, here's what the SelectInput component should look like:
<pre>import React from 'react';
function SelectInput(){
    return(
        <div>SelectInput Component</div>
    )
}
export default SelectInput;</pre>
21. Now that you have all the components, it's time to put them together in the right order. Think about the heirarchy of components in your app. The App component contains Header, Main, and Footer. Main contains 2 instances of SelectInput, 1 ScoreOutputBox, and PlayButton.
22. Import the correct components into App.js and Main.js and then modify the return statements of these two components to include the correct sub-components (also known as "child" components). When you're done, it should look like the following in your browser:
22. Make the PlayButton component contain a button using this code:
<pre>
<button class="btn btn-success">Play!</button>
</pre>
23. Code a static version of the score, like this:
<pre>
<div>
<ul>
    <li>The record for multiplacation with a high number of 10 is 42.</li>
    <li>Your personal record is 38.</li>
</ul>
<p><b>Can you do better?</b></p>
</div>
24. Code the select dropdowns using static options and labels for now. We'll make them dynamic shortly.
<pre>
<div><label>Select Label
<input type="select">
    <option name="sample value">Sample Value</option>
</input>
</label>
</div></pre>


