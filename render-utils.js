export function renderFriendSticker(friend) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    
    const p = document.createElement('p');

    div.classList.add('friend-sticker');

// right above we created a render sticker function that will create these elements on our outerHTML. Then we are saying that we will add the list above to teh dive we created that is called friends-sticker.
    p.textContent = `${friend.name} Hobbies: ${friend.hobbies}`;
    img.src = `./assets/${friend.image}`;
    a.href = `/detail/?id=${friend.id}`; // link to the friends detail page
    a.append(p, img);

    div.append(a);

    return div;
// line 13 we are adding the p and image elements to the 'friends-sticker' div tag
    // then we are adding the detail link we created to the 'friends-sticker ' div.
}
export function renderDetail(friend) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const age = document.createElement('h2');
    const p = document.createElement('p');

    div.classList.add('friend-detail');

// right above we created a render sticker function that will create these elements on our outerHTML. Then we are saying that we will add the list above to teh dive we created that is called friends-sticker.
  
    p.textContent = `${friend.name} hobbies are ${friend.hobbies}. A quote he lives by is ${friend.quote}. He was born ${friend.age} years ago.`;
    p.classList.add('info');
    img.src = `../assets/${friend.image}`;
   
    div.append(p, age, img);

    return div;
}
