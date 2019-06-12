import {v4 as uuidv4} from 'uuid';
import { S3, config } from 'aws-sdk';

config.update({ region: process.env.REGION || 'us-east-2' });
const s3 = new S3();
const uploadBucket = process.env.BUCKET;

// Creates a signed URL for direct uploads to S3
exports.handler = async () => {
  const result = await getUploadURL();
  console.log('Result: ', result);
  return result
};

const getUploadURL = async function() {
  console.log('getUploadURL started');
  let actionId = uuidv4();

  var s3Params = {
    Bucket: uploadBucket,
    Key:  `${actionId}.jpg`,
    ContentType: 'image/jpeg',
    CacheControl: 'max-age=31104000',
    ACL: 'public-read',
  };

  return new Promise((resolve) => {
    // Get signed URL
    let uploadURL = s3.getSignedUrl('putObject', s3Params);
    resolve({
      "statusCode": 200,
      "isBase64Encoded": false,
      "headers": {
        "Access-Control-Allow-Origin": "*"
      },
      "body": JSON.stringify({
        "uploadURL": uploadURL,
        "photoFilename": `${actionId}.jpg`
      })
    })
  })
};
