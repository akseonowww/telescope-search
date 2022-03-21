import React from 'react'
import styles from './ResultGropup.module.scss'

const ResultGropup = ({
    group = { name: 'Site', group: [{ name: 1, group: [] }] },
}) => {
    const classComponent = 'Result-Gropup'

    const handleClick = (el) => {
        console.log(el.name)

        console.log(el.group[0].group[0].group)
    }

    return (
        <div>
            <div className={styles[classComponent]}>
                <button
                    type="button"
                    className={styles[`${classComponent}__name`]}
                >
                    {group.name}
                </button>
                <span>:</span>
                <div className={styles[`${classComponent}__list`]}>
                    {group.group.map((el) => (
                        <button
                            index={el.id}
                            onClick={() => handleClick(el)}
                            type="button"
                            className={styles[`${classComponent}__list-item`]}
                        >
                            {el.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResultGropup
