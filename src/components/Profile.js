import * as React from 'react';
import {useTranslation} from "react-i18next";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Button from './Button'

export default function AccountMenu() {
    // eslint-disable-next-line
    const [t,i18n] = useTranslation('common');
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function english(params) { 
      i18n.changeLanguage('en')
    }

    function turkce(params) {
        i18n.changeLanguage('tr')
  }
  return (
    <React.Fragment>
      <Box >   
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} style={{color:"white", marginRight:'-8px', marginTop:'-3.5px'}} size="small">
        <Button  buttonName='Settings'  />
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                color:'white',
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 45,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem
         onClick={english}
         >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          English
        </MenuItem>
        <MenuItem
             onClick={turkce}
         >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Türkçe
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}