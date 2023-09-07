export interface ChannelSignalStrength {
  channel: number
  value: number
}

export interface SignalStrengthData {
  lastUpdateTime: number
  channelSignalStrength: Array<ChannelSignalStrength>
  currentChannel: number
}

export async function getSignalStrengthData(): Promise<SignalStrengthData> {
  const signalStrengthData: SignalStrengthData = {
    lastUpdateTime: 1693903107,
    currentChannel: 13,

    channelSignalStrength: [
      { channel: 12, value: 17 },
      { channel: 13, value: 74 },
      { channel: 14, value: 6 },
      { channel: 15, value: 78 },
      { channel: 16, value: 12 },
      { channel: 17, value: 64 },
      { channel: 18, value: 2 },
      { channel: 19, value: 55 },
      { channel: 20, value: 27 },
      { channel: 21, value: 40 },
      { channel: 22, value: 18 },
      { channel: 23, value: 61 },
      { channel: 24, value: 0 },
    ],
  }

  return signalStrengthData
}
