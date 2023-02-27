import React, { useState } from 'react'

import styles from './styles.module.css'

export default function Md5Generator() {
  const [text, setText] = useState('')
  const [md5, setMd5] = useState('')

  const handleChange = async (e) => {
    setText(e.target.value)
    const salt = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    const encrypted =
      'md5:' + salt + ':' + require('md5')(salt + e.target.value)
    setMd5(encrypted)
  }

  return (
    <section>
      <div>
        <label htmlFor="text">Generate salted md5 hash for</label>
        <input
          type="password"
          id="text"
          onChange={handleChange}
          value={text}
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor="text">md5 generated</label>
        <input value={md5} id="md5" className={styles.input} readonly />
      </div>
    </section>
  )
}
