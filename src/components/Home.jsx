import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FitbitIcon from '@mui/icons-material/Fitbit';
import MoodIcon from '@mui/icons-material/Mood';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import '../components/Footer'
import Footer from '../components/Footer';
import Work from './Work';
import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home() {
    React.useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1, }}>
            <Grid container spacing={2}>
                <Grid md={4} sx={{ marginTop: 10, marginLeft: 4 }} data-aos="fade">
                    <Box sx={{ fontWeight: 'bold' }}>
                        <Typography sx={{ color: '#53cd8f' }}>-Introducing</Typography>
                        <Typography variant='h1'>Hello</Typography>
                        <Typography sx={{ fontWeight: 'bold' }} variant='h1'>I'm Jessy</Typography>
                        <Typography sx={{ fontWeight: 'bold', marginBottom: 3 }} variant='h1'>Walter</Typography>
                        <Typography variant='h6' sx={{ color: '#a3a7af' }}>Since beginning my journey as a freelance designer nearby 7 years ago,
                            I 've done remote work for agencies, consulted for startup, and collaborated
                            with talented people to create digital products.</Typography>
                    </Box>
                    <Box sx={{ marginTop: 3 }}>
                        <Button sx={{ color: 'black', backgroundColor: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 6, paddingRight: 6, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }}>Contact Me</Button>
                    </Box>
                </Grid>
                <Grid md={7} sx={{ marginTop: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft: 6 }}>
                        <img data-aos="fade-up" src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png' />
                    </Box>
                </Grid>

            </Grid>

            <Box sx={{ backgroundColor: '#2d2e32' }}>
                <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                    <Grid md={7} sx={{ marginTop: 14 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} data-aos="zoom-in">
                            <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: 4 }}>
                                <Card sx={{ maxWidth: 345, marginBottom: 4, backgroundColor: '#25262a', color: 'white', ":hover": { backgroundColor: '#53cd8f', color: 'white' }, borderRadius: 10 }}>
                                    <CardActionArea>
                                        <Box sx={{ marginTop: 4, }}>
                                            <ViewInArIcon fontSize="large" sx={{ border: '2px solid #53cd8f', padding: 5, borderRadius: 15, color: '#53cd8f' }} />
                                        </Box>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
                                                Product Design
                                            </Typography>
                                            <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h6" color="text.secondary">
                                                The technological revolution is changing aspect
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                                <Card sx={{ maxWidth: 345, backgroundColor: '#25262a', color: 'white', ":hover": { backgroundColor: '#53cd8f', color: 'white' }, borderRadius: 10 }}>
                                    <CardActionArea>
                                        <Box sx={{ marginTop: 4, }}>
                                            <PrecisionManufacturingIcon fontSize="large" sx={{ border: '2px solid #53cd8f', padding: 5, borderRadius: 15, color: '#53cd8f' }} />
                                        </Box>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
                                                UI Design
                                            </Typography>
                                            <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h6" color="text.secondary">
                                                The technological revolution is changing aspect
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                            <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', textAlign: 'center', }}>
                                <Card sx={{ maxWidth: 345, marginBottom: 4, marginTop: 8, backgroundColor: '#25262a', color: 'white', ":hover": { backgroundColor: '#53cd8f', color: 'white' }, borderRadius: 10 }}>
                                    <CardActionArea>
                                        <Box sx={{ marginTop: 4, }}>
                                            <FitbitIcon fontSize="large" sx={{ border: '2px solid #53cd8f', padding: 5, borderRadius: 15, color: '#53cd8f' }} />
                                        </Box>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
                                                Logo Design
                                            </Typography>
                                            <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h6" color="text.secondary">
                                                The technological revolution is changing aspect
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, backgroundColor: '#25262a', color: 'white', ":hover": { backgroundColor: '#53cd8f', color: 'white' }, borderRadius: 10 }}>
                                    <CardActionArea>
                                        <Box sx={{ marginTop: 4, }}>
                                            <MoodIcon fontSize="large" sx={{ border: '2px solid #53cd8f', padding: 5, borderRadius: 15, color: '#53cd8f' }} />
                                        </Box>
                                        <CardContent>
                                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
                                                Icon Design
                                            </Typography>
                                            <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h6" color="text.secondary">
                                                The technological revolution is changing aspect
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid md={5} sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box>
                            <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignContent: 'center' }} data-aos="fade-up">
                                <Typography sx={{ color: '#53cd8f' }}>-My Skills</Typography>
                                <Typography variant='h3' sx={{ marginTop: 3, marginBottom: 3 }}>Why Hire Me For Next Project?</Typography>
                                <Typography variant='h6' sx={{ color: '#a3a7af', marginRight: 6 }}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</Typography>
                            </Box>
                            <Box sx={{ marginTop: 5 }}>
                                <Button sx={{ color: 'black', backgroundColor: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 8, paddingRight: 8, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }}>Download CV</Button>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

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

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 3, }}>
                    <Button sx={{ borderRadius: 5, backgroundColor: 'white', color: 'black', paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, ":hover": { backgroundColor: '#25262a', color: 'white' } }}>View All</Button>
                </Box>

                <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }} data-aos="fade">
                    <Grid md={12} sx={{ marginTop: 14, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', textAlign: 'center', margin: 4 }}>
                            <Card sx={{ minWidth: 345, marginRight: 1, marginBottom: 4, backgroundColor: '#25262a', color: 'white', borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
                                <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }} data-aos="fade-up">

                                    <CardContent sx={{ marginTop: 8 }}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#53cd8f' }} gutterBottom variant="h1" component="div">
                                            56
                                        </Typography>
                                        <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h4" color="text.secondary">
                                            Happy Clients
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ minWidth: 345, marginRight: 1, marginBottom: 4, backgroundColor: '#25262a', color: 'white' }}>
                                <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }} data-aos="fade-up">

                                    <CardContent sx={{ marginTop: 8 }}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#53cd8f' }} gutterBottom variant="h1" component="div">
                                            87
                                        </Typography>
                                        <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h4" color="text.secondary">
                                            Projects Done
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ minWidth: 345, marginRight: 1, marginBottom: 4, backgroundColor: '#25262a', color: 'white' }}>
                                <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }} data-aos="fade-up">

                                    <CardContent sx={{ marginTop: 8 }}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#53cd8f' }} gutterBottom variant="h1" component="div">
                                            16
                                        </Typography>
                                        <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h4" color="text.secondary">
                                            Awards Winning
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ minWidth: 345, marginBottom: 4, backgroundColor: '#25262a', color: 'white', borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                                <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }} data-aos="fade-up">

                                    <CardContent sx={{ marginTop: 8 }}>
                                        <Typography sx={{ fontWeight: 'bold', color: '#53cd8f' }} gutterBottom variant="h1" component="div">
                                            7
                                        </Typography>
                                        <Typography sx={{ color: '#a3a7af', marginBottom: 4 }} variant="h4" color="text.secondary">
                                            Years Experience
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 3, }}>
                    <Button sx={{ borderRadius: 5, backgroundColor: 'white', color: 'black', paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2, ":hover": { backgroundColor: '#25262a', color: 'white' } }}>View All</Button>
                </Box>

                <Box>
                    <Work />
                </Box>

                <Box>
                    <Footer />
                </Box>


            </Box>

        </Box>
    );
}

export default Home;
