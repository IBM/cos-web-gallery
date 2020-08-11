# Run locally

This document show how to run the 'cos-web-gallery' application on your local machine.

## Steps

1. [Clone the repo](#1-clone-the-repo)
2. [Obtain a credential for IBM Cloud Object Storage](#2-obtain-a-credential-for-ibm-cloud-object-storage)
3. [Configure the application](#3-configure-the-application)
4. [Run the application](#4-run-the-application)

### 1. Clone the repo

Clone the `cos-web-gallery` repository locally. In a terminal, run:

```
$ git clone https://github.com/IBM/cos-web-gallery
```

### 2. Obtain a credential for IBM Cloud Object Storage

In the IBM Cloud Console for COS, select the instance you would like to use, and then **Service Credentials** from the menu on the left.  Create a new credential, making sure to **Include HMAC Credential** from the advanced options.  Copy the contents of this credential to the clipboard using the **Copy to Clipboard** icon.  Paste the contents into a file named `~/.bluemix/cos_credentials`.  (Note: this file should not have an extension.)

### 3. Configure the application

You will need to edit `src/controllers/galleryController.js` on line 22 with the name of your bucket and on line 20 with a valid endpoint for your bucket.  From the **Endpoints** section back in the cloud concole for your instance of COS, be sure to use an endpoint that matches the location for your bucket.

### 4. Run the application
1. [Install Node.js](https://nodejs.org/en/download/) runtime or NPM.
1. Start the app by running `npm install`, followed by `npm start`.
1. Access the running app in a browser at `localhost:3000`

