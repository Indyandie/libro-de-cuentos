import React from 'react'
import '../styles/Button.less'

export default function Button ( { name, type, id, onBtnClick } ){

return <button 
   className={type ? type : ''} 
   id={id ? id : ''}
   onClick={onBtnClick ? onBtnClick : ''}
>
   {name}
</button> 
}