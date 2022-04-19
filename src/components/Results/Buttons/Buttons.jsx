/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsXCircle } from 'react-icons/bs'
import './Buttons.scss'

const Buttons = ({ value }) => {
   const classComponent = 'Buttons'
   const [statusModal, setStatusModal] = useState()
   const [newName, setNewName] = useState(value)
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

   return (
      <div className={classComponent}>
         <div className={`${classComponent}__list`}>
            <button
               onClick={() => setStatusModal(!statusModal)}
               type="button"
               className={`${classComponent}__add`}
            >
               +
            </button>
            {buttons.map((el, index) => (
               <a
                  href={`${el.url + value}`}
                  key={index}
                  className={`${classComponent}__item`}
               >
                  {el.name}
               </a>
            ))}
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
                     <label>
                        <div>Название:</div>
                        <input
                           type="text"
                           onChange={(el) => setNewName(el.target.value)}
                           value={newName || ''}
                        />
                     </label>
                  </div>
                  <div className="Buttons-Modal__Content-Input">
                     <label>
                        <div>Ссылка:</div>
                        <input
                           type="text"
                           onChange={(el) => setNewURL(el.target.value)}
                           value={newURL || ''}
                        />
                     </label>
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
