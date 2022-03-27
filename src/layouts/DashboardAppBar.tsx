import { FC } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
// eslint-disable-next-line import/named
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'

const drawerWidth = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}
export type TDashboard = {
  isDrawerOpen: boolean

  setIsDrawerOpen: (state: boolean) => void
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: 15,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DashboardAppBar: FC<TDashboard> = (props) => {
  return (
    <AppBar className='flex justify-center bg-white h-20 shadow-gray-01' position='fixed' open={props.isDrawerOpen}>
      <Toolbar>
        <IconButton
          color='inherit'
          onClick={() => props.setIsDrawerOpen(true)}
          edge='start'
          sx={{
            marginRight: '10px',
            ...(props.isDrawerOpen && { display: 'none' }),
          }}
        >
          <MenuIcon className='text-gray-600' />
        </IconButton>
        <div className='flex justify-between w-full'>
          <div>{!props.isDrawerOpen && <h2 className='text-black'>Logo</h2>}</div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default DashboardAppBar
