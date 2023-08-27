const util = require('minecraft-server-util');

const serverAddress = 'rusian0.com';
const port = 25565;
// const serverAddress = 'mc.tatamiserver.com';
// const port = 49160;

export default async function handler(req, res) {
    util.status(serverAddress, port)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            console.error('エラーが発生しました:', error);
        });
};