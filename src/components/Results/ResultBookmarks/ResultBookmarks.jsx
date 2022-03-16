import React from 'react'
import styles from './ResultBookmarks.module.scss'

const ResultBookmarks = ({ value, title, icon, link }) => {
    const codeStyles = {
        Icon: {
            background: icon,
        },
    }

    const classComponent = 'Result-Bookmarks' 

    return (
        <div>
            <a href={`https://${link}`} className={styles[classComponent]}>
                <div className={styles[`${classComponent}__icon`]}>
                    <div
                        className={styles[`${classComponent}__icon-container`]}
                        styles={codeStyles.Icon}
                    >
                        <img
                            className={styles[`${classComponent}__icon-img`]}
                            src={icon}
                            alt={`icon ${value}`}
                        />
                    </div>
                </div>
                <div className={styles[`${classComponent}__text`]}>
                    <span>{title}</span>
                    <span className={styles[`${classComponent}__text-link`]}>
                        {link}
                    </span>
                </div>
            </a>
        </div>
    )
}

export default ResultBookmarks
