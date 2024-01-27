import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

import '../components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Work() {
    React.useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <Box>
            <Grid container spacing={2} sx={{ backgroundColor: '#2d2e32' }}>
                <Grid md={12} sx={{ marginTop: 7, display: 'flex', flexDirection: 'row', justifyContent: 'center' }} data-aos="fade-right">
                    <Box sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', textAlign: 'center', margin: 4 }}>
                        <Card sx={{ minWidth: 345, marginRight: 1, marginBottom: 4, backgroundColor: '#25262a', color: 'white', borderRadius: 10 }}>
                            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }} data-aos="fade-left">

                                <CardContent sx={{ marginTop: 8 }}>
                                    <Typography sx={{ fontWeight: 'bold', color: 'white' }} gutterBottom variant="h3" component="div">
                                        Lets Work Together
                                    </Typography>
                                    <Typography sx={{ color: '#a3a7af', marginBottom: 2, marginLeft: 16, marginRight: 16 }} variant="h6" color="text.secondary">
                                        The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn
                                    </Typography>
                                </CardContent>
                                <Box sx={{ marginBottom: 5 }}>
                                    <Button sx={{ color: 'black', backgroundColor: '#feb227', paddingTop: 2, paddingBottom: 2, paddingLeft: 6, paddingRight: 6, borderRadius: 4, ":hover": { backgroundColor: "#feb227", color: 'black' } }}>Contact Me</Button>
                                </Box>
                            </CardActionArea>
                        </Card>


                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Work;
