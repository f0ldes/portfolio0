import { Box, Grid, Typography, Container, Link } from "@mui/material";
import { lightTheme, theme, scrollHandler  } from "../../theme/theme";
import SwitchButton from "./switch/SwitchElement";



const BottomPanel = ({ changeTheme, currentTheme }) => {

    return (
        <Box
            sx={{ width: '100%' }}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <Grid
                container
                displat="flex"
                justifyContent="space-between"
                sx={{ marginX: 1, borderTop: '1px solid' }}
            >
                <Grid item >
                    <Grid container sx={{ marginX: 1 }}>
                        <Grid item sx={{padding: 1}}>
                            <Typography> <strong> foldes.dev </strong> </Typography>
                        </Grid>
                        <Grid item sx={{padding: 1.5, margin: 0 }}>
                            <SwitchButton onChange={changeTheme} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        display="flex"
                        justifyContent='flex-end'
                        alignItems='flex-end'
                        sx={{ marginX: 1 }}

                    >
                        <Box sx={{marginRight: 3}} display='flex' flexDirection='row' >
                            <Grid item sx={{ padding: 1 }}>
                                <Link onClick={() => scrollHandler('sectionOne')} variant="body2"> Home </Link>
                            </Grid>
                            <Grid item sx={{ padding: 1 }}>
                                <Link onClick={() => scrollHandler('sectionTwo')} variant="body2" to='/two'> Contact </Link>
                            </Grid>
                            <Grid item sx={{ padding: 1 }}>
                                <Link onClick={() => scrollHandler('sectionThree')} variant="body2" to='/projectList'> Projects </Link>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
};

export default BottomPanel;