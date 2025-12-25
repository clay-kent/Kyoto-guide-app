# MapView test for frontend of Kyoto guide app

- [ ] Express + Firebase Realtime DatabaseでスポットデータAPIからJSONを得る
- [x] React Native + Expo Locationで現在地を取得し、react-native-maps上でピン表示
- [ ] 録音・編集した .mp3音声を準備し、スポットごとに短い解説ガイドを作成する。距離判定による自動音声トリガーを組み込む。
- [ ] React Native（Expo, react-native-maps）でアプリUIを実装する。	

## テスト方法
```bash
npm install
```
でインストール後
```bash
npx expo start
```
で表示されるQRコードをExpo Goアプリをインストールの上カメラアプリで読み込むことで地図表示が可能。

ホットリロードが効く。
- iOS: テスト済み
- web: 非対応。react-native-mapsは標準ではwebで表示できない
- Android: 動作未確認。OpenStreetMapの無料サーバーにブロックされる可能性がある。(参照: [タイル利用規約](https://wiki.openstreetmap.org/wiki/JA:%E3%82%BF%E3%82%A4%E3%83%AB%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84))
- エミュレーター: インストールが面倒なので使ってない
- Expo Goを用いない開発ビルド: 未確認。開発ビルドを共有するのに必要。

## 

技術スタック: npm、React Native、Expo

ライブラリ: 
- react-native-maps
- expo-location
- nativewind: web以外でtailwindを使えるようにする。webでの使用を一切想定せず導入している。
- expo-router: Next.jsみたいなファイルシステムベースのルーター。

TSファイルは型チェックされる。JSも書けるがチェックは緩め

リンタと型チェッカーが使える
```bash
npm run lint
```

```bash
npm run typecheck
```

小規模プロジェクトは手動調整で十分なため、VS Codeの設定やPrettier導入は行っていない。

行う場合は[Expo で始める React Native 開発](https://zenn.dev/hayato94087/books/9ba8aa1f337dd5)を参考にするとよい
