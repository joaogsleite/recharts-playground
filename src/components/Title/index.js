import React, { memo } from 'react'

import style from './style.module.scss'

function Title({ children }) {
  return (
    <h1 className={style.title}>{children}</h1>
  )
}

export default memo(Title)
