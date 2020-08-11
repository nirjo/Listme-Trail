import { useState } from 'react';
// import ImagePicker from 'react-native-image-picker'; // Do Not support expo
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import ImageResizer from 'react-native-image-resizer'; // Do not support expo
import { makeid } from '../utils/helpers';

const signedUploadUrlMutation = gql`
  mutation signFileUpload($fileName: String!, $fileType: String!) {
    signFileUpload(fileName: $fileName, fileType: $fileType) {
      signedUrl
      fileUrl
    }
  }
`;

const useFileUpload = () => {
  const [image, setImage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadUrl, setUploadUrl] = useState(null);
  const [executeUploadMutation] = useMutation(signedUploadUrlMutation);

  const handleUpload = () => {
    // ImagePicker.showImagePicker({}, response2 => {
    //   ImageResizer.createResizedImage(response2.uri, 800, 800, 'JPEG', 65)
    //     .then(async response3 => {
    //       const response = {
    //         ...response2,
    //         ...response3,
    //         type: 'image/jpeg',
    //       };
    //       setIsLoading(true);
    //       // console.log('Response = ', response);
    //       if (response.didCancel) {
    //         console.log('User cancelled image picker');
    //         setIsLoading(false);
    //       } else if (response.error) {
    //         console.log('ImagePicker Error: ', response.error);
    //         setIsLoading(false);
    //       } else if (response.customButton) {
    //         console.log('User tapped custom button: ', response.customButton);
    //       } else {
    //         const source = { uri: response.uri };
    //         // You can also display the image using data:
    //         // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //         // console.log('source', source);
    //         const variables = {
    //           fileName: `${makeid(3)}-${response.fileName}`,
    //           fileType: response.type,
    //         };
    //         // get signed url from aws s3
    //         const signedUploadUrl = await executeUploadMutation({
    //           variables,
    //         });
    //         if (signedUploadUrl.data.error) {
    //           console.log('upload error', signedUploadUrl.data.error);
    //           setIsLoading(false);
    //           return;
    //         }
    //         const { signedUrl, fileUrl } = await signedUploadUrl.data
    //           .signFileUpload;
    //         await new Promise((resolve, reject) => {
    //           // console.log('upload to aws', signedUrl, response);
    //           const xhr = new XMLHttpRequest();
    //           xhr.open('PUT', signedUrl);
    //           xhr.onreadystatechange = function() {
    //             if (xhr.readyState === 4) {
    //               if (xhr.status === 200) {
    //                 resolve('Image successfully uploaded to S3');
    //               } else {
    //                 reject(new Error('Error while sending the image to S3'));
    //               }
    //             }
    //           };
    //           xhr.setRequestHeader('Content-Type', response.type);
    //           xhr.send({
    //             uri: response.uri,
    //             type: response.type,
    //             name: response.filename,
    //           });
    //         });
    //         setImage(source);
    //         setIsLoading(false);
    //         setUploadUrl(fileUrl);
    //       }
    //     })
    //     .catch(err => {
    //       // Oops, something went wrong. Check that the filename is correct and
    //       // inspect err to get more details.
    //       console.log('resize error', err);
    //       setIsLoading(false);
    //     });
    // });
  };

  return [handleUpload, { image, isLoading, fileUrl: uploadUrl }];
};

export default useFileUpload;
