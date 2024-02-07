import { styled } from "@mui/material/styles";
import { Switch, useTheme } from "@mui/material";

const SwitchButton = styled(Switch)(() => {
    const theme = useTheme();

    return {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color:  theme.palette.mode === 'dark' ? '#0B090A' : '#F6F4F1' ,
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ?  '#F6F4F1' : '#0B090A',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: theme.palette.mode === 'dark' ? '#0B090A' : '#F6F4F1',
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ?   '#F6F4F1' : '#0B090A',
            boxSizing: 'border-box',
        },

    }

});


  export default SwitchButton;