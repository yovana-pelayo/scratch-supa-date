// // IMPORT MODULES under test here:
import { renderFriendSticker } from '../render-utils.js';

const test = QUnit.test;

test('renderFriend sticker will return a div with an image name and age', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="/detail/?id=Samwise"><div class="friend-sticker"><p>Samwise Hobbies: </p><img src="./assets/undefined"></div></a>`;
    
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
