import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import { SignalStrengthData } from './api'

interface ChartProps {
  data: SignalStrengthData
}

function Chart({ data }: ChartProps) {
  const channelsAndValues = data.channelSignalStrength

  const customYAxisTickFormatter = (channelsAndValues: number) => {
    return `${-Math.abs(channelsAndValues)}`
  }

  return (
    <div className='wrap'>
      <ResponsiveContainer height={270} width={500} aspect={2}>
        <BarChart
          data={channelsAndValues}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='channel'
            label={{ value: 'Wi-Fi channels', offset: 5, position: 'bottom' }}
          />

          <YAxis
            domain={[0, -100]}
            tickFormatter={customYAxisTickFormatter}
            label={{
              value: 'Signal Strength [dBm]',
              position: 'left',
              offset: 0,
              angle: -90,
              dy: -70,
            }}
          />

          <Tooltip />
          <Bar dataKey='value' fill='#8cc751' label={{ position: 'top' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
