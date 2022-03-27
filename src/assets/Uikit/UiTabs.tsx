import { useState } from 'react'

import UiButton, { TButtonTheme } from './UiButton'

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
  const isTabSelected = props.tabs.findIndex((tab: ITab) => tab.isSelected)
  const [selectedTab, setSelectedTab] = useState<number>(isTabSelected ?? 0)

  const handleTab = (tab: ITab, index: number) => {
    setSelectedTab(index)
    tab.onClick && tab.onClick(index)
  }

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
