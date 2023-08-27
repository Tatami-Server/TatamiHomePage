const Query = require("minecraft-query");
const q = new Query({host: 'rusian0.com', port: 25565, timeout: 7500});
// const q = new Query({host: 'mc.tatamiserver.com', port: 9630, timeout: 7500});

export default async function handler(req, res) {
    const fullStat = await q.fullStat()
    res.status(200).json(fullStat)
};