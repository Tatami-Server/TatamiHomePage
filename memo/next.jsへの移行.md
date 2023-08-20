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
    - 画像の`import`は不要になったので、直接srcにパスを入れる
        - ただし、管理画面で編集可能にする予定の部分は一旦そのままでよい（イベントなど）

6. imgタグの置換
    - 既存の`img`や`Image`タグに関しては全て`Image`で統一し、`import Image next/image`で統一する
    - 画像サイズが決まっている場合はwidthとｈeightを入れる
    - 画像サイズが分からない（場合によって変わる）場合
        -`fill`と`objectFit='contain'`属性をを入れる
        - Imageタグをdivでラップする
        - Imageにクラスを適用してた場合はdivのほうに適用する
        - これでうまく行かない場合は、widthかheightをスタイルで指定して、指定していない方を100%にする