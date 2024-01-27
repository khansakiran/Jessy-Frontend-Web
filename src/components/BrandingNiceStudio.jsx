import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import '../components/Footer'
import Footer from '../components/Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Work from './Work';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { duration } from '@mui/material';

function BrandingNiceStudio() {
    React.useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    return (
        <Box>
            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={7} sx={{ marginTop: 10 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg' style={{ borderRadius: 58, height: '100vh' }} />
                        </Box>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', }}>

                        </Box>
                    </Box>
                </Grid>
                <Grid md={5} sx={{ display: 'flex', flexDirection: 'column', marginTop: 12 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3, color: '#53cd8f', fontWeight: 'bold' }}>Branding Nice Studio</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af',marginRight:5 }}>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally</Typography>
                           
                            <Box sx={{display:'flex',flexDirection:'row',marginTop:4}}>
                                <Box sx={{display:'flex',flexDirection:'row',marginRight:6}}>
                                    <FavoriteIcon sx={{border:'2px solid #53cd8f', color:'#53cd8f',padding:2,borderRadius:5,marginRight:2}} fontSize='large'/>
                                    <Typography sx={{marginTop:2}} variant='h6'>Likes(112)</Typography>
                                </Box>
                                <Box sx={{display:'flex',flexDirection:'row'}}>
                                    <ShareIcon sx={{border:'2px solid #53cd8f', color:'#53cd8f',padding:2,borderRadius:5,marginRight:2}} fontSize='large'/>
                                    <Typography variant='h6' sx={{marginTop:2}}>Share</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'column',marginTop:4}}>
                                <Box sx={{display:'flex',flexDirection:'column',marginRight:6}}>
                                    <Typography variant='h5' sx={{color:'#feb227'}}>Categories</Typography>
                                    <Typography sx={{marginTop:1}} variant='body2'>App Design</Typography>
                                </Box>
                                <Box sx={{display:'flex',flexDirection:'column',marginRight:6,marginTop:4}}>
                                    <Typography variant='h5' sx={{color:'#feb227'}}>Client</Typography>
                                    <Typography sx={{marginTop:1}} variant='body2'>Company Name</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Work />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
}

export default BrandingNiceStudio;
