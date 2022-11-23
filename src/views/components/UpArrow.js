import { IconContext } from 'react-icons'
import {IoIosArrowUp} from 'react-icons/io'


import UpArrowStyle from '../../style/components/UpArrow.module.css'

const UpArrow = () => {
  return (
    <div className={UpArrowStyle["arrow-icon-container"]}>
      <div className={UpArrowStyle["arrow-icon"]}>
      <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
        <IoIosArrowUp/>
      </IconContext.Provider>
      </div>
    </div>
  );
}
export default UpArrow;