import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import '../App.css'
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { duration } from '@mui/material';

const pages = ['Home', 'Portfolio', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  React.useEffect(()=>{
    Aos.init({duration:2500});
  },[])
  
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#25262a' }}>
      <Container maxWidth="xl" sx={{ height: 80, marginTop: 1, marginBottom: 2 }}>
        <Toolbar disableGutters>
          <img onClick={() => {
            navigate("/");
          }} src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg' data-aos="fade-right"/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Button
              onClick={() => {
                navigate("/");
              }}
              data-aos="fade" sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, marginTop: 3, marginLeft: 8, fontWeight: 'bold', ":hover": { borderBottom: '3px solid white' } }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/portfolio");
              }}
              data-aos="fade" sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, marginTop: 3, marginLeft: 8, ":hover": { borderBottom: '4px solid white' } }}
            >
              Portfolio
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              data-aos="fade" sx={{ my: 2, color: 'white', display: 'block', fontSize: 18, marginTop: 3, marginLeft: 8, ":hover": { borderBottom: '4px solid white' } }}
            >
              Contact
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0, marginRight: 3 }}>
            <LanguageIcon  data-aos="fade-left"  sx={{ backgroundColor: '#2c2d31', color: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }} />
          </Box>
          <Box>
            <Button data-aos="fade-left" sx={{ color: 'black', backgroundColor: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 6, paddingRight: 6, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }}>Contact Me</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
