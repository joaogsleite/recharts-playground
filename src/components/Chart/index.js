import React, { memo } from 'react'
import { ComposedChart, ReferenceArea, XAxis, YAxis, Label, Line, Tooltip, ResponsiveContainer } from 'recharts'

const DEFAULT_DATA = [
  { x: 1, y1: 1590, y2: 2 },
  { x: 2, y1: 1208, y2: 5 },
  { x: 3, y1: 1397, y2: 10 },
  { x: 4, y1: 1480, y2: 11 },
  { x: 5, y1: 1020, y2: 15 },
  { x: 6, y1: 500, y2: 12 },
];

const DEFAULT_REFERENCE = [500, 1000]

const CHART_MARGIN = { top: 20, right: 20, bottom: 20, left: 20 }

const tooltipX = (value) => `X : ${value}`
const tooltipY = (value) => [value, 'Y']


export default memo(function Chart (props) {
  const { data = DEFAULT_DATA, reference = DEFAULT_REFERENCE } = props
  const refBottom = Math.min(...reference)
  const refTop = Math.max(...reference)
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <ComposedChart data={data} margin={CHART_MARGIN}>

        <XAxis dataKey="x">
          <Label position="bottom">
            X label
          </Label>
        </XAxis>
        <YAxis yAxisId="left" orientation="left">
          <Label position="left" angle={-90}>
            Y1 label
          </Label>
        </YAxis>
        <YAxis yAxisId="right" orientation="right">
          <Label position="right" angle={90}>
            Y2 label
          </Label>
        </YAxis>

        <Tooltip labelFormatter={tooltipX} formatter={tooltipY} />

        <ReferenceArea yAxisId="left" y2={refBottom} fill="green" fillOpacity={0.2}>
          <Label position="insideRight">
            Reference area
          </Label>
        </ReferenceArea>
        <ReferenceArea yAxisId="left" y1={refTop} fill="blue" fillOpacity={0.2}>
          <Label position="insideRight">
            Other reference area
          </Label>
        </ReferenceArea>

        <Line yAxisId="left" type='monotone' dataKey='y1' stroke='red' />
        <Line yAxisId="right" type='monotone' dataKey='y2' stroke='blue' />

      </ComposedChart>
    </ResponsiveContainer>
  )
})
