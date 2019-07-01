import React, { memo } from 'react'

import style from './style.module.scss'

function Container({ children }) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default memo(Container)
