import { FC } from 'react'

import { Routes, Route } from 'react-router-dom'
import { routes } from 'utils/routes'

import DashboardLayout from 'layouts/DashboardLayout'
import Home from 'pages/Home'

import UiKitLayout from 'assets/Uikit/UiPage/UiPageLayout'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={routes.uikit} element={<UiKitLayout />} />
      <Route path={routes.dashboard} element={<DashboardLayout />} />
      <Route path={routes.home} element={<Home />} />
    </Routes>
  )
}

export default AppRouter
