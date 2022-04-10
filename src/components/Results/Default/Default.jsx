import React from 'react'
import Data from '../../../store/Data.json'
import './Default.scss'

const Default = ({ value }) => (
   <div>
      <a
         href={`https://${Data.searchEngine[0].link + value}`}
         className="Default"
      >
         <div className="Default__icon">
            <div className="Default__icon-default"> </div>
         </div>
         <div className="Default__text-default">
            {/* <strong>{value || 'Введите текст'}</strong> */}
            {value ? <strong>{value}</strong> : <span>Я слушаю вас...</span>}
         </div>
      </a>
   </div>
)

export default Default
