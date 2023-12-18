# こんにちは dev ブランチ

ルート直下で、`npm run setup`を起動すると、

- ルート直下
- client フォルダ内
- sever フォルダ内

で、

`npm install`コマンドが実行されて初期セットアップできます。

## ER 図

```mermaid
erDiagram
    foods ||--o{ categories : "categoryId"
    cookKinds ||--o{ recipes : "kindId"
    recipes ||--o{ foods : "foodId"
    ingredientList ||--|{ ingredients : "ingredientId"
    storeArea ||--o{ foods : "genreId"
    ingredients ||--|{ foods : "foodId"
    menus ||--|{ foods : "foodId"
    menus ||--|{ users : "userId"
    images ||--o{ recipes : "imageId"

    cookKinds {
        int id PK
        string kindName "作業区分(肉を切る など)"
        int priority "優先順位"
    }

    images {
      int id PK
      string imagePath "publicフォルダの画像名を格納"
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

    ingredients {
        int id PK
        int foodId FK
        int ingredientId FK
        float quantity "数量"
        string unit "単位"
    }

    ingredientList {
        int id PK
        string name "食材名"
        int genreId "買い物時の売り場区分け用ID"
    }

    storeArea {
        int id PK
        string name "野菜・魚・肉など"
    }


    foods {
        int id PK
        string name "料理名"
        boolean isMain "主菜か副菜か"
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
