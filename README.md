# mysite - 日本酒醸造企業のサイト

## プロジェクト概要

このプロジェクトは、日本酒製造を行う街の醸造所の企業サイトです。
ドキュメント(`docs/SITE_ARCHITECTURE.md`と`docs/PAGE_DETAILS.md`)に従って構築されました。

## サイト構成

- **トップページ** (`/`) - ホーム、企業紹介、特徴、主要商品
- **会社概要ページ** (`/about`) - 企業情報、理念、事業内容、History
- **思いを語るページ** (`/philosophy`) - 経営陣メッセージ、製造理念、こだわり、ビジョン
- **アクセスページ** (`/access`) - 基本情報、地図、アクセス方法、見学受付、お問い合わせフォーム

## 技術スタック

- **フレームワーク**: Next.js 14
- **React**: 18.2.0
- **スタイリング**: Tailwind CSS
- **言語**: JavaScript (JSX)

## ディレクトリ構造

```
mysite/
├── app/
│   ├── layout.jsx              # ルートレイアウト（ヘッダー、フッター含む）
│   ├── globals.css             # グローバルスタイル
│   ├── page.jsx                # トップページ
│   ├── about/page.jsx          # 会社概要ページ
│   ├── philosophy/page.jsx     # 思いを語るページ
│   └── access/page.jsx         # アクセスページ
├── components/
│   ├── Header.jsx              # ヘッダー（ナビゲーション付き）
│   ├── Footer.jsx              # フッター
│   └── sections/
│       ├── HeroSection.jsx     # ヒーロー画像セクション
│       ├── FeaturesSection.jsx # 特徴紹介セクション
│       ├── NavigationCards.jsx # 主要ページへのリンク
│       └── ProductsSection.jsx # 主要商品紹介
├── docs/
│   ├── SITE_ARCHITECTURE.md    # サイト構造設計
│   └── PAGE_DETAILS.md         # ページ詳細設計
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
├── .gitignore
└── README.md
```

## セットアップと実行

### 必要な環境
- Node.js 16.x 以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
npm run start
```

## デザイン特徴

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **色彩**: 日本酒のイメージを反映した落ち着いた色合い
  - `sake-dark`: #2c1810
  - `sake-brown`: #8b4513
  - `sake-cream`: #f5e6d3
- **スムーズなアニメーション**: ホバーエフェクトとスムーズなトランジション

## ページ詳細

### トップページ (/)
- ヒーロー画像/セクション
- 企業キャッチコピー
- 特徴紹介セクション（4つのハイライト）
- 主要ページへのナビゲーション
- 主要商品の紹介

### 会社概要ページ (/about)
- 企業基本情報
- 企業理念（ミッション、ビジョン、バリュー）
- 事業内容の説明
- 主要商品紹介
- 企業のHistory/Timeline

### 思いを語るページ (/philosophy)
- 代表取締役のメッセージ
- 製造理念
- こだわりポイント（4項目）
- 地域への想い
- 今後のビジョン

### アクセスページ (/access)
- 基本情報（名前、住所、電話、営業時間）
- 地図表示エリア
- 電車でのアクセス
- 車でのアクセス
- 見学受付情報
- お問い合わせフォーム（実装済み）

## 今後の拡張予定

- ブログ・コラム機能
- イベント情報ページ
- 見学予約機能の統合
- ニュースレター購読機能
- 多言語対応（国際展開時）
- SNS連携
