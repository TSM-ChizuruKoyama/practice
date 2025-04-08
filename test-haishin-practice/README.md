## 依存関係をインストールする

```bash
npm ci
```

## 開発サーバーを起動する

```bash
npm run dev
```

## Docker

```bash
# イメージをビルドする
docker build -t test-haishin-practice .

# コンテナとして起動する
docker run -p 3000:3000 test-haishin-practice
```
