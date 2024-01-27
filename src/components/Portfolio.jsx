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
import '../components/Footer'
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { duration } from '@mui/material';

function Portfolio() {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    const navigate = useNavigate();
    return (
        <Box>
            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} data-aos="zoom-in-up">
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <Typography sx={{ color: '#53cd8f' }}>-Project 1</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Branding Nice Studio</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginLeft: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img onClick={() => {
                                navigate("/portfolio/branding-nice-studio");
                            }} data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', }}>

                        </Box>
                    </Box>

                </Grid>

            </Grid>

            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }} data-aos="zoom-in-up">
                            <Typography sx={{ color: '#53cd8f' }}>-Project 2</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Mobile Card App</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginRight: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }} data-aos="zoom-in-up">
                            <Typography sx={{ color: '#53cd8f' }}>-Project 3</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Restaurant Landing page</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginLeft: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', }}>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-4-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} data-aos="zoom-in-up">
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <Typography sx={{ color: '#53cd8f' }}>-Project 4</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }} Essential UI Icon Pack></Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginRight: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} data-aos="zoom-in-up">
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <Typography sx={{ color: '#53cd8f' }}>-Project 5</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Financial App Design</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginLeft: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-5-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', }}>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-6-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} data-aos="zoom-in-up">
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <Typography sx={{ color: '#53cd8f' }}>-Project 6</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Design Brand Guidelines</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginRight: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={6} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }} data-aos="zoom-in-up">
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <Typography sx={{ color: '#53cd8f' }}>-Project 7</Typography>
                            <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Flight Booking App</Typography>
                            <Typography variant='h6' sx={{ color: '#a3a7af', marginLeft: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                        </Box>
                        <Box sx={{ marginTop: 5 }}>
                            <Typography sx={{ color: '#feb127' }}> -Read More</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid md={6} sx={{ marginTop: 14 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 4 }}>
                            <img data-aos="flip-down" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-7-img.jpg' style={{ borderRadius: 44 }} />
                        </Box>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', }}>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box>
                <Footer />
            </Box>

        </Box>
    );
}

export default Portfolio;
