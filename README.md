# docker-psql-node-list-app

このリポジトリは、Node.js、Express、Knex.js、PostgreSQLをつかって、

プロゲートの[Node.jsコース](https://prog-8.com/languages/nodejs)をDocker環境で作ったものです。

[dockder-compose ソース元](https://github.com/pabloegpf1/Node-Postgres-Docker)

<br>

## はじめかた
### 1. [Docker](https://docs.docker.com/install/) と [Docker-Compose](https://docs.docker.com/compose/install/) をインストール

### 2. このリポジトリをダウンロードまたはクローン
        git clone https://github.com/mako4kamiya/docker-psql-node-list-app.git
### 3. リポジトリ内へ移動
        cd docker-psql-node-list-app
### 4. ルートディレクトリに.envファイルを作成
        touch .env or vim .env
### 5. 下記のように環境変数を設定する
        DB_NAME=postgres
        DB_USER=postgres
        DB_PW=postgres
        DB_PORT=5432
### 6. 以下のコマンドを実行
        docker-compose run web npm run migrate
        docker-compose up -d
### 7. サーバーを立ち上げる
        npm start
### 8. ブラウザにアクセス [http://localhost:3000](http://localhost:3000)

<br>

## その他
### コンテナの確認
`docker-compose ps`

### コンテナの停止
`docker-compose stop`

### コンテナの破棄
`docker-compose down`

### webコンテナに入る
`docker-compose exec web bash`

### dbコンテナに入る
`docker-compose exec db bash`

dbコンテナに入ったあとにdbを確認するには

`psql -U postgres`
