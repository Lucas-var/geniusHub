import './App.css'
import { SignalStrengthData } from './api'
import Chart from './Chart'

interface DisplayProps {
  data: SignalStrengthData
}

const Display = ({ data }: DisplayProps) => {
  //

  const sortBestChannel = (data: SignalStrengthData) => {
    const channelsAndValues = data.channelSignalStrength

    const bestChannel = channelsAndValues.reduce(
      (accumulator, currentValue) => {
        if (currentValue.value > accumulator.value) {
          return currentValue
        } else {
          return accumulator
        }
      },
      { channel: 0, value: 0 }
    )

    return bestChannel.channel
  }
  return (
    <div className='wrapper'>
      <div>
        <h2>Zigbee Channel Scan</h2>
      </div>
      <div className='chart-wrap'>
        <Chart data={data} />
      </div>
      <h3>
        Zigbee Channel RSSI{' '}
        <span title='dBm stands for decibels per milliwatt, it is used to define signal strength'>
          (dBm)
        </span>
      </h3>

      <p className='text-data'>Last Scan Time: {data.lastUpdateTime}</p>
      <p className='text-data'>Current Channel: {data.currentChannel}</p>
      <p className='text-data'>Best Channel: {sortBestChannel(data)} </p>

      <div className='buttons'>
        <button className='yellow-button'> Energy Scan </button>
        <button className='yellow-button'> Active Scan </button>
        <button className='red-button'> Stop Scan </button>
      </div>

      <p className='activeScanResult'>[+] Active Scan Results</p>

      <div className='closeButton-div'>
        <button className='yellow-button'>Close</button>
      </div>
    </div>
  )
}

export { Display }
