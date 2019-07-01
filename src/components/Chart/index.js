import React, { PureComponent } from 'react'
import { ComposedChart, ReferenceArea, XAxis, YAxis, Label, Line, Tooltip, ResponsiveContainer } from 'recharts'

const DEFAULT_DATA = [
  { x: 1, y: 590 },
  { x: 2, y: 868 },
  { x: 3, y: 1397 },
  { x: 4, y: 1480 },
  { x: 5, y: 1520 },
  { x: 6, y: 1400 },
];

const DEFAULT_REFERENCE = [500, 1000]

const CHART_MARGIN = { top: 20, right: 20, bottom: 20, left: 20 }

export default class Chart extends PureComponent {

  tooltipX = (value) => {
    return `X : ${value}`
  }
  tooltipY = (value) => {
    return [value, 'Y']
  }
  render() {
    const { data = DEFAULT_DATA, reference = DEFAULT_REFERENCE } = this.props
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
          <YAxis dataKey="y">
            <Label position="left" angle={-90}>
              Y label
            </Label>
          </YAxis>

          <Tooltip labelFormatter={this.tooltipX} formatter={this.tooltipY} />

          <ReferenceArea y2={refBottom} fill="green" fillOpacity={0.2}>
            <Label position="insideRight">
              Reference area
            </Label>
          </ReferenceArea>
          <ReferenceArea y1={refTop} fill="blue" fillOpacity={0.2}>
            <Label position="insideRight">
              Other reference area
            </Label>
          </ReferenceArea>

          <Line type='monotone' dataKey='y' stroke='red' />

        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}
