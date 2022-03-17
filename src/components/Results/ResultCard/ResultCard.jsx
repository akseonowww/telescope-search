import React from 'react'
import styles from './ResultCard.module.scss'
import iconOpen from '../../../assets/image/icon-open-card.svg'
import Data from '../../Data/Data'

const ResultCard = ({ value, title, icon, info }) => {
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

    const newStylesDefault = () => {
        // eslint-disable-next-line no-param-reassign
        // el.info.whiteSpace = 'wrap'
        // alert(el)
    }

    const wiki = Data.searchEngine[3]

    const classComponent = 'Result-Card'

    return (
        <div>
            <a href={`https://${info}`} className={styles[classComponent]}>
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
                <div className={styles[`${classComponent}__option`]}>
                    <a
                        className={styles[`${classComponent}__option-btn`]}
                        href={`https://${wiki.link + title}`}
                    >
                        <div
                            className={
                                styles[`${classComponent}__option-btn__img`]
                            }
                        >
                            <img src={wiki.icon} alt="icon wikipedia" />
                        </div>
                        Википедея
                    </a>
                    <button
                        className={styles[`${classComponent}__option-open`]}
                        type="button"
                        onClick={() => newStylesDefault()}
                    >
                        <img src={iconOpen} alt="icon open list" />
                    </button>
                </div>
            </a>
        </div>
    )
}

export default ResultCard
