import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ResultButtons.module.scss'

const ResultButtons = () => {
    const classComponent = 'Result-Buttons'

    const dispatch = useDispatch()
    const buttons = useSelector((state) => state.resultButtons)

    const createBtn = (newName) => {
        dispatch({ type: 'CREATE_BTN', payload: newName })
    }
    const deleteBtn = (btnID) => {
        dispatch({ type: 'DELETE_BTN', payload: btnID })
    }

    return (
        <div>
            <div className={styles[classComponent]}>
                <div className={styles[`${classComponent}__list`]}>
                    <button
                        onClick={() => createBtn('Кнопка')}
                        type="button"
                        className={[styles[`${classComponent}__add`]]}
                    >
                        +
                    </button>
                    {buttons.map((el) => (
                        <button
                            key={el.id}
                            // onClick={() => deleteBtn(buttons[el.id])}
                            onClick={() => console.log(buttons[el.id])}
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

export default ResultButtons
