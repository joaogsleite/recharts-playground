import React, { PureComponent } from 'react'
import { ComposedChart, ReferenceArea, XAxis, YAxis, Label, Line, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
	{name: 1, value: 590 },
  {name: 2, value: 868 },
  {name: 3, value: 1397 },
  {name: 4, value: 1480 },
  {name: 5, value: 1520 },
  {name: 6, value: 1400 },
];

export default class Chart extends PureComponent {

  tooltipX = (value) => {
    return `X : ${value}`
  }
  tooltipY = (value) => {
    return [value, 'Y']
  }
  render() {
    const chartMargin = { top: 20, right: 20, bottom: 20, left: 20 }
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <ComposedChart data={data} margin={chartMargin}>

          <XAxis dataKey="name">
            <Label position="bottom">
              X label
            </Label>
          </XAxis>
          <YAxis dataKey="value">
            <Label position="left" angle={-90}>
              Y label
            </Label>
          </YAxis>

          <Tooltip labelFormatter={this.tooltipX} formatter={this.tooltipY} />

          <ReferenceArea y1={0} y2={500} fill="green" fillOpacity={0.2}>
            <Label position="insideRight">
              Reference area
            </Label>
          </ReferenceArea>
          <ReferenceArea y1={1000} y2={1600} fill="blue" fillOpacity={0.2}>
            <Label position="insideRight">
              Other reference area
            </Label>
          </ReferenceArea>
          <Line 
            type='monotone' 
            dataKey='value' 
            stroke='red'
          />

        </ComposedChart>
      </ResponsiveContainer>
    )
  }
}
