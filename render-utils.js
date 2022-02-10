export function renderFriendSticker(friend) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('friend-sticker');

// right above we created a render sticker function that will create these elements on our outerHTML. Then we are saying that we will add the list above to teh dive we created that is called friends-sticker.
    p.textContent = friend.name;
    img.src = `./assets/${friend.age}.jpeg`;
    a.href = `/detail/?id=${friend.id}`; // link to the friends detail page
    div.append(p, img);

    a.append(div);

    return a;
// line 13 we are adding the p and image elements to the 'friends-sticker' div tag
    // then we are adding the detail link we created to the 'friends-sticker ' div.
}
