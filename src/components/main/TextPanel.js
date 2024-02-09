import React, { useEffect, useState } from 'react';
import CoolGandalf from './cool gandalf.png'
import RotatingCircle from './CIrcle.js'
import { Typography, Box, Grid, Avatar } from "@mui/material"
import { useSpring } from "react-spring";


const words = ['React', 'NodeJS', 'NestJS', 'Python', 'Web Development', 'Full - Stack']

const TextPanel = () => {
    const [index, setIndex] = useState(0);
    const [word, setWord] = useState(words[0]);

    const fadingText = useSpring({
        from: { opacity: 1 },
        to: { opacity: 0 },
        reset: true,
        reverse: word === words[index],
        onRest: () => setIndex(state => (state + 1) % words.length),
        config: {
            duration: 3000, // Increase duration to make the animation slower
            // Alternative:
            // tension: 70, // Lower tension for slower movement
            // friction: 40  // Higher friction for more resistance
        }
    });

    useEffect(() => {
        setWord(words[index]);
    }, [index]);

    return (
        <Box sx={{ width: '75%', height: '60%', paddingTop: 3, marginBottom: 20 }} display="flex" flexDirection="row" justifyContent="">
            <Box sx={{ width: '100%', height: '100%', paddingTop: 3 }} display="flex" flexDirection="" justifyContent="center">
                <Grid container sx={{ width: '100%', height: '70%' }} display="flex" flexDirection="row" justifyContent="center">
                    <Grid item sx={{ paddingX: 3, marginLeft: '' }} display="flex" flexDirection="column" justifyContent="space-between">
                        <Typography variant="h2">
                            Full - Stack Developer
                        </Typography>
                        <Box sx={{ paddingY: '20%' }} display="flex" justifyContent="center">
                            <Typography variant="body1">
                                Hey! I'm Peter Foldes, passionet developer based in Budapest.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item  sx={{ paddingX: 3, paddingTop: '' }} display="flex" flexDirection="column" justifyContent="center">
                        {/*                     
                            <div>
                                <RotatingCircle className="hero-img" />
                            </div>
                        */}
                        {/*
                            <animated.div style={fadingText}
                                <Typography variant="h1">
                                    { 'something' }
                                </Typography>
                            </animated.div>
                        */}
                        <Box display="flex" flexDirection="column" justifyContent="flex-end" >
                            <Avatar alt="profile" src={CoolGandalf} sx={{ width: 400, height: 400 }} className="hero-img" />
                        </Box>
                    </Grid>
                    <Grid container display="flex" justifyContent="center" sx={{ paddingTop: 10, width: '100%' }}>
                            <Grid item sx={{marginLeft: '15%'}}>
                                <Typography variant="h4" sx={{ opacity: 0.5 }}>
                                    Stack:
                                </Typography>
                            </Grid>
                            <Grid item  sx={{marginLeft: '15%'}}>
                                <div style={{ padding: 5 }}>
                                    <img src="https://skillicons.dev/icons?i=css,html" />
                                </div>
                                <div style={{ padding: 5 }}>
                                    <img src="https://skillicons.dev/icons?i=js,ts,python,mui,bootstrap" />
                                </div>
                                <div style={{ padding: 5 }}>
                                    <img src="https://skillicons.dev/icons?i=nodejs,expressjs,nestjs,mysql,mongodb,heroku,netlify" />
                                </div>
                            </Grid>
                        </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default TextPanel;