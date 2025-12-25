# map test

- [ ] Express + Firebase Realtime DatabaseでスポットデータAPIからJSONを得る
- [ ] React Native + Expo Locationで現在地を取得し、react-native-maps上でピン表示
- [ ] 録音・編集した .mp3音声を準備し、スポットごとに短い解説ガイドを作成する。距離判定による自動音声トリガーを組み込む。
- [ ] React Native（Expo, react-native-maps）でアプリUIを実装する。	

## テスト方法
```bash
npx expo start
```
で表示されるQRコードをExpo Goアプリをインストールの上カメラアプリで読み込むことで地図表示が可能。

ホットリロードが効く。
- iOS: テスト済み(apple-mapが使えるため)
- web: 非対応。react-native-mapsは標準ではwebで表示できない
- Android: 動作未確認。google map APIが必要な疑惑あり。でなくても、OpenStreetMapの無料サーバーにブロックされる可能性がある。(参照: [タイル利用規約](https://wiki.openstreetmap.org/wiki/JA:%E3%82%BF%E3%82%A4%E3%83%AB%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84))
- エミュレーター: インストールが面倒なので使ってない
- Expo Goを用いない開発ビルド: 未確認。インストールが大変だが、react-native-firebaseなんかで必須。開発ビルドを共有するのにも必要なので、どっちにしろ使う必要がある。


## react-native-mapsのバージョン
react native, react-native-maps共に互換性とドキュメントが混沌としている。バージョンごとに大きく書き方が変わるため

npx expo installコマンドは互換性を考慮し少し古い1.20.1を導入する。現状はこれ

1.24以降でないとpluginsとの連携ができない。Expo goでgoogle mapを使いたい場合は恐らくバージョンアップが必要。

また、react nativeの新アーキテクチャとの互換性に問題がある場合は、1.18を使用するべき。

## features

技術スタック: npm、React Native、Expo

ライブラリ: 
- react-native-maps
- expo-location
- nativewind: web以外でtailwindを使えるようにする。webでの使用を一切想定せず導入している。
- expo-router: Next.jsみたいなファイルシステムベースのルーター。

TSファイルは型チェックされる。JSも書けるがチェックは緩め

```bash
npm run lint
```

```bash
npm run typecheck
```

小規模プロジェクトは手動調整で十分なため、VS Codeの設定やPrettier導入は行っていない。

行う場合は[Expo で始める React Native 開発](https://zenn.dev/hayato94087/books/9ba8aa1f337dd5)を参考にするとよい

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.