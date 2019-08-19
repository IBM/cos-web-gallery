# IBM Cloud Object Storage Web ギャラリー

このコードパターンでは、画像をIBM Cloud Object Storage (ICOS)に保存し、それらのオブジェクトURLを取得して表示するNode.js Express Webアプリを使用してWebギャラリーを作成します。サーバー側アプリの中心には、IBM COSへの認証と接続を処理するJavaScript IBM COS SDKパッケージがあり、Expressはコントローラーによってビジネスロジックを処理できるルーティングを処理します。アップロードフォームは、IBM COS SDK、multer、およびmulter-s3関数から関数を呼び出して、指定されたIBM COSバケットにアップロードする高速ルートに画像をアップロードします。画像ギャラリービューのリクエストは、バケット内の各画像のURLを取得するためにIBM COS SDK関数を呼び出します。 URLデータは応答で返送され、ビューのレンダリング中にEJSビューテンプレートとマージされます。

このコードパターンを完了すると次の内容を理解できます:

* Node.jsアプリをデプロイする（オプションでCloud Foundryを使用）
* Cloud Object Storageのサービスインスタンスをプロビジョニングする
* Node.js IBM COS SDKを使用して、Cloud Object Storageと対話する

![](doc/source/images/architecture.png)

## フロー

1. 画像アップロードフォームから、フォトギャラリーアップロードフォームを使用して画像を選択し、[Upload]ボタンをクリックする。
2. フォームはアプリに対してPOSTを実行し、アプリはS3 SDKを使用してIBM COSサーバーへのPUTを生成する。
3. [Gallery]タブをクリックすると、ギャラリービューのアプリにGETリクエストが送信される。
4. アプリは、S3 SDKを介してGETリクエストを実行し、IBM COSバケットに保存されている画像の画像URLを取得する。応答で返された画像URLは、ユーザー用に表示されるビューテンプレートとマージされ、画像が表示される。

## 含まれるコンポーネント

* [Cloud Foundry](https://www.cloudfoundry.org/): オープンソースのクラウドプラットフォームでアプリケーションをビルド、デプロイ、実行。
* [Cloud Object Storage](https://cloud.ibm.com/catalog/services/cloud-object-storage): 非構造化クラウドデータストアで、高い信頼性と迅速な市場投入を実現する、費用対効果の高いアプリとサービスを構築して提供。

## 注目のテクノロジー

* [Cloud](https://developer.ibm.com/depmodels/cloud/): Accessing computer and information technology resources through the Internet.
* [Node.js](https://nodejs.org/): An open-source JavaScript run-time environment for executing server-side JavaScript code.

# 動画

[![](https://img.youtube.com/vi/0OLmvFJ_HKM/0.jpg)](https://www.youtube.com/watch?v=0OLmvFJ_HKM)

# 操作手順
``Deploy to IBM Cloud`` ボタンから始める方法 **または** ローカル実行できるアプリケーションを作成する。

## IBM Cloudへデプロイする方法

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/IBM/cos-web-gallery)

上記の[Deploy to IBM Cloud]ボタンをクリックし、[Deploy]ボタンをクリックする。

## アプリをローカルで実行する方法
> NOTE: こちらの手順は、 ``Deploy to IBM Cloud`` ボタンをしようする代わりに、ローカルで実行する場合に参考にしてください。

1. [リポジトリのクローン](#1-リポジトリのクローン)
2. [IBM Cloud Object Storageの構成](#2-IBM Cloud Object Storageの構成)
3. [アプリケーションの実行](#3-アプリケーションの実行)

### 1. リポジトリのクローン

`cos-web-gallery` をローカルにクローンするため、下記のコマンドをローカルで実行する。

```
$ git clone https://github.com/IBM/cos-web-gallery
```

### 2. IBM Cloud Object Storageの構成

IBM Cloud Console for COSで、使用するインスタンスを選択してから、左側のメニューから「サービス資格情報」を選択する。新しい資格情報を作成し、[クリップボードにコピー]アイコンを使用して、この資格情報の内容をクリップボードにコピーしする。内容を「~/.bluemix/cos_credentials」という名前のファイルに貼り付けて保存する。

### 3. アプリケーションの実行
1. [Node.js](https://nodejs.org/en/download/)ランタイムまたはNPMをインストールする。
2. 「npm install」を実行してアプリを起動し、続いて「npm start」を実行する。
3. ブラウザで「localhost：3000」にアクセスし、実行中のアプリを表示する。

# サンプル出力

ローカルまたはIBM Cloudで実行すると、アプリケーションのURLにアクセスすると次のページが表示されます:

![](doc/source/images/cos_webgallery.png)

# ライセンス

このコードパターンは、Apacheソフトウェアライセンス、Version 2 でライセンスされます。このコードパターン内で呼び出される個別のサードパーティコードオブジェクトは、独自の個別のライセンスに従って、それぞれのプロバイダーによってライセンスされます。Contributionsは、[Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) および [Apache Software License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt) の対象となります。

[Apache Software License (ASL) FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)

[Install Node.js]: https://nodejs.org/en/download/
