const crypto = require('crypto');

const length = 5;

function random() {
    let link = '';
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        link += char.charAt(Math.floor(Math.random() * char.length));
    }
    return link;
}
// function generateLink(){
//     crypto.randomBytes(4, (err, buf) => {
//         if (err) throw err;
//         console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
//     })
// }


module.exports = {
    random
}