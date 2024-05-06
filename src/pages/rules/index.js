// コンポーネントインポート
import Heading from '@components/Heading';
import Subtitle from '@components/Subtitle';
import UpArrow from '@components/UpArrow';
import Igusa from '@components/Igusa';
// 画像インポート
import tatami from '/public/images/Igusa.images/sister1.png';

const Rules = () => {
  return (
    <div>
      <Heading heading="サーバー利用規約" />
      <Subtitle subtitle="1. 全体ルール" />
      <div className='subtitle-content'>
        <p>
          1 - 迷惑行為はしないでください。（自分がされて嫌なことはしないでください。）<br />
          2 - 攻撃的な言葉・人を傷つける言葉等、他人が不快に感じる発言はしないでください。<br />
          3 - 当サーバー以外の広告・宣伝・勧誘等は行わないでください。個人のアカウントも同様です。<br />
          4 - 個人情報は、各自で管理してください。<br />
          5 - 特定の人物や団体を傷つける行為はしないでください。<br />
          6 - 意図的に運営のモチベーションを下げる行為をしないでください。<br />
          7 - バグ・不具合を発見した方は直ちにご連絡ください。知っていながら悪用していることが発覚した場合は処罰対象になります。<br />
          8 - その他、運営が不適切と考える行為にはペナルティが発行されます。
        </p>
      </div>

      <Subtitle subtitle="2. 配信・動画化のルール" />
      <div className='subtitle-content'>
      <div>
  <p>畳サーバーのコンテンツを動画化・配信する際は、以下のガイドラインを必ず守ってください。<br />
    守っていただける場合に限り、畳サーバーの配信や動画化が申請不要の自由となります。<br />
  </p>
  <br />
  <h4>1.動画配信サイトについて</h4>

  <p>
    1 - 動画化や配信は、以下のサイトでのみ行ってください。<br />
    2 - 記載されていないサイトで活動したい場合は、Discordサーバーのチケットで申請してください。<br />
  </p>
  <ul>
    <li>YouTube</li>
    <li>Twitch</li>
    <li>X（旧Twitter）</li>
  </ul>

  <br />
  <h4>2.切り抜き等</h4>
  <p>
    1 - 当サーバーのコンテンツの動画化や配信をした場合における切り抜きは、無断で編集及び当サーバーのSNS（YoutubeやTwitter、Discordなど） にアップロードする場合がございます。あらかじめご承知おきください。<br />
  </p>

  <br />
  <h4>3.注意事項、その他</h4>
  <p>
    1 - 「#畳サーバー」を必ずタグ等に記載してください。<br />
    2 - 畳サーバーホームページ のリンクを必ず概要欄等に記載してください。<br />
    → https://tatamiserver.com<br />
    3 - 可能なら、#動画投稿-配信者 などに動画・配信のリンクを載せていただけると運営が喜びます！<br />
    4 - 当サーバーの不利益につながる行為や発言等は禁止です。<br />
    5 - #利用規約 を守ってください。<br />
  </p>

  <br />
  <h4>4.認定配信者について</h4>
  <p>
    1 - 認定配信者として認められるには、原則 当サーバー独自の基準を満たしている必要があります。<br />
    （基準は現在作成中のため、認定配信者の申請は受け付けておりません。）<br />
    2 - 認定配信者には一定の優遇を行うことがあります。（以下は具体例であり、実際はこの限りではありません。）<br />
  </p>
  <ul>
    <li>当サーバー主催の企画等への参加優遇</li>
    <li>α版やβ版などの先行公開への参加優遇</li>
    <li>Discordでの専用ロール付与</li>
  </ul>
<p>
    3 - 運営が不適格と判断した者は、認定配信者を予告なく剥奪することがあります。<br />
  </p>
</div>

      </div>

      <Subtitle subtitle="3. Minecraft共通ルール" />
      <div className='subtitle-content'>
        <p>
          1 - 当サーバーはクロスプレイ対応ですが、 PS4,PS5からの参加はできません。(SONY&lquotPlayStation Network&lquot利用規約に基づく)<br />
          2 - 第三者にアドレスとポート番号を公開しないでください。<br />
          3 - チートは行わないでください。<br />
          4 - サーバーに過度に負荷をかける行為はしないでください。<br />
          5 - ゲームバランスを崩壊させる行為はしないでください。<br />
          6 - ゲームの不具合を利用したプレイはしないでください。<br />
          7 - 外部のプログラムを利用したキャラクターの操作はしないでください。連打ツール等もこれに含みます。<br />
          8 - 透明スキンや公序良俗に反するスキンは使用しないでください。<br />
          9 - MT(リアルマネートレード)を禁止します。<br />
          10 - 非正規ルートからのログインを禁止します。<br />
          11 - 運営の指示には従うようにしてください。
        </p>
      </div>

      <Subtitle subtitle="4. イベントサーバー共通ルール" />
      <div className='subtitle-content'>
        <p>
          1 - あらかじめイベントのルールや注意事項を確認の上参加してください。<br />
          2 - 人数制限付きのイベントは、その人気の程度によりサブスクライバー限定となる可能性があります。予めご了承下さい。
        </p>
      </div>

      <Subtitle subtitle="5. 生活・資源ワールド共通ルール" />
      <div className='subtitle-content'>
        <p>
          1 - ［TNT］や［透明化のポーション］など、トラブルの原因になるようなアイテムの作成や使用はしないでください。<br />
          2 - ［エンダーパール］や［火打ち石と打ち金］は使用禁止になっております。(クラフトは可能)<br />
          3 - ネザーゲート、エンドポータルの作成及び使用はしないでください。<br />
          4 - お互いの同意がないプレイヤーキルはしないでください。<br />
          5 - チェスト、看板、額縁、MOB、ホッパー等の過剰設置、大量のアイテム化等をしないでください。<br />
          5-1 - ホッパーは1軒につき10個程度まで、倉庫等にはなるべく樽を使用する などのご協力をお願いします。<br />
          6 - 個人のチェストショップは生活ワールド、リセット無し資源ワールドに設置してください。<br />
          6-1 - 買占めや転売をされたくない場合は「一人2stまで!」や「転売しないでください!」のような看板を立てるようにしてください。<br />
          7 - ビーコンは、使用時のみONにして、使用後はOFFにしてください。<br />
          8 - ウィザーの召喚はしないでください。
        </p>
      </div>

      <Subtitle subtitle="6. 生活ワールド内ルール" />
      <div className='subtitle-content'>
        <p>
          1 - 生活ワールドでの資源採集は原則禁止です。<br />
          2 - 節度ある建築をしてください。(景観上問題なし、公序良俗に反さないなど)<br />
          3 - 土地には「日付、プレイヤー名、建築中 or 完成、入室OK or 入室NG」が書かれた看板を記載してください。<br />
          3-1 - 建築中のまま1か月進展が見られない場合は取り壊す可能性があります。<br />
          3-2 - 完成済みであっても6か月以上ログインが見られない場合は取り壊す可能性があります。<br />
          4 - 他人のチェストの中身を盗んだり、他人の建築物を壊したりしないで下さい。たとえ保護されていなくても同様です。<br />
          5 - 自動釣り堀装置の作成は禁止です。<br />
          6 - 生活ワールドでのMOBの繁殖はしないでください。<br />
          7 - 所有できるMOBの数は一軒につき5匹までとします。<br />
          8 - 共有倉庫からの大量持ち出し、公式ショップに転売をしないでください。
        </p>
      </div>

      <Subtitle subtitle="7. 資源ワールド内ルール" />
      <div className='subtitle-content'>
        <p>
          1 - 資源採集は資源ワールドで行ってください。<br />
          2 - 資源ワールドで私的利用となる土地を持たないでください。共有の倉庫・畑など、全鯖民が共有で使える場合は建築して構いません。<br />
          3 - 資源ワールドの建築物について、改善のための増築や改修は構いませんが、破壊や荒らし目的の行動は迷惑行為とみなします。<br />
          4 - チャンク掘りをする際は周りを柵で囲んでください。チェストロックの解除を忘れずにしてください。<br />
          5 - トラップタワーは資源ワールドで作成してください。(ただし定期的に資源リセットがあるのでご注意ください。)<br />
          6 - トラップタワーは使用時のみON、使用後はOFFにしてください。<br />
          7 - 放置によるお金稼ぎやアイテム回収の自動化はゲームバランスに影響が出るため、放置kickを採用しています。放置kickをかわすような水流装置の作成は禁止です。<br />
          8 - ガチャで引き当てたスポーンエッグをモンスタースポナーに使用する行為は禁止です。
        </p>
      </div>

      <br />
      <p>2023年11月05日 公布</p>
      <p>2023年11月06日 改定（5,6,7条の各項に番号を振り分け）</p>
      <UpArrow />
    </div>
  );
}
export default Rules;