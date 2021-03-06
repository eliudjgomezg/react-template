import { FC } from 'react'

import UiKitLayout from 'Uikit/UiKitPage/UiPageLayout'

import { Routes, Route } from 'react-router-dom'
import { routes } from 'utils/routes'

import DashboardLayout from 'layouts/DashboardLayout'
import Home from 'pages/Home'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={routes.uikit} element={<UiKitLayout />} />
      <Route path={routes.dashboard} element={<DashboardLayout />} />
      <Route path={routes.home} element={<Home />} />
      <Route path='/*' element={<p>Page Not Fount!!!!!!!</p>} />
    </Routes>
  )
}

export default AppRouter
