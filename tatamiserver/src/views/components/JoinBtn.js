// コンポーネントインポート
import Link from '../../util/Link';

// 画像インポート
import Style from '../../style/components/JoinBtn.module.css'

const JoinBtn = ({ size }) => {

  const className = `${Style['join-btn']} ${size === 'large' ? Style['join-btn-large'] : Style['join-btn-small']}`;

  return (
    <Link href="https://discord.com/invite/t4YAKKxaq9">
      <button className={className}>参加はこちらから！</button>
    </Link>
  );
};
export default JoinBtn;