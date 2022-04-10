/* eslint-disable react/no-danger */
import React from 'react'
import './Gropup.scss'

const Gropup = ({ group }) => {
   const classComponent = 'Gropup'

   const handleClick = (el) => {
      console.log(el)
      console.log(el.name)
   }

   return (
      <div>
         <div className={classComponent}>
            <button
               type="button"
               className={`${classComponent}__name`}
               dangerouslySetInnerHTML={{ __html: group.name }}
               label="34"
            />
            {/* {group.name} */}
            {/* </button> */}
            <span>:</span>
            <div className={`${classComponent}__list`}>
               {group.group.map((el) => (
                  <div key={group.group.indexOf(el)}>
                     <button
                        onClick={() => handleClick(el)}
                        type="button"
                        className={`${classComponent}__list-item`}
                     >
                        {el.name}
                        {/* <span dangerouslySetInnerHTML={{ __html: title }} /> */}
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Gropup
