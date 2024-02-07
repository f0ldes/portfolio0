import React, { useEffect, useState } from 'react';
import CoolGandalf from './cool gandalf.png'
import RotatingCircle from './CIrcle.js'
import { Typography, Box, Grid, Avatar } from "@mui/material"
import { useSpring, animated } from "react-spring";


const words = ['React', 'NodeJS', 'NestJS', 'Python', 'Web Development', 'Full - Stack' ]

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
            // Alternatively, you can use tension and friction
            // tension: 70, // Lower tension for slower movement
            // friction: 40  // Higher friction for more resistance
        }
    });

    useEffect(() => {
        setWord(words[index]);
    }, [index]);

    return (
        <Box sx={{ width: '80%', height: '60%', padding: 5, border: 1 }} display="flex" flexDirection="row" justifyContent="">
            <Box sx={{ width: '100%', height: '100%', padding: 1, border: 1 }} >
                <Grid container sx={{ width: '100%', height: '70%' }} display="flex" flexDirection="row" justifyContent="space-between">
                    <Grid item sx={{ paddingLeft: 3, paddingTop: '' }} display="flex" flexDirection="column" justifyContent="space-between">
                        <Typography variant="h2">
                            Full - Stack Developer
                        </Typography>
                        <Box sx={{paddingBottom: '20%'}}>
                            <Typography variant="body1">
                                Hey! I'm Peter Foldes, passionet developer based in Budapest.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item >
                        {/*                     
                            <div>
                                <RotatingCircle className="hero-img" />
                            </div>
                        */}
                        {/*
                            <animated.div style={fadingText}>
                                <Typography variant="h1">
                                    { 'something' }
                                </Typography>
                            </animated.div>
                        */}
                        <Avatar alt="profile" src={CoolGandalf} sx={{ width: 356, height: 356 }} className="hero-img" />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                
            </Box>
        </Box>
    )
};

export default TextPanel;