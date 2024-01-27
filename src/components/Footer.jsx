import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FitbitIcon from '@mui/icons-material/Fitbit';
import MoodIcon from '@mui/icons-material/Mood';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box>
      <Grid container sx={{ backgroundColor: '#2d2e32' }}>
                    <Grid md={12} sx={{ marginTop: 7, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', textAlign: 'center' }}>
                            <Card sx={{ minWidth: 345, marginRight: 1, backgroundColor: '#25262a', color: 'white' }}>
                                <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>

                                    <CardContent sx={{ marginTop: 4 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 3 }}>
                                            <img src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg' />
                                            <Typography sx={{ color: '#a3a7af', marginBottom: 2, marginLeft: 16, marginRight: 16 }} variant="h6" color="text.secondary">
                                                © 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <Box sx={{display:'flex', flexDirection:'row'}}>
                                        <Box sx={{ flexGrow: 0, marginRight: 3 }}>
                                            <LanguageIcon sx={{ backgroundColor: '#2c2d31', color: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }} />
                                        </Box>
                                        <Box sx={{ flexGrow: 0, marginRight: 3 }}>
                                            <FacebookIcon sx={{ backgroundColor: '#2c2d31', color: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }} />
                                        </Box>
                                        <Box sx={{ flexGrow: 0, marginRight: 3 }}>
                                            <TwitterIcon sx={{ backgroundColor: '#2c2d31', color: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }} />
                                        </Box>
                                        <Box sx={{ flexGrow: 0, marginRight: 3 }}>
                                            <InstagramIcon sx={{ backgroundColor: '#2c2d31', color: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 3, paddingRight: 3, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }} />
                                        </Box>
                                    </Box>
                                </CardActionArea>
                            </Card>


                        </Box>
                    </Grid>
                </Grid>

    </Box>
  );
}

export default Footer;
