import { Box, Typography, Grid} from '@mui/material'
import { SocialIcon } from 'react-social-icons'


const AboutMe = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" sx={{ padding: 1, height: '100vh' }} >
            <Box display="flex" justifyContent="center">
                <Typography variant='h2' sx={{margin: 3}}>
                    Contacts:
                </Typography>
            </Box>
            <Box sx={{ width: '100%', height: '' }} display="flex" justifyContent="center">
                <Grid container display="flex" sx={{ padding: 1 }} justifyContent="center">
                    <Grid item sx={{margin: 3}}>
                        <SocialIcon network="github" url="https://github.com" />
                    </Grid>
                    <Grid item sx={{margin: 3}}>
                        <SocialIcon network="linkedin" url="https://www.linkedin.com/in/peter-foldes-522411229/"/>
                    </Grid>
                    <Grid item sx={{margin: 3}}>
                        <SocialIcon network="x" url="https://twitter.com/s_ltrain"/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}


export default AboutMe