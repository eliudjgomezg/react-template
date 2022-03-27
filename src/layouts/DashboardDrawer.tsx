import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { List, ListItem, ListItemText } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

import { TDashboard } from './DashboardAppBar'
import Drawer, { DrawerHeader } from './Drawer'

const DashboardDrawer: React.FC<TDashboard> = (props) => {
  const theme = useTheme()

  return (
    <Drawer variant='permanent' open={props.isDrawerOpen}>
      <DrawerHeader>
        {props.isDrawerOpen && <h2>Logo</h2>}
        <IconButton onClick={() => props.setIsDrawerOpen(false)}>
          {theme.direction === 'rtl' ? <ChevronRightIcon className='text-gray-600' /> : <ChevronLeftIcon className='text-gray-600' />}
        </IconButton>
      </DrawerHeader>

      <List component='nav' className='pl-10 mt-8'>
        <ListItem className='pl-1'>
          <ListItemText>
            <p className='subtitle1'>Opción 1</p>
          </ListItemText>
        </ListItem>
        <ListItem className='pl-1'>
          <ListItemText>
            <p className='subtitle1'>Opción 2</p>
          </ListItemText>
        </ListItem>
        <ListItem className='pl-1'>
          <ListItemText>
            <p className='subtitle1'>Opción 3</p>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DashboardDrawer
