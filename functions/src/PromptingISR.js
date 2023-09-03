const { logger, firestore } = require("firebase-functions/v2");
const got = require('got');

const topCollections = ['top', 'notice']

module.exports = firestore.onDocumentWritten('{collection}/{docId}', async (event) => {
    const { collection, docId } = event.params
    const baseUrl = process.env.BASE_URL

    const isTop = topCollections.some(colName => collection.includes(colName));

    const pathName = isTop ? '' : collection
    const collectionUrl = `${baseUrl}/${pathName}`

    const urls = [collectionUrl]
    if (!isTop) urls.push(`${collectionUrl}/${docId}`)

    for (const url of urls) {
        try {
            await got(url)
            console.log('success')
        } catch (error) {
            logger.log('not found')
        }
    }
    return
});