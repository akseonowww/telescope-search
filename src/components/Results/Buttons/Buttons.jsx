import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Buttons.scss'

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
      console.log(button)
      dispatch({ type: 'DELETE_BTN', payload: button.id })
   }

   return (
      <div>
         <div className={classComponent}>
            <div className={`${classComponent}__list`}>
               <button
                  onClick={() => createBtn(value)}
                  type="button"
                  className={`${classComponent}__add`}
               >
                  +
               </button>
               {buttons.map((el, index) => (
                  <button
                     // eslint-disable-next-line react/no-array-index-key
                     key={index}
                     onClick={() => deleteBtn(el)}
                     // onClick={() => console.log(el.id, buttons)}
                     type="button"
                     className={`${classComponent}__item`}
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
