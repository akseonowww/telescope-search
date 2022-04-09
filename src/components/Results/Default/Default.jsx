import React from 'react'
import Data from '../../../store/Data'
import styles from './Default.module.scss'

const Default = ({ value }) => (
    <div>
        <a
            href={`https://${Data.searchEngine[0].link + value}`}
            className={styles.Default}
        >
            <div className={styles.Default__icon}>
                <div className={styles['Default__icon-default']}> </div>
            </div>
            <div className={styles['Default__text-default']}>
                {/* <strong>{value || 'Введите текст'}</strong> */}
                {value ? (
                    <strong>{value}</strong>
                ) : (
                    <span>Я слушаю вас...</span>
                )}
            </div>
        </a>
    </div>
)

export default Default
