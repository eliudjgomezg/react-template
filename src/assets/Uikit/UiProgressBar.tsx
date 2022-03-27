// @ts-expect-error: Unreachable code error
import { Progress } from 'react-sweet-progress'

import 'react-sweet-progress/lib/style.css'
import { TColors } from './colors'

type TUiProgressBar = {
  percent: number
  customPercent?: string | number
  type?: 'circle'
  className?: string
  color?: TColors
  strokeColor?: TColors
  width?: number
}

const UiProgressBar: React.FC<TUiProgressBar> = (props) => {
  const formatPercent = () => {
    if (typeof props.percent === 'string') return +props.percent
    return props.percent
  }

  return (
    <Progress
      type={props.type ?? ''}
      className={props.className ?? ''}
      width={props.width ?? 90}
      percent={formatPercent() ?? 0}
      strokeWidth={12}
      theme={{
        active: {
          symbol: <h6 className='font-bold'>{`${props.percent}%`}</h6>,
        },
      }}
    />
  )
}

export default UiProgressBar
