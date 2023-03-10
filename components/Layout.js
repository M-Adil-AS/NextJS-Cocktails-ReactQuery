import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const Layout = ({children})=> {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <Link href="/" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit">About</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}

export default Layout