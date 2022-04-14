// @ts-expect-error: Unreachable code error
import { Progress } from 'react-sweet-progress'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

import 'react-sweet-progress/lib/style.css'
import UiButton from './UiButton'
import { ComponentWrapper } from './UiKitPage/UiPageLayout'

type TUiProgressBar = {
  percent: number
  type?: 'circle'
  className?: string
  width?: number
}

const UiProgressBar: React.FC<TUiProgressBar> = (props) => {
  const formatPercent = () => {
    if (typeof props.percent === 'string') return +props.percent
    return props.percent
  }

  return (
    <Progress type={props.type ?? ''} className={props.className ?? ''} width={props.width ?? 90} percent={formatPercent() ?? 0} strokeWidth={12} />
  )
}

export default UiProgressBar

export const UiProgressBarView = () => {
  const { clipboard } = useCopyToClipboard()

  return (
    <ComponentWrapper title={'UiButton'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Puedes editar los estilos en el componente raiz

Propiedades del componente:

  type TUiButton = {
    percent: number
    type?: 'circle'
    className?: string
    width?: number
  }
`}
      </pre>

      <h4 className='mt-4 text-black'>Contained buttons (Default variant)</h4>
      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-4'>
          <h6 className='my-2'>Linear progressbar</h6>
          <UiProgressBar percent={20} />
          <UiButton className='mt-4' disabled onClick={() => clipboard(`<UiProgressBar percent={20} />`)}>
            Copiar código
          </UiButton>
        </div>
        <div className='col-span-4'>
          <h6 className='my-2'>Linear progressbar</h6>
          <UiProgressBar percent={80} type='circle' />
          <UiButton className='block mt-4' disabled onClick={() => clipboard(`<UiProgressBar percent={20} type='circle' />`)}>
            Copiar código
          </UiButton>
        </div>
      </div>
    </ComponentWrapper>
  )
}
