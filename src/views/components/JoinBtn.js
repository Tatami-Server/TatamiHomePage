import FlexLink from '../../util/FlexLink';

import Style from '../../style/components/JoinBtn.module.css'

const JoinBtn = () => {

  return (
          <FlexLink href={"https://discord.com/invite/t4YAKKxaq9"}>
            <button className={Style["join-btn"]}>参加はこちらから！</button>
          </FlexLink>
  );
}
export default JoinBtn;