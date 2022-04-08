import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Buttons.module.scss'

const Buttons = ({ value }) => {
   const classComponent = 'Buttons'

   const dispatch = useDispatch()
   const buttons = useSelector((state) => state.buttons.buttonsCollections)

   const createBtn = (button) => {
      dispatch({
         type: 'CREATE_BTN',
         payload: button,
      })
   }
   const deleteBtn = (button) => {
      dispatch({ type: 'DELETE_BTN', payload: button })
   }

   return (
      <div>
         <div className={styles[classComponent]}>
            <div className={styles[`${classComponent}__list`]}>
               <button
                  onClick={() => createBtn(value)}
                  type="button"
                  className={[styles[`${classComponent}__add`]]}
               >
                  +
               </button>
               {buttons.map((el, index) => (
                  <button
                     // eslint-disable-next-line react/no-array-index-key
                     key={index}
                     // onClick={() => deleteBtn(buttons[el.id])}
                     onClick={() => console.log(buttons[el.id], buttons)}
                     type="button"
                     className={styles[`${classComponent}__item`]}
                  >
                     {el.name}
                  </button>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Buttons
