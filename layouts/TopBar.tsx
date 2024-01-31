'use client';

import { IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerWidth } from '@/constants';

interface Props {
  handleDrawerToggle: () => void;
}

export default function TopBar({ handleDrawerToggle }: Props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DrawerWidth}px)` },
        ml: { sm: `${DrawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography noWrap component="div">
          Dashboard Template
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
