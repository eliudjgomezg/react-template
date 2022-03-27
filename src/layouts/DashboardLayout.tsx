import { FunctionComponent, useState } from 'react'

import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

import DashboardAppBar from './DashboardAppBar'
import DashboardDrawer from './DashboardDrawer'
import { DrawerHeader } from './Drawer'

const DashboardLayout: FunctionComponent = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DashboardAppBar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <DashboardDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />

      <Box component='main' height='100vh' className='bg-indigo-100 grow px-5 pb-5 pt-10'>
        <DrawerHeader />
        <Box width='100%' height='calc(100vh - 3.75rem - 64px)' className='bg-white p-5 rounded-2xl' overflow='auto'>
          {props.children}
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardLayout
