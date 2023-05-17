We will continue the previous exercise, and add new features to the website.

Start by editing main.js.

Add a function loadInitialData(), which checks if we have data in localStorage "todos", and if we do, render them on the screen.
If we don't have any data in localstorage, only then do we do a fetch() request to the API to get some data.

Add an event listener to every checkbox tag, so when we click on it, we also update our data.
Every time we update our data, save it to localstorage.

When we create the each list item, also add a "Delete" button. When we click it, we delete that specific item from our list, update our data array and store in localstorage.

At the start of the renderData() function, we need to use container.innerHTML = ""; to clear the container first, so that we see our updated data properly.



