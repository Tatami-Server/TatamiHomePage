import axios from 'axios'

const endpoint = 'https://api.tatamiserver.com/minecraft/server';
export default async function handler(req, res) {
    axios.get(endpoint)
        .then((response) => {
            const serverStats = []

            for(const serverStat of response.data) {
                const [ type, stat ] = Object.entries(serverStat)[0]
                if(!stat.online) continue
                
                const {
                    onlinePlayers
                } = stat

                const statData = {
                    type,
                    players: Object.keys(onlinePlayers.players)
                }

                serverStats.push(statData)
            }

            res.status(200).json(serverStats)
        })
        .catch((error) => {
            res.status(200).json([])
        });
};