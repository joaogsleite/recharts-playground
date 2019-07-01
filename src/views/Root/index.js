import React from 'react'

import Chart from 'components/Chart'

import style from './style.module.css'

function Root() {
  return (
    <div className={style.rootContainer}>
      <Chart />
    </div>
  );
}

export default Root
