# Project 1: Retro Board

**Due March 23, 2020 End of Day**

For your first project, you will be creating a retrospective board. A retrospective board is used within the Scrum workflow. Scrum is the most popular Agile style of software project management used to guide the software development life cycle. Scrum style management is based on four basic ceremonies for each sprint or software release: the 1.) Sprint Planning meeting, 2.) Daily Stand-up, 3.) Sprint Review, and 4.) Sprint Retrospective. As a part of the Sprint Retrospective, team members will use a retrospective board to reflect on what went well and what they need to improve on for next time.

This project is inspired by _FunRetro_. If you are not familiar with a retrospective board, please [visit the FunRetro website](https://funretro.io/) and create a new board.

![Retro board example](retro-board-example.png)

## Project Goals

- To put together and make practical use of what was taught in class.
- To learn about developer practices, like setting up an application, maintaining your own git repository and writing a _README.md_.
- To build a portfolio piece to show off to potential employers.

## Project Requirements

Your retrospective board must meet all the following application setup, UI and coding requirements.

### Application Setup Requirements

1. You must create a git repository for the application and it must be hosted publicly on Github.
1. Your application should be easy to install and start. **IF WE CANNOT INSTALL OR START YOUR APPLICATION, IT IS AN AUTOMATIC FAILURE.**
1. You should include a _README.md_ file within the root of the git repository. The _README.md_ should have clear instructions on how to install or start the project.

Note that we will go over setting up the project in class.

### UI Requirements

![Retro board diagram of terms](retro-board-diagram.png)

1. The Retro Board should have three categories: 1.) "Went Well" 2.) "To Improve" and 3.) "Action Items". The categories must be displayed in this order. They must be arranged in such a way that the user can easily tell what UI elements on the page belong to what category.

2. Each category should contain an add button or another type of UI element. When clicked or activated, the application will add a new retrospective item to the given category.

3. The user should be able to type text inside of each retrospective item. This text will be stored in state. The only time the text can change is when the user is typing inside the retrospective item.

4. The user should be able to delete each retrospective item. When deleted, the retrospective item should be removed from state and the application.

5. The user should be able to move the retrospective item into a different category by clicking on a left or right arrow. If there is not a category to the left, then clicking the arrow should move the retrospective item to the rightmost category. The same applies to if there is no category to the right but in reverse. When the item moves from one category to the next, the retrospective item’s user input, visual structure, and appearance (with the exception of color) should stay the same.

6. For the final UI requirement, you must pick one of the following:
   - Add a “thumbs up” and “thumbs down” button (or other clickable UI elements) to your retrospective items. Clicking on one of these buttons should increase the number of “thumbs up” or “thumbs down” votes. Display the number of “thumbs up” and “thumbs down” votes in each retrospective item.
   - Validate user input. Make text within the retrospective item required. When the retrospective item loses focus or is submitted (the type of event will depend on how you design the functionality of your application), the text should be validated in some way. Suggestions are to remove the retrospective item from the board or display an error message.
   - Add functionality to change the layout of the retrospective board. Include some type “layout switcher” UI element(s). When clicked or activated, the layout of the categories will change between a horizontal and vertical layout. For an example, please [visit the FunRetro website](https://funretro.io/) and create a new board.  
     ![Layout switch example](layout-switcher-example.png)  
     _An example of a “layout switcher” from FunRetro._

### Coding Requirements

1. This application should contain at least two React components.
2. One component should pass `props` into another component.
3. One (or more) of your React components should handle state. Apply `useState()` hooks and update state correctly with functions returned from `useState()`.
4. The application should handle events correctly within React components.
5. Styling must be included, but you will not be graded on how visually appealing your application is or how well your CSS is written.

An example HTML and CSS file can be found inside of _projects/1-retro-board/examples_. In my example, I used icons images from [Font Awesome](https://fontawesome.com/start). You can use some or all of the example code. You will need to refactor the HTML into JSX.

## Tips

**It is highly recommended that you lift state up.** See [the Intro to React slides starting on number 68](https://slides.com/accjavascript/intro-to-react-044411#/68).

Work on these two things first before diving in:

1. Rendering static, nonfunctional JSX with dummy data
2. Designing your data model (what your state will look like and how you will modify state). You may find it helpful to design your state in isolation first.

If you find using more than one component challenging, begin with a single component. Then break your component down into separate components later.

With your event handlers and callbacks, log values and any arguments first before modifying state e.g. `console.log(e.target.value)`. This way, you know whether or not your code is working.

When looping through an array, you may find it helpful to use placeholder data first before using real data.

If you need to loop through an object inside JSX, convert it into an array with `Object.values()`, `Object.keys()` or `Object.entries()`.

Flexbox, float grids, and other types of CSS layouts often require that you maintain parent-child relationships in order to work. If you find that your layout is breaking, it could be because your are rendering an extra set of `<div>` tags between what is expected to be the parent and what is expected to be the child. This gotcha typically happens when one React component includes another or when you loop through an array. When this happens, try replacing unnecessary `<div> ... </div>` tags with React fragments (`<> ... </>`).

Consider using `<textarea>` for user input instead of `<input type="text">`.

### Code Quality

While your grade is not determined on whether or not you follow these code quality tips, we encourage you to code to a professional standard. One of the goals of this project is to help you build a portfolio. Just like an interviewer will judge you on your attire, employers will judge you on the neatness of your code.

- Your _README.md_ should be written in Markdown. In addition to how to install and start the application, it should also describe what a retrospective board is, explain the purpose of the project and credit yourself as the author. Here are some resources on creating _README.md_ files:
  - [_README.md_ template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
  - [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Choose descriptive and specific names for React components, constants, functions and anything else that is named.
- You must not leave any debugging statements in your code. Remove any `console.log()` statements from your code before committing.
- Add comments to the parts of your code that is difficult to understand. (You will make a good impression if you use JSDoc. See [Code documentation for JavaScript with JSDoc: an introduction](https://www.valentinog.com/blog/jsdoc/), [Jsdoc cheatsheet](https://devhints.io/jsdoc) and [JSDoc Manual](https://jsdoc.app/)).
- Do not commit anything that is commented out for debugging purposes.
  Before submitting, make sure you only have actual comments within comment tags.
- Remove any components or code that is not being used. (This affects application load time as well as code quality.)
- Use proper indentation. (Prettier can take care of this.)
- Add anything that should not be committed to your _.gitigore_ file.

## Project Submission

You must create a new git repository for your first project. Within your project, you will need to include a _package.json_ and _README.md_ file in the project root directory. All files must be included to install, build, and run your application. You are limited to Node.js packages. Instructions on how to install or start your application must be written in the _README.md_. While not required to do so, you we suggest you write your README.md with Markdown.

Before the project is due, you must share a link to your GitHub repository to both on the instructors in Slack.

### Project Resubmission

You may resubmit this project again for a better grade. In order to resubmit, you must have made a valid attempt. (That is, you must have your project setup, your project must be hosted in Github, your application must start and your project must meet some of the requirements).

A part of this project is building a portfolio piece. Your instructors may ask you to resubmit the project if there are any major or obvious bugs. They may also suggest that you resubmit if the UI is confusing or is not delivering an adequate user experience.

You have until the last day of class to resubmit your project.

### Extensions

We know that life is unpredictable and sometimes serious, unexpected circumstances may prevent you from completing your work. We are willing to be flexible in these cases. Please contact the program director and your instructors _as soon as possible_ to get an extension.
