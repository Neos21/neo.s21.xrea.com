---
title        : ドキュメントを書く時の定石集
created      : 2020-11-16
last-modified: 2020-11-16
path:
  - /index.html Neo's World
  - /tech/index.html Tech
---

SE が良いドキュメントを書くための定石をまとめます。


## 目次


## 全てのドキュメントに書くべきヘッダ

- タイトル
  - 何のためのドキュメントであるかを一言で伝える名前重要
  - 何が書いてあり、何が書いてなさそうかを伝える
- 成果物 ID
  - 「成果物一覧」と比較して、納品時に過不足がないか確認できるようにするため
  - 納品しないドキュメントの場合も、「どのドキュメントについて話しているか」をチーム内で明らかにするため、何らか一意になる ID を設けておくと良い
- 初版作成日
  - いつ頃作られたドキュメントか分かる → そのドキュメントが作られた起因を後で追いやすい (作成日の少し前に作成 or 更新されたドキュメントを見つけやすくなると、経緯も追いやすい)
- 初版作成者
  - 誰が作ったドキュメントか分かる → ドキュメントの内容に関して質問したいことがある時、相手が分かる
- 最終更新日
  - 最後に更新された日付が分かる → きちんとメンテナンスされているドキュメントか、放置されているドキュメントかの区別が付く
  - 放置されているドキュメントは「誤りになった」情報を含んでいる可能性が高く、信頼性に欠けるそのつもりで読みやすい
- 最終更新者
  - 最後に更新した人が分かる → 最後の更新内容に関する質問がある時、相手が分かる


## 全てのドキュメントで個別に定めておくべきルール

- 記載範囲
  - そのドキュメントに何を記載して、何を記載しないか、を明記する
  - (一見関連しそうだが) そのドキュメントに記載しないことにした事柄については、代わりにどこで説明しているか、関連ドキュメント名やリンクを記しておく
      - ex. この画面仕様書は、「○○」画面の仕様を記す。「○○」画面と対になる「○○」帳票の仕様については記載しない別途「○○帳票仕様書」を参照のこと
- 更新の要領
  - そのドキュメントをどういうタイミングで、どのように更新して良いか更新時の禁止事項があれば明記する
      - ex. 仕様変更が発生した場合は、当該箇所の旧文言を「更新履歴」シートに転記しておくそのうえで、修正した文言は赤字に設定する
- 削除・凍結の要領
  - そのドキュメントが必要なくなる (ファイルごと削除しても良くなる) タイミングがあれば、それを明記する削除する予定がない場合も、その旨を記載する
      - ex. この「検討事項一覧」資料は、一覧に挙がった内容全てが「要件一覧」もしくは「課題一覧」に転記された後は、不要になる (削除しても良い)
      - ex. この画面仕様書は、改修の度に更新し続けていくため、システム自体が廃止されるまで削除してはならない
  - ファイルごと削除しないまでも、それ以降更新しなくなるタイミングがあれば記載する
      - ex. この「設計課題一覧」は、設計フェーズが完了した時点で凍結し、以降は更新してはならない未完了の課題が残った場合も、本ファイルは更新せず、実装フェーズにて「実装課題一覧」に転記し運用する


## ドキュメント作成で心掛けること

- 読み手に無配慮なモノを残さない・作らない
  - 以下に色々書いてることを抽象化するとこういうこと
  - 読み手に「読解するコスト」をかけさせない文章が、良い文章読む手間を省くために書く手間をかける
- 5W1H を漏れなく記す
  - 一文ごとに、5W1H のどれが記載されていて、どれが抜けているかを確認する
  - 「記載を省略しても良い場合」はないどうしても時制が関係しなかったり、場所に関する情報が存在しない事柄の場合のみ
  - 内容によっては、5W1H にプラスして How Much (コスト) の情報も書いてあると良い
- 理由、経緯を必ず書く
  - 5W1H の中の Why は、特に記載が抜けやすい書こうとするとどうしても文章が長くなるため、面倒臭がって省略しがち
  - それでも省略せず、似たようなことでも、何度でも書くことで、「根拠」を示せる
  - 何を考慮し、どの選択肢をどうして選ばなかったのか、という情報はとても重要うまく共有できていないと、設計時に外した選択肢を、実装担当者が有益だと勘違いして勝手に盛り込んでしまったりする
  - 経緯を記したドキュメントを一つ作って、全ての関連箇所からそのドキュメントへのリンクを貼って周知すると、省力化できる
- 指示語を使わない
  - 「それ」「その時」「上記」などどれだけ文章が長くなってもいいし、何度繰り返し記述することになっても良いので、指示語を使わないことを優先する
  - 「去年」「先週」なども指示語正確な日付を書く
- 表記・表現を揃える
  - 英数字の全角・半角や、同じ単語をひらがな・カタカナ・漢字でデタラメに表記しないこと
      - その単語で検索 (Grep) しても全てがヒットしなくなり、それが影響範囲調査や修正対象調査の時に新たなバグを生む原因になる
  - 同じ意味なのに異なる言葉を使わない
      - ex. 「サブフォルダ」と「子ディレクトリ」など
  - 表記・表現を揃えるためには、予め「辞書」を作り、「採用する単語」「似ているが使わない単語」を明記し、チーム内での表現統一を図る
- 規則性をもたせる
  - フォーマットは一定の範囲で揃える
  - 「システム」を主語に能動態で書くのか、それとも受動態で書くのか、といった体裁も揃える
  - その場しのぎで例外的な書き方をしたりしない
  - 規則を守らせやすくするには：規則の適用範囲を小さく保つ
      - 設計段階で「ドキュメントを書く時のルール」を定めると、テスト仕様書のフォーマットを作り始めた時に、ルールが上手く合わないことが出てきたりする
      - 「全てのドキュメントに適用するルール」を作るのではなく、「設計書で守るべき規則」「テスト仕様書で守るべき規則」という風に、規則の適用範囲を一定の領域に絞ると良い
      - 分割したそれぞれの領域で似たようなルールが存在する時は、なるべく同じ基準にしておきたいが、無理に統一しようとせず、また「共通ルール」といった資料を作らないようにする
- 体言止めで書かない
  - 動詞が不明瞭になり、それが要件の勘違いなどに繋がるため
- 日付は年・西暦から書く
  - 西暦の情報がないと、翌年読んだ時にいつの情報か分からなくなる


## 言葉べからず集

- タイトルに「〜について」を使わない
  - 中にどんなことが書いてあるのか推測できない
  - 記載範囲が広すぎるもっと狭めておかないと「神クラス」ならぬ「神ドキュメント」になる
- 「〜することができる」→「〜できる」で良い
- 「〜ということ」→「こと」の多用を避ける


## テンプレート

分かりやすく、抜け漏れのないドキュメントを効率良く書くためのテンプレートを作りました。以下よりダウンロードして参考にしてください。

- [document-templates : 主に Excel 製のオレオレドキュメントテンプレート集](https://github.com/Neos21/document-templates)
