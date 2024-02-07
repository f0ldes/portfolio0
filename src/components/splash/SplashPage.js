import { Box } from "@mui/material"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import BottomPanel from "../bottom panel/BottomPanel";
//import { Outlet } from "react-router-dom";
import Sections from "../../layout/Layout";

const SplashPage = ({ changeTheme, currentTheme }) => {
    const [parent] = useAutoAnimate();

    return (
        <>
            <Box
                width='100%'
                height='100vh'
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                ref={parent}
            >
                <Box 
                    sx={{overflow: 'auto', height: '100vh', width:'100%', padding: 2, marginBottom: 3 }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    ref={parent}
                >
                    <Sections />
                </Box>
                <BottomPanel sx={{ padding: 3 }} changeTheme={changeTheme} currentTheme={currentTheme} />
            </Box>
        </>
    )
};

export default SplashPage;