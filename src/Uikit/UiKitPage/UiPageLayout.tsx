import { FC, useState } from 'react'

import { Link } from 'react-router-dom'

import { FormView } from '../Forms/UiKitView'
import { UiButtonsView } from '../UiButton'
import { UiModalView } from '../UiModal'
import { UiMultipleAccordionView } from '../UiMultipleAccordion'
import { UiPaginationView } from '../UiPagination'
import { UiProgressBarView } from '../UiProgressBar'
import { UiSimpleAccordionView } from '../UiSimpleAccordion'
import { UiTabsView } from '../UiTabs'

const components = [
  { component: <UiButtonsView />, tabText: `Buttons`, isSelected: true },
  { component: <FormView />, tabText: `Formularios` },
  { component: <UiTabsView />, tabText: `Tabs` },
  { component: <UiSimpleAccordionView />, tabText: `Acordion simple` },
  { component: <UiMultipleAccordionView />, tabText: `Acordion multiple` },
  { component: <UiModalView />, tabText: `Modal` },
  { component: <UiPaginationView />, tabText: `Paginación` },
  { component: <UiProgressBarView />, tabText: `progreesbar` },
  { component: <TypographyView />, tabText: `Tipografía` },
]

const UiKitLayout: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(components[0])

  return (
    <div className='px-8 pb-8 h-screen bg-white'>
      <div className='flex justify-between items-center py-2'>
        <h4>UIKIT</h4>
        <Link to='/'>X</Link>
      </div>
      <hr />
      <div className='grid grid-cols-12 mt-8' style={{ height: 'calc(100vh - 100px)' }}>
        <div className='col-span-2 overflow-auto border-r border-gray-200' style={{ height: 'calc(100vh - 100px)' }}>
          <h5 className='my-2'>Componentes</h5>
          {components.map((iter) => (
            <div
              key={iter.tabText}
              className={`py-2 rounded-l-2xl hover:bg-gray-25 pl-4 ${
                selectedItem.tabText === iter.tabText ? 'bg-black hover:bg-black text-white' : ''
              }`}
            >
              <p className={`cursor-pointer m-0`} onClick={() => setSelectedItem(iter)}>
                {iter.tabText}
              </p>
            </div>
          ))}
        </div>

        <div className='col-span-10 overflow-auto px-8' style={{ height: 'calc(100vh - 100px)' }}>
          {selectedItem.component}
        </div>
      </div>
    </div>
  )
}

export default UiKitLayout

export const ComponentWrapper: FC<{ title: string }> = (props) => {
  return (
    <div className={'col-span-12 mb-8'}>
      <h3 className='mb-4 text-black'>{props.title}</h3>
      {props.children}
    </div>
  )
}

export function TypographyView() {
  return (
    <ComponentWrapper title={'Tipografía'}>
      <h1 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h1</h1>
      <h2 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h2</h2>
      <h3 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h3</h3>
      <h4 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h4</h4>
      <h5 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h5</h5>
      <h6 className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. h6</h6>
      <p className='subtitle1 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Subtitle1</p>
      <p className='subtitle2 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Subtitle2</p>
      <p className='body1 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. body1</p>
      <p className='body2 mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. body2</p>
      <p className='microcopy mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. microcopy</p>
    </ComponentWrapper>
  )
}
