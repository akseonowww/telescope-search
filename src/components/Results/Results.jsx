import React from 'react'
import Data from '../Data/Data'
import styles from './Results.module.scss'
import ResultDefault from './ResultDefault/ResultDefault'
import ResultButtons from './ResultButtons/ResultButtons'
import ResultGropup from './ResultGroup/ResultGroup'

const Results = ({ result }) => {
    const classComponent = 'Results'
    const bookamrks = Data.bookmarks
    const {groups} = Data

    return (
        <div>
            <div className={styles[classComponent]}>
                {result ? (
                    <ul>
                        <li className={styles[`${classComponent}-Header`]}>
                            <ResultButtons />
                        </li>
                        <li className={styles[`${classComponent}-Item`]}>
                            <ResultDefault value={result} />
                        </li>
                    </ul>
                ) : (
                    ''
                )}
                <div className={styles['Results-footer']}>
                    <span>Результаты: {3 + bookamrks.length}</span>
                    <ul>
                        <li>
                            <a href="/">Яндекс</a>
                        </li>
                        <li>
                            <a href="/">Google</a>
                        </li>
                        <li>
                            <a href="/">DuckDuckGo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Results
