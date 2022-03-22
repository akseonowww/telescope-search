import React, { useState } from 'react'
import styles from './Card.module.scss'
import iconOpen from '../../../assets/image/icon-open-card.svg'
import Data from '../../Data/Data'

const Card = ({ value, title, info, icon }) => {
    const classComponent = 'Card'

    const [isActive, setActive] = useState(false)

    const openCard = () => {
        setActive(!isActive)
    }

    const wiki = Data.searchEngine[3]

    return (
        <div
            className={`${styles[`${classComponent}`]} ${
                isActive ? styles.active : styles.no_active
            }`}
        >
            <a
                href={`https://${wiki.link + title}`}
                className={`${styles[`${classComponent}__info`]}`}
            >
                <div className={styles[`${classComponent}__icon`]}>
                    <div
                        className={styles[`${classComponent}__icon-container`]}
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
                    <span className={styles[`${classComponent}__text-info`]}>
                        {info}
                    </span>
                </div>
            </a>
            <div className={styles[`${classComponent}__option`]}>
                <div className={styles[`${classComponent}__option-btn_hidden`]}>
                    <a
                        className={styles[`${classComponent}__option-btn`]}
                        href={`https://${wiki.link + title}`}
                    >
                        <div
                            className={
                                styles[`${classComponent}__option-btn__img`]
                            }
                        >
                            {/* <img src={wiki.icon} alt="icon wikipedia" /> */}
                        </div>
                        Произведения (826)
                    </a>
                </div>
                <a
                    className={styles[`${classComponent}__option-btn`]}
                    href={`https://${wiki.link + title}`}
                >
                    <div
                        className={styles[`${classComponent}__option-btn__img`]}
                    >
                        <img src={wiki.icon} alt="icon wikipedia" />
                    </div>
                    Википедея
                </a>
                <button
                    className={styles[`${classComponent}__option-open`]}
                    type="button"
                    onClick={() => openCard()}
                >
                    <img src={iconOpen} alt="icon open list" />
                </button>
            </div>
            {/* </a> */}
        </div>
    )
}

export default Card
