import { IconContext } from 'react-icons'
import {IoIosArrowUp} from 'react-icons/io'


import '../../style/components/UpArrow.css'

const UpArrow = () => {
  return (
    <div className='arrow-icon-container'>
      <div className="arrow-icon">
      <IconContext.Provider value={{ color: '#67966a', size: '70px' }}>
        <IoIosArrowUp/>
      </IconContext.Provider>
      </div>
    </div>
  );
}
export default UpArrow;