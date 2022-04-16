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

   const [statusBtn, setStatusBtn] = useState(false)

   const handleClick = () => {
      setStatusBtn(!statusBtn)
   }

   return (
      <div className={classComponent}>
         <div className={`${classComponent}-Menu`}>
            <button
               type="button"
               className={`${classComponent}__Name`}
               dangerouslySetInnerHTML={{ __html: groups.name }}
               label="34"
            />
            <span>:</span>
            <div className={`${classComponent}__List`}>
               {groups.group.map((el, index) => (
                  <div key={`${index}-List-Item`}>
                     <button
                        onClick={() => handleClick(el.id)}
                        type="button"
                        className={`${classComponent}__List-item`}
                     >
                        {el.name}
                     </button>
                  </div>
               ))}
            </div>
         </div>
         <div className={`${classComponent}-Content`}>
            {groups.group.map((el, index) => (
               <div
                  key={`${index}-Item`}
                  className={`${classComponent}-Content__Item ${
                     statusBtn ? `Group-Active ${el.id}` : ''
                  }`}
               >
                  <Article heading={el.name} content={el.content} />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Gropup
