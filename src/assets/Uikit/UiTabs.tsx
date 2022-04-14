import { useEffect, useState } from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

import UiButton, { TButtonTheme } from './UiButton'
import { ComponentWrapper } from './UiKitPage/UiPageLayout'

export type ITab = {
  tabText: string
  isTabHidden?: boolean
  isSelected?: boolean
  to?: string
  onClick?: (position: number) => void
}

type TUiTabs = {
  tabs: ITab[]
  size?: 'small' | 'large'
  className?: string
  theme: TButtonTheme
  asLink?: boolean
}

const UiTabs: React.FC<TUiTabs> = (props) => {
  const isTabSelected = props.tabs.findIndex((tab: ITab) => tab.isSelected) ?? 0
  const [selectedTab, setSelectedTab] = useState<number>(isTabSelected)

  const handleTab = (tab: ITab, index: number) => {
    setSelectedTab(index)
    tab.onClick && tab.onClick(index)
  }

  useEffect(() => {
    if (props.tabs.length > 0) {
      setSelectedTab(isTabSelected)
    }
  }, [props.tabs])

  return (
    <div className={`${props.className ?? ''} slider items-center no-scroll-bar rounded-xl`}>
      <div className='slider-item bg-gray-200 rounded-xl inline-block py-2 flex items-center pl-2'>
        {props.tabs.map((tab: ITab, index: number) => {
          const selectedVariant = selectedTab === index ? 'contained' : 'default'
          const selectedTheme = selectedVariant.includes('default') ? 'black' : props.theme

          return (
            <div key={index}>
              {!tab.isTabHidden && (
                <UiButton
                  asLink={props.asLink}
                  to={tab.to}
                  theme={selectedTheme}
                  variant={selectedVariant}
                  size={props.size ?? 'small'}
                  className={`mr-2 py-2.5 ${props.size?.includes('small') ? 'px-4' : 'px-10'}`}
                  onClick={() => handleTab(tab, index)}
                >
                  {tab.tabText}
                </UiButton>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UiTabs

export const UiTabsView = () => {
  const { clipboard } = useCopyToClipboard()

  const tabs = [
    { tabText: 'tab1', onChange: (position: number) => tabAction(position) },
    { tabText: 'tab2', isTabHidden: true, onChange: (position: number) => tabAction(position) },
    { tabText: 'tab3', onChange: (position: number) => tabAction(position) },
    { tabText: 'tab4', isSelected: true, onChange: (position: number) => tabAction(position) },
  ]

  const linkTabs = [
    { tabText: 'tab1', href: '/another-path', isSelected: true },
    { tabText: 'tab2', href: '/another-path' },
    { tabText: 'tab3', href: '/another-path' },
  ]

  const tabAction = (position: number) => {
    return position
  }

  return (
    <ComponentWrapper title={'Tabs'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  interface ITab {
    tabText: string
    isTabHidden?: boolean
    isSelected?: boolean
    to?: string
    onClick?: (position: number) => void
  }

  interface TUiTabs {
    tabs: ITab[]
    size?: 'small' | 'large' // Default size: small
    className?: string
    theme: 'black'
    asLink?: boolean
  }
}`}
      </pre>

      <h4 className='mb-2 mt-8 text-black'>{'Button tabs (size="large")'}</h4>
      <UiTabs tabs={tabs} size='large' theme='black' />
      <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiTabs tabs={tabs} size='large' theme='black' />`)}>
        Copiar código
      </UiButton>

      <h4 className='mb-2 mt-8 text-black'>{'Link tabs (size="small" => default size)'}</h4>
      <UiTabs asLink tabs={linkTabs} theme='black' />
      <UiButton className='block ml-auto mt-4' onClick={() => clipboard(`<UiTabs asLink tabs={tabs} theme='black' />`)}>
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}
