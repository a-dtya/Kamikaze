import axios from 'axios';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import 'dotenv/config';
import { s3 } from '../config.js';
async function sendGetRequest(id) {
   const  newurl = "https://graph.facebook.com/v18.0/" + id;
    try {
        const response = await axios.get(newurl, {
            headers: {
                "Authorization": "Bearer " + process.env.ACCESSTOKEN // Add your Token to the header of the API request
            }
        })
        // console.log(response) if you want to see the response you get. 

        if (response.data && response.data.url) {

            //Get the Image Url
            const mediaURL = response.data.url;
            //Get the Image type, need it for saving in AWS S3

            const mediaMimeType = response.data.mime_type;

            console.log(" Response from Graph V.18 - image: " + mediaURL);
            console.log(" Mime type: " + mediaMimeType);

           const url =  await uploadMediaToS3(mediaURL, mediaMimeType,id);
            return url;


        } else {
            console.log("Unexpected response format:", response.data);
        }
    } catch (error) {
        console.error('Error saving image from sendgetrequest:', error.message);
    }
}




async function uploadMediaToS3(mediaURL, mediaMimeType, id) {
  const filename = `WA_${id}`;
  let fileExtension = mediaMimeType.split('/')[1]; // e.g., "png" from "image/png"
  let typeOfFile = mediaMimeType.split('/')[0]; // e.g., "image"
  let key = `${typeOfFile}/${filename}.${fileExtension}`;

  try {
    // Download media
    const response = await axios.get(mediaURL, {
      headers: {
        'Authorization': `Bearer ${process.env.ACCESSTOKEN}`,
        'Content-Type': mediaMimeType,
      },
      responseType: 'arraybuffer',
    });

    if (!response.data) {
      console.error('Empty response data received.');
      return;
    }

    // Upload media to S3
    const uploadResult = await s3.send(new PutObjectCommand({
      Bucket: process.env.PUBLIC_S3_BUCKET_NAME, // Your bucket name
      Key: key,
      Body: response.data,
      ContentType: mediaMimeType,
    }));

    console.log(`Media uploaded to AWS S3 successfully as ${key}.`);

    // Assuming you have configured your S3 bucket for static website hosting
    // or public access for objects, you can construct the URL as follows:
    const imageUrl = `https://${process.env.PUBLIC_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
    console.log(`Image URL: ${imageUrl}`);

    return imageUrl;
  } catch (error) {
    console.error('Error processing media:', error);
    return null;
  }
}





export { sendGetRequest, uploadMediaToS3};