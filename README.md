# AppName：🐻クックま🐻
あなたの日々の料理をサポートしてくれるアプリ

①献立自動生成

②買い物サポート

（5日分の献立の材料リストを表示。スーパーの売り場毎にグルーピングされており、入り口からレジに行くまでに効率よく買い物出来る）

③複数品献立作成時のマルチタスクで最も効率の良い料理手順を自動生成し、音声操作、音声読み上げで料理をサポート


# How to use 
アプリの動きは下記写真左→右の流れ

1.ログイン画面でユーザー名、パスワードを入力しログイン<br>

  　`ユーザー名:あなたの設定`<br>
   `passwword　:あなたの設定`
  
2.アカウントなければ新規登録で必要事項入力しログイン<br>

  　`ユーザー名　:あなたの設定`<br>
   `メールアドレス:あなたの設定`<br>
   `passwword　　:あなたの設定`<br>
   
  　`大人、子供の人数、アレルギーを登録する`
  
3.自動生成された献立(5日分)を確認

4.献立変更ボタンで献立を選択し、献立(5日分)を決める


5.買い物リストで献立(5日分)の食材を購入する

6.料理ボタンを押すと当日の献立の料理工程を最適化した手順で料理をサポート

<img width="100" alt="ログイン" src="https://github.com/shunichi-baba/readme/assets/119465420/f116651e-3d47-456e-b86e-fbfa4f7e9606">　
<img width="100" alt="新規登録" src="https://github.com/shunichi-baba/readme/assets/119465420/88176283-0179-4b36-957c-466399b0a209">　
<img width="100" alt="アレルギー" src="https://github.com/shunichi-baba/readme/assets/119465420/a0daa4eb-7e61-43b9-b647-be74a1b7dd2f">　
<img width="100" alt="献立" src="https://github.com/shunichi-baba/readme/assets/119465420/95151ee5-abf8-4bab-be2a-55ca0b405f0e">
<img width="100" alt="献立変更" src="https://github.com/shunichi-baba/readme/assets/119465420/a7af1f48-e023-4cbc-8a5a-8d288a6fecab">
<img width="100" alt="買い物リスト" src="https://github.com/shunichi-baba/readme/assets/119465420/37810b6b-7da8-421a-8922-25c4d456a895">
<img width="100" alt="料理工程" src="https://github.com/shunichi-baba/readme/assets/119465420/f7590e30-09b3-405d-8693-055486be3e19">


# Index

- [About](#about)
- [Technology](#technology)
- [Setup](#setup)
- [ER diagram](#er-diagram)
- [Future plans](#future-plans)


# About
毎日忙しいけど愛する人を手料理で喜ばせたい...    
限られた時間で複数品の料理をマルチタスクで実施する為、自分の時間がなくゆっくり休めない。  
<br>
そんな方へ私達から解決手段を提供します。    
私たちのサービスを使用する事で、あなたとパートナーは、毎回新鮮で素晴らしい体験が出来るでしょう  


I am busy every day but want to please my loved ones with home-cooked food...    
You multitask and cook multiple dishes in a limited amount of time, leaving you no time for yourself and no time for rest. 
<br>
We offer you a solution.   
By using our service, you and your partner will have a fresh and wonderful experience every time!  


# Technology

### < frontend >
react-nativeのbare bareworkflow<br>
音声認識：react-native-voice<br>
音声読み上げ：Expo Speech

### < backend >
node.js、knex.js<br>
複数料理最適化自作ロジック<br>
自作レシピAPI<br>
認証：JWT(JSON Web Token)

### < Database >  
Postgresを使用

# Setup

### < Downloading and installing steps >  
iosシミュレータのみ動作確認済み<br>
事前にxcodeにて最新のシミュレータ動作環境を構築する<br>
`Xcode15.2`
`ios simulator 15.2`
`npm 9.8.1`

バックエンドはHerokuにデプロイ済み　2024/1/31まで稼働

1. efficient を clone する
```zh
git clone git@github.com:team2wish/efficient.git
```
2. clone したディレクトリ内に移動
```zh
cd efficient
```
3. vscode立ち上げる
```zh
code .
```
4. efficientルート直下でインストール
```zh
npm run setup
```

5. clientフォルダへ移動
```zh
cd client
```

6. アプリ起動
```zh
npm run ios
```


# ER diagram

```mermaid
erDiagram
    foods ||--o{ categories : "categoryId"
    ingredients ||--|{ foods : "foodId"
    cook_kinds ||--o{ recipes : "kindId"
    recipes ||--o{ foods : "foodId"
    images ||--|{ foods : "pictPathId"
    ingredient_list ||--|{ ingredients : "ingredientId"
    menus ||--|{ foods : "foodId"
    images ||--o{ recipes : "imageId"
    menus ||--|{ users : "userId"
    store_area ||--o{ ingredient_list : "genreId"

    cook_kinds {
        int id PK
        string kindName "作業区分(肉を切る など)"
        int priority "優先順位"
    }


    recipes {
        int id PK
        int foodId FK
        string text "作業手順の内容"
        int imageId FK
        int kindId FK
        int workTime "目安作業時間"
        boolean canWrap "他の作業トラップできるか"
    }

    foods {
        int id PK
        string name "料理名"
        boolean isMain "主菜か"
        boolean isSide "副菜か"
        boolean isSoup "汁物か"
        boolean isRice "ご飯か"
        int categoryId FK
        boolean shrimp "えびアレルギー"
        boolean crab "かにアレルギー"
        boolean wheat "小麦アレルギー"
        boolean buckwheat_noodles "蕎麦アレルギー"
        boolean egg "卵アレルギー"
        boolean milk "乳アレルギー"
        boolean peanut "落花生アレルギー"
        string pictPathId FK "完成品メニュー画像パス"
        int totalTime "単品料理の調理時間"
    }

    ingredients {
        int id PK
        int foodId FK
        int ingredientId FK
        float quantity "数量"
        string unit "単位"
    }

    ingredient_list {
        int id PK
        string name "食材名"
        int genreId FK "買い物時の売り場区分け用ID"
    }

    store_area {
        int id PK
        string name "野菜・魚・肉など"
    }

    images {
      int id PK
      string imagePath "publicフォルダの画像名を格納"
    }

    categories {
        int id PK
        string categoryName "魚料理、鶏肉料理など"
    }

    users {
      int id PK
      string userName "ユーザー名"
      string mail "メールアドレス"
      string salt "ソルト"
      string hash "ハッシュ"
      int numOfAdults "大人の人数"
      int numOfChildren "子供の人数"
      boolean shrimp "えびアレルギー"
      boolean crab "かにアレルギー"
      boolean wheat "小麦アレルギー"
      boolean buckwheat_noodles "蕎麦アレルギー"
      boolean egg "卵アレルギー"
      boolean milk "乳アレルギー"
      boolean peanut "落花生アレルギー"
    }

    menus {
      int id PK
      int userId FK "ユーザーIDで紐付け"
      int foodId FK "料理IDで紐付け"
      date startWeek "調理週"
      date date "調理日"
      int timingFlag "朝: 0, 昼: 1, 夕: 2"
    }

```

# Future plans
- ユーザーレシピ投稿機能
- 料理工程最適化ロジックのブラッシュアップ
- リリース後の使用者の使用性フィードバック
