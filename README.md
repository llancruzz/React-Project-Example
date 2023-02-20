# React Project Example

<h1> How React Works</h1>

<p>I’ve created a template with a  
React project already created and ready to  go which you can find linked on this page.  
You can copy and use this if you’d like to take notes on the various files. To copy the  repo, click the button to use the template,  
name and create your own repo, and then click  the green Gitpod button in your own repo.
As with all projects you’ve seen in Gitpod so far,  this React project has a file tree on the left,  
our code editing window in the middle, and once  the app is running, a preview of it on the right.  
You won’t see this at first, but it will show  up in a moment. The entire project is contained  
within this “react-example” folder. I’ll change  directories into that folder using the cd command,  
and run the command npm start to start the app.  This will start the app in the preview window.
I'll begin with package.json. Inside this file is  a JavaScript object with a number of properties  
defining the configuration for the  app. For example, it's got a name  
and version number for the app itself and a  list of dependencies the app needs to run.  
It’s also got some pre-made scripts that can be used to start, stop and test the app among other things.
This file is highly configurable and can be  generated automatically by some software, or you  
can create it yourself. </p>

<h2>Now let's look at index.html in the public folder.  </h2>
<p>This is the file that will be served when  someone visits your app. There's only one  
key piece of code you need to know about in this  file, and that's the div with the ID of ""root"".  
This div is where all your react components will  be rendered at runtime in order to create the user interface.
There's also a noscript tag just  above that div, which will render the message  
""You need to enable JavaScript to run this app""  if the user's browser doesn't support JavaScript.
In the source folder there are several files, but  we’re only going to focus on a few of them.
App.js is the react component that renders the  content you see in the preview window.  
In this case, App.js defines a function called  App and this is the actual React component.   
The function returns a strange looking combination of  HTML and JavaScript, and this language is called  
JSX. At the bottom, the function is exported,  
allowing it to be imported into other files in  the project, so that it can be reused as needed.
The next important file is index.js. This is the  JavaScript file that gets run when you first load  
the app. Inside it is where the magic happens.  First there are some imports including React,  
ReactDom, some CSS, and the app component  from app.js. Then, ReactDom.render is called  
in order to render the App component in that root div with the ID of “root” in index.html.
Lastly, there is an App.css and  an index.css file in this folder  
which are used to provide some simple styling for the app.  
Index.css contains the css for the index.html  page, and app.css is for the app.js component.  
It would technically be fine to put all this CSS  in one file, but generally React developers like  
to separate out their component CSS so that if they reuse the component, the CSS comes with it.</p>

<h2>let's talk about the flow of the application.  </h2>
<p>When someone navigates to your page,  the empty index.html page is rendered  
containing the shell of the application - the  basic HTML structure and the empty root div. Then,  
index.js is run, which imports React and React  Dom as well as the App component, and renders  
the app component into the root div. The app  component itself is where the actual HTML you  
see in the preview window is defined, and it can  be modified or reused as required. Most React apps  
have lots of small components like App.js, and each component renders a specific part of the UI.
Together, they make up the entire user interface and can provide all sorts of interactivity.
So, to review, Index.html contains basic page  structure and an empty root div, the root div  
ends up with the App component rendered into it, and that is done when index.js is run.  
This is the basic flow of any React application.  
The configuration for all these files and how they work together is managed with package.json.  
Everything else you see here is secondary to understanding how a React application works.
JSX is the syntax being used in both index.js  
and App.js.</p>
