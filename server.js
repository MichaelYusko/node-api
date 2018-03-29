let express = require('express');
let app = express();


let users = [
    {
        id: 1,
        name: 'Michael'
    },

    {
        id: 2,
        name: 'Iceman'
    }
];


function makeResponse(users, headers) {
    return {
        users: users,
        headers: headers
    }
}

app.get('/', (req, resp) => {
   resp.send(makeResponse(users, req.headers))
});


app.listen(3000, () =>{
    console.log('API running...')
});