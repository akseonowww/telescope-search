import React from 'react'
import styles from './Bookmarks.module.scss'

const Bookmarks = ({
    value = 'value',
    title = 'Title',
    link = 'link',
    icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Icons8_flat_bookmark.svg/1200px-Icons8_flat_bookmark.svg.png',
}) => {
    const codeStyles = {
        Icon: {
            background: icon,
        },
    }

    const classComponent = 'Bookmarks'

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

export default Bookmarks
