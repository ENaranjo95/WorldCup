# World Cup

The object of this project was to get users to vote which country the believe will win the 2018 FIFA World Cup Tournament. Users can leave their name, message, which team they believe will win and leave thumbs up or down if they agree.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node-JS, MongoDB, Express

 Using a global var at the top to find all thumbs down icon on the DOM and adding an event listener for when the thumbs down icon is clicked. When the the thumbs down icon is clicked, we set 3 const variables, name, msg and the the icon being clicked so that we can pass the JSON object to our server.js and find in our collections that name and msg corresponding to the same thumbs down being clicked and updating the database to add a +1 count to it and then rendering it back to the DOM to display the update.

## Lessons Learned:

I learn to build my first index.ejs to display messages and favorite team to win.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:3000`
