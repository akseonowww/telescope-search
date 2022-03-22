import React from 'react'
import styles from './Card.module.scss'
import iconOpen from '../../../assets/image/icon-open-card.svg'
import Data from '../../Data/Data'

const Card = ({ value, title, info, icon }) => {
    const classComponent = 'Card'
    let classes = `${styles[`${classComponent}__info`]}`
    const stylesDefault = {
        icon: {
            height: '40px',
            width: '40px',
        },
        container: {
            borderRadius: '100px',
        },
        info: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    }

    const openCard = () => {
        // eslint-disable-next-line no-const-assign
        classes += ` ${styles.active}`
        // console.log((classes += ` ${styles.active}`))
        // stylesDefault.info.whiteSpace = 'wrap'
        // alert(el)
    }

    const wiki = Data.searchEngine[3]

    return (
        <div className={styles[classComponent]}>
            <a href={`https://${wiki.link + title}`} className={classes}>
                <div
                    className={styles[`${classComponent}__icon`]}
                    style={stylesDefault.icon}
                >
                    <div
                        className={styles[`${classComponent}__icon-container`]}
                        style={stylesDefault.container}
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
                    <span
                        className={styles[`${classComponent}__text-info`]}
                        style={stylesDefault.info}
                    >
                        {info}
                    </span>
                </div>
            </a>
            <div className={styles[`${classComponent}__option`]}>
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
