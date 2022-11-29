import {BsPlusLg} from 'react-icons/bs'
import React, { useState } from 'react';
import HelperStyle from '../../style/pages/Helpre.module.css';
import { IconContext } from 'react-icons';
  
const QuestionAccordion = ({question, answer}) => {
  
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  return (
    <div className={HelperStyle["QandA-container"]}>
      <div onClick={toggle} className={HelperStyle["question-container"]}>
        <div className={HelperStyle["q-icon"]}>Q</div>
        <p className={HelperStyle.question}>{question}</p>
        <IconContext.Provider value={{ color: '#436644', size: '20px' }}>
          <BsPlusLg className={open? HelperStyle.rotate : HelperStyle["plus-icon"]}/>
        </IconContext.Provider>
      </div>
      <div className={`${HelperStyle["answer-container"]} ${open? HelperStyle.isOpen : HelperStyle.isClose}`}>
        <div className={HelperStyle["a-icon"]}>A</div>
        <p className={HelperStyle.answer}>{answer}</p>
      </div>
    </div>
  );
}
export default QuestionAccordion;