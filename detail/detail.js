import { renderDetail } from '../render-utils.js';
import { getFriend } from '../fetch-utils.js';

const friendDetail = document.getElementById('details');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));
    const friend = await getFriend(params.get('id'));

    const div = renderDetail(friend);
    friendDetail.append(div);
});