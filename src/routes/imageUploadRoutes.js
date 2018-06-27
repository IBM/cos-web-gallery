// Copyright 2018 IBM Corp. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.

var express = require('express');
var imageUploadRouter = express.Router();
var status = '';

var router = function(title) {

    var galleryController =
        require('../controllers/galleryController')(title);

    imageUploadRouter.route('/')

        .post(
            galleryController.upload.array('img-file', 1), function (req, res, next) {

                if(res.statusCode===200 && req.files.length > 0) {
                    status = 'uploaded file successfully';
                }
                else {
                    status = 'upload failed';
                }
                res.render('index', {status: status, title: title});
            });


    return imageUploadRouter;
};

module.exports = router;
