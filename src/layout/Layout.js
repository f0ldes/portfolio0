import React from 'react';
import { Grid } from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import SplashPage from '../components/splash/SplashPage';
import Projects from '../components/projects/list/ProjectList';
import TextPanel from '../components/main/TextPanel';
import AboutMe from '../components/about/About';

const MainRoutes = ({ changeTheme, currentTheme }) => {
    return (
        <Routes>
            <Route path='/' element={ <SplashPage changeTheme={changeTheme} currentTheme={currentTheme} /> } >
                <Route path="one" element={<p> This is One. </p>} />
                <Route path="two" element={<TextPanel />} />
                <Route path="projectList" element={<Projects />} />
            </Route>
        </Routes>
    );
};


const Sections = () => {
    return (
        <Grid container sx={{width: '100%', height: '100%'}} display="flex" justifyContent="center" flexDirection="row">
            <Grid item id="sectionOne" sx={{}} display="flex" justifyContent="center" >
                <TextPanel />
            </Grid>
            <Grid item id="sectionThree" sx={{}} display="flex" justifyContent="center">
                <Projects/>
            </Grid>
            <Grid item id="sectionTwo" sx={{}} display="flex" justifyContent="center">
                <AboutMe />
            </Grid>
        </Grid>
    );
};

export default Sections;