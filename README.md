# serverless-image-processor

[![Build Status](https://travis-ci.org/Mercateo/serverless-image-processor.svg?branch=master)](https://travis-ci.org/Mercateo/serverless-image-processor)
[![Coverage Status](https://coveralls.io/repos/github/Mercateo/serverless-image-processor/badge.svg?branch=master)](https://coveralls.io/github/Mercateo/serverless-image-processor?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/Mercateo/serverless-image-processor.svg)](https://greenkeeper.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/149b0866f7121aad91a9/maintainability)](https://codeclimate.com/github/Mercateo/serverless-image-processor/maintainability)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/Mercateo/serverless-image-processor/blob/master/LICENSE)

This is a [Serverless](https://serverless.com) starter for an image processing lambda. It will create a Cloudfront Distribution, an API Gateway, a image source Bucket and a Lambda function. It's based on the phenomenal [sharp](https://github.com/lovell/sharp) image manipulation and conversion library.

Request flow is:  
User -> Cloudfront -> API Gateway -> Lambda

## Supported formats
  
Input: ```image/jpeg```, ```image/png```, ```image/gif```  
Output: ```image/jpeg```, ```image/png```, ```image/webp```


## Query params

See [src/QueryParams.ts]

## Deployment

If you want to deploy this project to AWS please have a look at this documentation <https://serverless.com/framework/docs/providers/aws/guide/quick-start/>  
It should give you a very good starting point.

## Local development

1. ```$ yarn```
2. ```$ yarn start```

That's it! :)

The start command will spin up an offline version of an API Gateway and a local S3 server (via [serverless-offline](https://github.com/dherault/serverless-offline)). After this you can query some test images (test.gif, test.jpg and test.png) via ```http://localhost:3000```.

## Contributing
Please feel free to open issues or create PRs. :)  
Just run the test suites (```yarn test``` and ```yarn test:e2e```) and create new tests for added features.
Also make sure you run ```yarn lint``` (and ```yarn lint:fix```) to check for code style issues.
Notice: the end to end tests may fail on your setup. I work on this :/

## A note on updating sharp
```sharp``` is fixed at version ```0.20.1```. If you plan to upgrade please follow [this](http://sharp.dimens.io/en/stable/install/#aws-lambda) guide and place the output in the ```compiled/``` folder.

## Credits
Example photos by Adi Constantin, Michael DePetris, Blake Connally on Unsplash

