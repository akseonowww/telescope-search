/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React, { useState } from 'react'
// import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Data from '../../../store/data'
import Article from '../../Article/Article'

import './Group.scss'

const Gropup = ({ groups = Data.groups }) => {
   const classComponent = 'Group'

   const [statusBtn, setStatusBtn] = useState(-1)

   const handleClick = (el) => {
      el.id === 0 ? console.log(el) : ''
      statusBtn === el.id ? setStatusBtn(-1) : setStatusBtn(el.id)
   }

   return (
      <div className={classComponent}>
         <div className={`${classComponent}-Menu`}>
            <button
               type="button"
               className={`${classComponent}__Name` }
               dangerouslySetInnerHTML={{ __html: groups.name }}
               label="34"
            />
            <span>:</span>
            <div className={`${classComponent}__List`}>
               {groups.group.map((el, index) => (
                  // <div key={`${index}-List`}>
                     <button
                        key={`${index}-list`}
                        onClick={() => handleClick(el)}
                        type="button"
                        className={`${classComponent}__List-Item ${
                           statusBtn === el.id ? `Group-Active__btn` : ''
                        }`}
                     >
                        {el.name}
                     </button>
                  // </div>
               ))}
            </div>
         </div>
         <div className={`${classComponent}-Content`}>
            {groups.group.map((el, index) => (
               <div
                  key={`${index}-Item`}
                  className={`${classComponent}-Content__Item ${
                     statusBtn === el.id ? `Group-Active` : ''
                  }`}
               >
                  <Article heading={el.name} content={`${el.content}`} />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Gropup
