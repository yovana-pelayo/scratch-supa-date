// // IMPORT MODULES under test here:
import { renderFriendSticker } from '../render-utils.js';

const test = QUnit.test;

test('renderFriend sticker will return a div with an image name and age', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="friend-sticker"><a href="/detail/?id=undefined"><p>Samwise Hobbies: </p><img src="./assets/undefined"></a></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFriendSticker({ 
        name: 'Samwise',
        hobbies:[],
        img: './assets/sam.jpeg',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
