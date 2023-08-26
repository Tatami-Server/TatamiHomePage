### ページ作成
　〇1. App.jsのルーティングをもとにディレクトリとファイルを作成する 
    - (例1）```path={`/event/`}```となっていたら、pages/eventディレクトリを作成後、その中に`index.js`を作成し、elementの中身を貼り付ける
    - (例1）```path={`/event/:id`}```となっていたら、pages/eventディレクトリを作成し、その中に`[id].js`を作成し、elementの中身を貼り付ける

　〇2. ファイル内のパスを修正する ページだけじゃない
    - vscode置換機能で`(\.\./)+`を検索欄に貼り付け、置換後を`@`に設定し全て置換

　〇3. Linkの置換　ページだけじゃない
    - aタグなど、既存のリンクを表現している`FlexLink`を`Link`に置換
    - その上で、`import Link from '@util/Link'`となっているところを`import Link from 'next/link'`に置換

　〇4. ヘッダーフッター削除
    - `<Header/>`や`<Footer />`は削除する

〇　6. imgタグの置換　ページだけじゃない
    - 既存の`img`や`Image`タグに関しては全て`Image`で統一し、`import Image next/image`で統一する

　〇7. mainタグも消す


### 各ファイル移行
〇- src/imagesは削除し、代わりにpublic/imagesを使用する
〇- `music`ディレクトリも`public/`に移行し、ちゃんと参照できるようにパス等を修正しておく