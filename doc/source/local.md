# Run locally

This document show how to run the 'cos-web-gallery' application on your local machine.

## Steps

1. [Clone the repo](#1-clone-the-repo)
2. [Configure IBM Cloud Object Storage](#2-configure-ibm-cloud-object-storage)
3. [Run the application](#3-run-the-application)

### 1. Clone the repo

Clone the `cos-web-gallery` locally. In a terminal, run:

```
$ git clone https://github.com/IBM/cos-web-gallery
```

### 2. Configure IBM Cloud Object Storage

In the IBM Cloud Console for COS, select the instance you would like to use, and then **Service Credentials** from the menu on the left.  Create a new credential, and then copy the contents of this credential to the clipboard using the **Copy to Clipboard** icon.  Paste the contents into a file named `~/.bluemix/cos_credentials`.

### 3. Run the application
1. [Install Node.js](https://nodejs.org/en/download/) runtime or NPM.
1. Start the app by running `npm install`, followed by `npm start`.
1. Access the running app in a browser at `localhost:3000`

