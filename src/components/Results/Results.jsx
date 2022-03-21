import React from 'react'
import Data from '../Data/Data'
import styles from './Results.module.scss'
import ResultDefault from './ResultDefault/ResultDefault'
import ResultButtons from './ResultButtons/ResultButtons'
import ResultGropup from './ResultGroup/ResultGroup'
import ResultBookmarks from './ResultBookmarks/ResultBookmarks'

const Results = ({ result }) => {
    const classComponent = 'Results'
    const { groups } = Data

    const search = Data.searchEngine

    return (
        <div>
            <div className={styles[classComponent]}>
                {result ? (
                    <div>
                        <div className={styles[`${classComponent}-Header`]}>
                            <ResultButtons />
                        </div>
                        <div className={styles[`${classComponent}-Item`]}>
                            <ResultDefault value={result} />
                        </div>
                        <div className={styles[`${classComponent}-Item`]}>
                            <ResultBookmarks
                                title={result}
                                link={search[0].link + result.toString()}
                                icon={search[0].icon}
                            />
                        </div>
                        {groups.map((el) => (
                            <div
                                className={styles[`${classComponent}-Item`]}
                                key={el.id}
                            >
                                <ResultGropup group={el} />
                            </div>
                        ))}
                    </div>
                ) : (
                    ''
                )}
                <div className={styles['Results-footer']}>
                    <span>Результаты: {5 - 2}</span>
                    <ul>
                        <li>
                            <a href={`https:${search[0].link}${result}`}>
                                Яндекс
                            </a>
                        </li>
                        <li>
                            <a href={`https:${search[1].link}${result}`}>
                                Google
                            </a>
                        </li>
                        <li>
                            <a href={`https:${search[2].link}${result}`}>
                                DuckDuckGo
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Results
