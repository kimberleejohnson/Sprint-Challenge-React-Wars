# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a UI component library built by Facebook engineers. Facebook had to build it because they were dealing with a whole bunch of data that changed based on user interactions, and no existing tools dealt with complex state like that in a way that met their needs. For example, a user’s newsfeed updates constantly whenever they like or comment on an image, and that’s just two kinds of interactions; many more exists. React makes it a lot easier to handle a lot of changing data at once through components. 

2.  What does it mean to _think_ in react?

Thinking in React means to begin to visualize components, or, all the different pieces that make up an App and interact with each other. It also means beginning to think about how state passes from the top of a Parent component down to its children via props. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

In react, a Class component extends from a Parent class, and, the highest level Class extends from the React.Component Class. This gives a lot of extra functionality, especially allowing us to add and change state. Functional components do not allow us to do that.  

4.  Describe state.

State is like the heart of our React App: it’s where a component can hold data that it can pass to other components via props. 

5.  Describe props.

If state is the heart of an App, then props are like the blood that pumps through the system, what we pass state around as.  