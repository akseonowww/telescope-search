import React from 'react'
import Data from '../Data/Data'
import styles from './Results.module.scss'
import ResultDefault from './ResultDefault/ResultDefault'
import ResultButtons from './ResultButtons/ResultButtons'
import ResultGropup from './ResultGroup/ResultGroup'
import ResultBookmarks from './ResultBookmarks/ResultBookmarks'
import ResultCard from './ResultCard/ResultCard'

const Results = ({ result }) => {
    const classComponent = 'Results'
    const { groups } = Data
    const { authors } = Data
    const search = Data.searchEngine

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
                        <li className={styles[`${classComponent}-Item`]}>
                            <ResultBookmarks
                                title={result}
                                link={search[0].link + result.toString()}
                                icon={search[0].icon}
                            />
                        </li>
                        <li className={styles[`${classComponent}-Item`]}>
                            <ResultGropup group={groups[0]} />
                        </li>
                        <li className={styles[`${classComponent}-Item`]}>
                            <ResultCard
                                value={result}
                                title={authors[0].name}
                                icon={authors[0].img}
                                info={authors[0].info}
                            />
                        </li>
                    </ul>
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
