### ページ作成
1. App.jsのルーティングをもとにディレクトリとファイルを作成する
    - (例1）```path={`/event/`}```となっていたら、pages/eventディレクトリを作成後、その中に`index.js`を作成し、elementの中身を貼り付ける
    - (例1）```path={`/event/:id`}```となっていたら、pages/eventディレクトリを作成し、その中に`[id].js`を作成し、elementの中身を貼り付ける

2. ファイル内のパスを修正する
    - vscode置換機能で`(\.\./)+`を検索欄に貼り付け、置換後を`@`に設定し全て置換

3. Linkの置換
    - aタグなど、既存のリンクを表現している`FlexLink`を`Link`に置換
    - その上で、`import Link from '@util/Link'`となっているところを`import Link from 'next/link'`に置換

4. ヘッダーフッター削除
    - `<Header/>`や`<Footer />`は削除する

5. 画像の置換
    - 画像の`import`は不要になったので、直接srcにパスを入れる(`images/`)
        - ただし、管理画面で編集可能にする予定の部分は一旦そのままでよい（イベントなど）

6. imgタグの置換
    - 既存の`img`や`Image`タグに関しては全て`Image`で統一し、`import Image next/image`で統一する
    - リモートの画像を使う場合(or ローカルがうまくいかない場合)
        -`fill`と`objectFit='contain'`属性をを入れる
        - Imageタグをdivでラップする
        - Imageにクラスを適用してた場合はdivのほうに適用する
        - これでうまく行かない場合は、widthかheightをスタイルで指定して、指定していない方を100%にする


### 各ファイル移行
- src/imagesは削除し、代わりにpublic/imagesを使用する
    - `@images/~`となっているものについてはimportを削除し、直接srcに`images/~`を入れる
- `music`ディレクトリも`public/`に移行し、ちゃんと参照できるようにパス等を修正しておく