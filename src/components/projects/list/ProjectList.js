import { useTheme } from "@emotion/react";
import { Typography, Box, Grid } from "@mui/material"
import { useState } from "react";
import { boxShadowHandler, customBoxShadow } from "../../../theme/theme";

const projectOne = {
    image: process.env.PUBLIC_URL + '/pone.png',
    description: 'Innovatio Legalis, the vanguard in legal case management, seamlessly integrates advocatus-clientum interfaces.',
    title: 'CaseLink!'
}

const projectTwo = {
    image: process.env.PUBLIC_URL + '/ptwo.png',
    description: 'Very cool way to play lotto!',
    title: 'Lottokeeper'
}



const ProjectElement = ({ project }) => {
    const theme = useTheme();
    return (
        <Box sx={{marginY: '6rem', width: '100%', boxShadow: boxShadowHandler(theme)}} >
            <Grid container spacing={5} display="flex" flexDirection="row" justifyContent="space-between" sx={{padding: 1}}>
                <Grid item xs={12} md={6}>
                    <img src={project.image} alt={project.title} style={{ 
                            maxWidth: '100%',   
                            maxHeight: '100%',  
                            height: 'auto',     
                            width: 'auto',      
                            objectFit: 'contain'
                        }} />
                </Grid>
                <Grid item xs={12} md={6} style={{ textAlign:'right', overflow: 'hidden'}} display="flex" justifyContent="normal" flexDirection="column" >
                    <Typography variant="h2"  >
                        {project.title}
                    </Typography>
                    <Typography variant="body1" style={{textAlign: 'left', paddingTop: '20px'}}>
                        {project.description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
};

const Projects = () => {
    const [projectList] = useState([projectOne, projectTwo]);
    
    return (
        <Box sx={{ width: '65%', height: '100%' }} display="flex" justifyContent="center" flexDirection="column" >
            <Box>
                {projectList && projectList.map((project, index) => (
                    <Box sx={{marginY: 3}} key={index}> <ProjectElement project={project} /> </Box>  
                ))}
            </Box>
        </Box>
    )

}

export default Projects