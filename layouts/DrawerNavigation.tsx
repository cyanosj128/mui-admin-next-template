import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import UserIcon from '@mui/icons-material/Person2Rounded';
import { DrawerWidth } from '@/constants';
import Link from 'next/link';

export interface Props {
  mobileOpen: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}

const routes = [
  { key: 'inbox', label: 'Inbox', icon: <InboxIcon /> },
  { key: 'starred', label: 'Starred', icon: <MailIcon /> },
  { key: 'sent', label: 'Sent', icon: <UserIcon /> },
];

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {routes.map((route) => (
        <ListItem key={route.key} disablePadding>
          <ListItemButton LinkComponent={Link} href={route.key}>
            <ListItemIcon>{route.icon}</ListItemIcon>
            <ListItemText primary={route.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    {/* <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List> */}
  </div>
);

export default function DrawerNavigation({
  mobileOpen,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}: Props) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: DrawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DrawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: DrawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
