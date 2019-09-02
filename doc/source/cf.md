# Run on IBM Cloud with Cloud Foundry

This document shows how to run the `cos-web-gallery` application using Cloud Foundry on IBM Cloud.

## Steps

1. [Clone the repo](#1-clone-the-repo)
2. [Configure the application](#2-configure-the-application)
3. [Launch the application](#3-launch-the-application)
4. [Configure Object Storage](#4-configure-object-storage)

### 1. Clone the repo

Clone `cos-web-gallery` locally. In a terminal, run:

  `$ git clone https://github.com/ibm/cos-web-gallery`

### 2. Configure the application

You will need to specify an unique name for the `host` in the `manifest.yml` file.  You will also need to update `src/controllers/galleryController.js` with a unique name for your bucket (line 22) and an endpoint if you are using a region other then `us-south` (lines 20, 21).

### 3. Launch the application

Login to IBM Cloud and push the application

```bash
ibmcloud login
cd cos-web-gallery
cf push
```

### 4. Configure Object Storage

In the IBM Cloud Console for COS, select the instance you would like to use, and then **Service Credentials** from the menu on the left.  Create a new credential, making sure to check the **Include HMAC Credential** box.  View your new credential and take note of two values in the `cos_hmac_keys` section: `access_key_id` and `secret_access_key`.  Back in your application, navigate to the **Environment variables** page, and create two user defined variables named `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.  Use the values from your COS credential.

![variables](/doc/source/images/env-variables.jpg)

<!---
[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/IBM/cos-web-gallery)

Click the ``Deploy to IBM Cloud`` button and hit ``Create`` on the next prompt. This will automatically create the services and application for you.
--->
[![return](https://raw.githubusercontent.com/IBM/pattern-utils/master/deploy-buttons/return.png)](https://github.com/IBM/cos-web-gallery#deployment-options)
