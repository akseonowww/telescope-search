/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsXCircle } from 'react-icons/bs'

import Data from '../../../store/data'
import './Buttons.scss'

const Buttons = ({ value, data = Data }) => {
   const classComponent = 'Buttons'
   const [statusModal, setStatusModal] = useState()
   const [newName, setNewName] = useState()
   const [newURL, setNewURL] = useState('https://')

   const dispatch = useDispatch()
   const buttons = useSelector((state) => state.buttons.buttonsCollections)

   const createBtn = (name, url) => {
      setStatusModal(!statusModal)
      dispatch({
         type: 'CREATE_BTN',
         payload: {
            name,
            url,
         },
      })
   }
   // const deleteBtn = (button) => {
   //    console.log(button)
   //    dispatch({ type: 'DELETE_BTN', payload: button.id })
   // }

   // for (let i = 0; i < data.resultButtons.length; i+=1) {
   // createBtn(data.resultButtons[i].name)
   // }

   return (
      <div className={classComponent}>
         <div className={`${classComponent}__list`}>
            {buttons.map((el, index) => (
               <a
                  href={`${el.url + value}`}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  // onClick={() => deleteBtn(el)}
                  // onClick={() => console.log(el.id, buttons)}
                  // type="button"
                  className={`${classComponent}__item`}
               >
                  {el.name}
               </a>
            ))}
            <button
               onClick={() => setStatusModal(!statusModal)}
               type="button"
               className={`${classComponent}__add`}
            >
               +
            </button>
         </div>
         {statusModal ? (
            <div className="Buttons-Modal">
               <div className="Buttons-Modal__Header">
                  <h2>Добавить новый поисковик</h2>
                  <button
                     className="Buttons-Modal__Close"
                     type="button"
                     onClick={() => setStatusModal(!statusModal)}
                  >
                     <BsXCircle />
                  </button>
               </div>
               <div className="Buttons-Modal__Content">
                  <div className="Buttons-Modal__Content-Input">
                     <label>Название</label>
                     <input
                        type="text"
                        onChange={(el) => setNewName(el.target.value)}
                        value={newName || ''}
                     />
                  </div>
                  <div className="Buttons-Modal__Content-Input">
                     <label>Ссылка</label>
                     <input
                        type="text"
                        onChange={(el) => setNewURL(el.target.value)}
                        value={newURL || ''}
                     />
                  </div>
               </div>
               <button
                  type="button"
                  className="Buttons-Modal__Add"
                  onClick={() => createBtn(newName, newURL)}
               >
                  Добавить
               </button>
            </div>
         ) : (
            ''
         )}
      </div>
   )
}

export default Buttons
