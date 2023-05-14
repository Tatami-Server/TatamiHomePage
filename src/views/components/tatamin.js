import Style from '../../style/components/tatamin.module.css';

import tatamin from '../../images/tatamin.images/sister1.png';
import tataminSister from '../../images/tatamin.images/sister2.png';
import tatamiMaru from '../../images/tatamin.images/tatamimaru.png';

const Tatamin = () => {

  return (
    <div>
      <div className={Style['tatami-maru']}>
        <img src={tatamiMaru} />
      </div>

    </div>
  );
};

export default Tatamin;