/* eslint-disable react/no-danger */
import React from 'react'
import styles from './Gropup.module.scss'

const Gropup = ({ group }) => {
   const classComponent = 'Gropup'

   const handleClick = (el) => {
      console.log(el)
      console.log(el.name)
   }

   return (
      <div>
         <div className={styles[classComponent]}>
            <button
               type="button"
               className={styles[`${classComponent}__name`]}
               dangerouslySetInnerHTML={{ __html: group.name }}
               label='34'
            />
            {/* {group.name} */}
            {/* </button> */}
            <span>:</span>
            <div className={styles[`${classComponent}__list`]}>
               {group.group.map((el) => (
                  <div key={group.group.indexOf(el)}>
                     <button
                        onClick={() => handleClick(el)}
                        type="button"
                        className={styles[`${classComponent}__list-item`]}
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
