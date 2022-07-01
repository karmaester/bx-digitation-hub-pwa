import React, { useState } from 'react'
import styles from '../styles/Table.module.scss'

const columns = ["Item", "OS", "EV-EX"]

const Table = ({ data }: any) => {

    return (
        <div className={styles.tableContainer}>
            <table>
                <tr>
                    {columns.map(item => <th>{item}</th>)}
                </tr>
                {data.map((item, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{item.os}</td>
                        <td>{item['ev-ex']}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Table