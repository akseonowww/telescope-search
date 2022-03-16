import React from 'react'
import Data from '../../Data/Data'
import styles from './ResultDefault.module.scss'

const ResultDefault = ({ value }) => (
    <div>
        <a
            href={`https://${Data.searchEngine[0].link + value}`}
            className={styles[`Result-Default`]}
        >
            <div className={styles['Result-Default__icon']}>
                <div className={styles['Result-Default__icon-default']}> </div>
            </div>
            <div className={styles['Result-Default__text-default']}>
                <span>{value}</span>
            </div>
        </a>
    </div>
)

export default ResultDefault
