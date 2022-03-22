import React from 'react'
import styles from './Gropup.module.scss'

const Gropup = ({
    group = { name: 'Site', group: [{ name: 1, group: [] }] },
}) => {
    const classComponent = 'Gropup'

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
                        <div key={group.group.indexOf(el)}>
                            <button
                                onClick={() => handleClick(el)}
                                type="button"
                                className={
                                    styles[`${classComponent}__list-item`]
                                }
                            >
                                {el.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gropup