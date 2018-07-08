# World Cup

The object of this project was to get users to vote which country the believe will win the 2018 FIFA World Cup Tournament. Users can leave their name, message, which team they believe will win and leave thumbs up or down if they agree.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node-JS, MongoDB, Express

 Using a global var at the top to find all thumbs down icon on the DOM and adding an event listener for when the thumbs down icon is clicked. When the the thumbs down icon is clicked, we set 3 const variables, name, msg and the the icon being clicked so that we can pass the JSON object to our server.js and find in our collections that name and msg corresponding to the same thumbs down being clicked and updating the database to add a +1 count to it and then rendering it back to the DOM to display the update.

## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *fuck yeah I did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:3000`
