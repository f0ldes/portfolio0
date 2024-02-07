import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Box } from '@mui/material';

const RotatingCircleBeta = ({className}) => {
    const props = useSpring({
        to: { transform: 'rotate(360deg)' },
        from: { transfrom: 'rotate(0deg)' },
        reset: true,
        repeat: true,
        config: { duration: 1000 },
    })

    return (
        <animated.div style={{ width: 100, height: 100, ...props }} className={className}>
            <svg viewBox="0 0 100 100" width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="transparent" />
            </svg>
        </animated.div>
    )
};


const RotatingCircle = ( {className }) => {
    return (
        <Box sx={{ width: 150, height: 150 }} className={className}>
            <div style={{maringLeft: 35, marginTop: 30}}>
                <div style={{marginLeft: 35, marginTop: 30}}>
                    <p>
                        hey!
                    </p>
                </div>
            </div>
        </Box>
    )
}

export default RotatingCircle;