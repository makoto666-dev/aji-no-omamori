# 味のおまもり

家族の料理と思い出を残すカード連動Webアプリ。HTML/CSS/JavaScriptのみで動作します。

## 起動
`index.html` をブラウザで開くか、VS Code の Live Server を使います。

## 編集
- `script.js` の `recipes` に料理名・材料・手順・メッセージを設定
- 写真は `assets/images/`、動画は `assets/videos/`、音声は `assets/audio/` に配置
- 例: `image:'assets/images/nikujaga.jpg'`, `video:'assets/videos/nikujaga.mp4'`, `audio:'assets/audio/nikujaga.mp3'`
- 動画・音声の公開に家族の許可を得てください。

## ファイル構成

```text
aji-no-omamori/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── videos/
│   └── audio/
├── docs/
│   └── specification.md
└── README.md
```

仕様書は [docs/specification.md](docs/specification.md) にあります。
素材用フォルダの `.gitkeep` は、素材が未配置でもGitでフォルダを保持するためのファイルです。
写真・動画・音声の実ファイルはまだ配置されていません。

## GitHub Pages
1. GitHub に `aji-no-omamori` という公開リポジトリを作る
2. ファイルをリポジトリのルートに push
3. Settings → Pages → Deploy from a branch → main / (root) → Save
4. 公開URLが表示されたらスマホで確認

## QRコード用URL
- コレクション: `https://USERNAME.github.io/aji-no-omamori/`
- 肉じゃが: `https://USERNAME.github.io/aji-no-omamori/?id=nikujaga`
- 卵焼き: `https://USERNAME.github.io/aji-no-omamori/?id=tamagoyaki`
- お味噌汁: `https://USERNAME.github.io/aji-no-omamori/?id=miso-soup`

公開URLが確定した後に各URLをQRコード化してください。GitHubのユーザー名・リポジトリ名は実際の値に置き換えます。
