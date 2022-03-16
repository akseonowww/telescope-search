import React, { useState } from 'react'
import Result from '../Results/Results'
import styles from './Search.module.scss'
import iconX from '../../assets/image/icon-x.svg'
import Data from '../Data/Data'

const Search = () => {
    const [value, setValue] = useState()
    const yandex = Data.searchEngine[0]
    const defaultLink = `https://${yandex.link + value}`

    const handleKeyPress = (target) => {
        if (target.charCode === 13) {
            window.open(defaultLink)
        }
    }

    const onSubmitHandler = () => {
        setValue('')
    }

    return (
        <div className={styles['Search-Content']}>
            <form className={styles.Form}>
                <div className={styles.Search}>
                    <input
                        className={styles['Search-Input']}
                        placeholder="Find your star!"
                        onKeyPress={handleKeyPress}
                        onChange={(el) => setValue(el.target.value)}
                        value={value || ''}
                    />
                    <div className={styles['Search-Buttons']}>
                        <button type="submit" onClick={onSubmitHandler}>
                            <img src={iconX} alt="icon delete" />
                        </button>
                        <span className={styles.line} />
                        <button type="submit">
                            <img
                                src={yandex.icon}
                                alt="Search engine default"
                            />
                        </button>
                    </div>
                </div>
                <div className={styles['Result-List']}>
                    <Result result={value} />
                </div>
            </form>
        </div>
    )
}

export default Search
