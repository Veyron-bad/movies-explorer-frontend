import React, { useState } from 'react';
import './InfoTooltip.css';
import SuccessIcon from '../../images/SuccessIcon.svg';
// import FailIcon from '../../images/FailIcon.svg';

function InfoTooltip() {
    const [isBthClose, setIsBtnClose] = useState(false);

    const closeInfoTool = () => {
        setIsBtnClose(!isBthClose);
    }
    const setItfoTool = isBthClose ? 'info-tool' : 'info-tool info-tool_hidden';
  return (
    <div className={setItfoTool}>
        <div className='info-tool__content'>
            <button onClick={closeInfoTool} className='info-tool__btn' type='button'/>
            <img className='info-tool__img' src={SuccessIcon} alt='Иконка результата' />
            <h3 className='info-tool__title'>Успешно</h3>
        </div>
    </div>
  )
}

export default InfoTooltip
