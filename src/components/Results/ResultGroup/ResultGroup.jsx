import React from 'react'
import styles from './ResultGropup.module.scss'

const ResultGropup = ({ group }) => {
    const classComponent = 'Result-Gropup'
    // const group = group

    // const data = group.group

    return (
        <div>
            <div className={styles[classComponent]}>
                <button type="submit" className={styles[`${classComponent}__name`]}>
                    {group.name}
                </button>
                <span>:</span>
                <div className={styles[`${classComponent}__list`]}>
                    {group.group.map((element) => (
                        <div key={group.group.indexOf(element)}>
                            <button type="submit" >
                            {element.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResultGropup
