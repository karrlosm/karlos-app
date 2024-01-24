import { typography } from './typography';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createTypography' {
    interface FontStyle {
        fontWeightSemiBold: number;
    }
}

const theme = createTheme({
    typography: {
        ...typography.typography,
        fontWeightSemiBold: 600,

    },
});

export { theme }