import React from 'react'
import Data from '../../Data/Data'
import styles from './ResultButtons.module.scss'

const ResultButtons = () => {
    const classComponent = 'Result-Buttons'
    const buttonName = Data.resultButtons

    return (
        <div>
            <div className={styles[classComponent]}>
                <button
                    type="submit"
                    className={[styles[`${classComponent}__item`]]}
                >
                    {buttonName[0].name}
                </button>
                <button type="submit" className={[styles[`${classComponent}__item`]]}>
                    {buttonName[1].name}
                </button>
                <button
                    type="submit"
                    className={[styles[`${classComponent}__add`]]}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default ResultButtons
