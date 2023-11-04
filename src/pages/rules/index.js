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
        <Heading heading="サーバー利用規約"/>
        <Subtitle subtitle="1. 全体ルール"/>
        <div className='subtitle-content'>
          <p>
          1 - 迷惑行為はしないでください。（自分がされて嫌なことはしないでください。）<br />
          2 - 攻撃的な言葉・人を傷つける言葉等、他人が不快に感じる発言はしないでください。<br />
          3 - 当サーバー以外の広告・宣伝・勧誘等は行わないでください。個人のアカウントも同様です。<br />
          4 - 個人情報は、各自で管理してください。<br />
          5 - 特定の人物や団体を傷つける行為はしないでください。<br />
          6 - 意図的に運営のモチベーションを下げる行為をしないでください。<br />
          7 - バグ・不具合を発見した方は直ちにご連絡ください。知っていながら悪用していることが発覚した場合は処罰対象になります。<br />
          8 - その他、運営が不適切と考える行為にはペナルティが発行されます。<br />
          </p>
        </div>
        
        <Subtitle subtitle="2. 配信・動画化のルール"/>
        <div className='subtitle-content'>
          <p>
          1 - このサーバーの配信や動画の撮影を希望する方は、 <span className='green'>#⁠⁠┣配信・動画化の仕方について（畳公式Discord）</span> チャンネルをお読みの上、配信/動画化申請フォームから申請をしてください。<br />
          2 - ただし畳サーバーや特定個人を攻撃したり過剰に非難するような内容はお控えください。<br />
          3 - 配信に他プレイヤーの声を乗せたい場合は🎦マークがついたチャンネルを使用してください。<br />
          </p>
        </div>

        <UpArrow/>
    </div>
  );
}
export default Rules;