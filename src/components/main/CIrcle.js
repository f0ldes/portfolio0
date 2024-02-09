import React from 'react';
import { Box } from '@mui/material';


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