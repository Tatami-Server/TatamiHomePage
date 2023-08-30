const { logger, storage } = require("firebase-functions/v2");
const { getStorage } = require("firebase-admin/storage");
const sharp = require("sharp");

exports.OptimizeImage = storage.onObjectFinalized(async ({data}) => {

    const fileBucket = data.bucket; // Storage bucket containing the file.
    const filePath = data.name; // File path in the bucket.
    const contentType = data.contentType; // File content type.

    // Exit if this is triggered on a file that is not an image.
    if (!contentType.startsWith("image/")) {
        return logger.log("This is not an image.");
    }
    // Exit if the image is already converted
    if (contentType.startsWith("image/webp")) {
        return logger.log("Already converted.");
    }

    // Download file into memory from bucket.
    const bucket = getStorage().bucket(fileBucket);
    const downloadResponse = await bucket.file(filePath).download();
    const imageBuffer = downloadResponse[0];
    logger.log("Image downloaded!");

    // Generate webp using sharp.
    const convertedBuffer = await sharp(imageBuffer).webp({quality: 100 }).toBuffer();
    logger.log("converted");

    // Upload the webp.
    const metadata = { contentType: 'image/webp' };
    await bucket.file(filePath).save(convertedBuffer, {
        metadata: metadata,
    });
    return logger.log("uploaded");
});