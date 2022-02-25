const SUPABASE_URL = 'https://swgiucfleoaonawjlvme.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2l1Y2ZsZW9hb25hd2psdm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTIxNjEsImV4cCI6MTk2MDAyODE2MX0.KwPiwmAFu_q_7yxOSUYv4k6Ejgu8uDsvfsGLixOpD9o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}
export async function getFriends() {
    const resp = await client.from('friends').select('*');
    // console.log(friends);
    return checkError(resp);    
}
export async function getFriend(id) {
    const resp = await client.from('friends').select('*').eq('id', id).single();
    return checkError(resp);
}



// we are getting all of the friends names from the table on supaB

// we are fetching the id of our friends list by the Id given in the table and the id? -- not sure ask TA lol

// the last functions tells us to display an error message if data isn't entered correctly? not sure -- look up then ask TA 