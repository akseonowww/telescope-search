import React from 'react'
import Data from '../Data/Data'
import styles from './Results.module.scss'
import Default from './Default/Default'
import Buttons from './Buttons/Buttons'
import Gropup from './Group/Group'
import Bookmarks from './Bookmarks/Bookmarks'
import Card from './Card/Card'

const Results = ({ result }) => {
    const classComponent = 'Results'
    const { groups } = Data
    const { bookmarks } = Data
    const { cards } = Data

    const search = Data.searchEngine

    return (
        <div>
            <div className={styles[classComponent]}>
                {result ? (
                    <div>
                        <div className={styles[`${classComponent}-Header`]}>
                            <Buttons value={result} />
                        </div>
                        <div className={styles[`${classComponent}-Item`]}>
                            <Default value={result} />
                        </div>
                        <div className={styles[`${classComponent}-Item`]}>
                            <Bookmarks
                                title={result}
                                link={search[0].link + result.toString()}
                                icon={search[0].icon}
                            />
                        </div>
                        {cards[0].card.map((el) => (
                            <div
                                key={cards[0].card.indexOf(el)}
                                className={styles[`${classComponent}-Item`]}
                            >
                                <Card
                                    value={result}
                                    title={el.name}
                                    info={el.info}
                                    icon={el.img}
                                />
                            </div>
                        ))}
                        {groups.map((el) => (
                            <div
                                key={groups.indexOf(el)}
                                className={styles[`${classComponent}-Item`]}
                            >
                                <Gropup group={el} />
                            </div>
                        ))}
                        {bookmarks.map((el) => (
                            <div
                                key={bookmarks.indexOf(el)}
                                className={styles[`${classComponent}-Item`]}
                            >
                                <Bookmarks
                                    value={result}
                                    title={el.name}
                                    link={el.link}
                                    icon={el.icon}
                                />
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
