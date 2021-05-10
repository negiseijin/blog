# Blog

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- css Formatting with [stylelint](https://stylelint.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## 機能（予定機能含む）
- 記事一覧
- カテゴリー別記事一覧
- 最新の記事一覧
- 検索
- パンくずリスト
- 記事詳細
  - 目次
  - SNSシェアボタン
  - 下書きプレビュー
  - 関連記事
- サイトマップ

## 構成図
![architecture](public/architecture.jpg 'architecture')

## 技術構成
- Next（SSG）
- microCMS（post）
- Netlify（Hosting, Functions）
- ESLint
- Prettier
- Tailwind CSS
- StyleLint

## microCMSのAPIスキーマ設定

### ブログ
endpoint: blog
type: リスト形式

| フィールドID | 表示名 | 種類 |
| ------------- | ------------- | ----- |
| title | タイトル | テキストフィールド |
| category | カテゴリー | コンテンツ参照 - カテゴリー |
| toc_visible | 目次 | 真偽値 |
| body | 本文 | リッチエディタ |
| description | 概要 | テキストフィールド |
| ogimage | OGP画像 | 画像 |
| related_blogs | 関連記事 | 複数コンテンツ参照 - ブログ |

### カテゴリー
endpoint: categories
type: リスト形式

| フィールドID | 表示名 | 種類 |
| ------------- | ------------- | ----- |
| name | 名前 | テキストフィールド |


## 開発方法

```bash
# clone
git clone https://github.com/negiseijin/blog
# move blog
cd blog
# install library
yarn
```
