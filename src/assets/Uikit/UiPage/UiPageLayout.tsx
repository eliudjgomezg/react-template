import { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  ButtonsView,
  FormView,
  ModalView,
  MultipleAccordionView,
  PaginationView,
  SimpleAccordionView,
  TabsView,
  TypographyView,
} from './UiPageComponents'

const components = [
  { component: <ButtonsView />, tabText: `Buttons`, isSelected: true },
  { component: <FormView />, tabText: `Formularios` },
  { component: <TabsView />, tabText: `Tabs` },
  { component: <SimpleAccordionView />, tabText: `Acordion simple` },
  { component: <MultipleAccordionView />, tabText: `Acordion multiple` },
  { component: <ModalView />, tabText: `Modal` },
  { component: <PaginationView />, tabText: `Paginación` },
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
