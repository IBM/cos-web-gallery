var galleryController = function(title) {

    var aws = require('aws-sdk');
    var multer = require('multer');
    var multerS3 = require('multer-s3');
    var ep = new aws.Endpoint('https://s3-api.us-geo.objectstorage.softlayer.net');
    var s3 = new aws.S3({endpoint: ep, region: 'us-east-1'});
    var myBucket = 'web-images';

    var upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: myBucket,
            key: function (req, file, cb) {
                cb(null, file.originalname);
                console.log(file);
            }
        })
    });

    var getGalleryImages = function (req, res) {

        var imageUrlList = [];
        var params = {Bucket: myBucket};
        s3.listObjectsV2(params, function (err, data) {
            if(data) {
                var bucketContents = data.Contents;

                for (var i = 0; i < bucketContents.length; i++) {
                    if(bucketContents[i].Key.search(/.jpg/i) > -1) {
                        var urlParams = {Bucket: myBucket, Key: bucketContents[i].Key};

                        s3.getSignedUrl('getObject', urlParams, function (err, url) {
                            imageUrlList[i] = url;
                        });
                    }
                }
            }
            res.render('galleryView', {
                title: title,
                imageUrls: imageUrlList
            });
        });
    };


    return {
        getGalleryImages: getGalleryImages,
        upload: upload
    };
};

module.exports = galleryController;
