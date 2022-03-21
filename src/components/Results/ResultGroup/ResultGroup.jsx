import React from 'react'
import styles from './ResultGropup.module.scss'

const ResultGropup = ({
    group = { name: 'Site', group: [{ name: 1, group: [] }] },
}) => {
    const classComponent = 'Result-Gropup'

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
                    {group.group.map((element) => (
                        <div key={group.group.indexOf(element)}>
                            <button type="button">{element.name}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ResultGropup
