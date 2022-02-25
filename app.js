// import functions and grab DOM elements
import { getFriends } from './fetch-utils.js';
import { renderFriendSticker } from './render-utils.js';
// let state
const friendListContainer = document.getElementById('friend-list-container');

// we are

window.addEventListener('load', async() => {
    const friends = await getFriends();

    for (let friend of friends) {
        const li = renderFriendSticker(friend);
        friendListContainer.append(li);
    }
// here we are saying when the window loads we want to fetch or display our list of friends.
});



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
