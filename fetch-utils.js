const SUPABASE_URL = 'https://swgiucfleoaonawjlvme.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2l1Y2ZsZW9hb25hd2psdm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTIxNjEsImV4cCI6MTk2MDAyODE2MX0.KwPiwmAFu_q_7yxOSUYv4k6Ejgu8uDsvfsGLixOpD9o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY;



    export async function fetchFriends () {
     
        const friends = await client.from('friends').select('*');
       console.log(friends);
        return checkError(friends);    
    }
    export  async function fetchFriendById(id) {
        const fetchId = await client.from('friends').select('*').eq('id',id).single();
        return checkError
    }

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}