# IBM Cloud Object Storage Web Gallery

This application demonstrates a simple Node.js Express web app that stores images to IBM Cloud Object storage, and retrieves their object URL to display them in a web gallery view.

When the reader has completed this Code Pattern, they will understand how to:

* Deploy a Cloud Foundry app
* Interact with Cloud Object Storage

![](doc/source/images/architecture.png)

## Flow

1. From the Image Upload form the user selects an image by using the photo gallery upload form and clicks Upload.
2. The form performs a POST to the app, and the app uses the S3 SDK to generate a PUT to the IBM COS server.
3. The user clicks the Gallery tab, which makes a GET request to the app for the gallery view.
4. The app performs a GET request through the S3 SDK to retrieve the image URLs of the images that are stored in the IBM COS bucket. The image URLs passed back in the response are merged with the view template which is rendered for the user and the images are displayed.

## Included components

* [Cloud Foundry](http://cloudfoundry.org/): Build, deploy, and run applications on an open source cloud platform.
* [Cloud Object Storage](https://console.bluemix.net/catalog/services/object-storage): Build and deliver cost effective apps and services with high reliability and fast speed to market in an unstructured cloud data store.

## Featured technologies

* [Cloud](https://www.ibm.com/developerworks/learn/cloud/): Accessing computer and information technology resources through the Internet.
* [Node.js](https://nodejs.org/): An open-source JavaScript run-time environment for executing server-side JavaScript code.

# Watch the Video

# Steps
Use the ``Deploy to IBM Cloud`` button **OR** create run locally

## Deploy to IBM Cloud

## Run the app locally
> NOTE: These steps are only needed when running locally instead of using the ``Deploy to IBM Cloud`` button.

1. [Clone the repo](#1-clone-the-repo)
2. [Configure IBM Cloud Object Storage](#2-configure-ibm-cloud-object-storage)
3. [Run the application](#3-run-the-application)

### 1. Clone the repo

Clone the `cos-web-gallery` locally. In a terminal, run:

```
$ git clone https://github.com/IBM/cos-web-gallery
```


### 3. Run the application
1. [Install Node.js][] runtime or NPM.
1. Start the app by running `npm install`, followed by `npm start`.
1. Access the running app in a browser at `localhost:3000`

# Sample output

Once run either locally or on IBM Cloud, you should see the following page when you hit the URL for you application:

![](doc/source/images/cos_webgallery.png)

# License
[Apache 2.0](LICENSE)

[Install Node.js]: https://nodejs.org/en/download/
