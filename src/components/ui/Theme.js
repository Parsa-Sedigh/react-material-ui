import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#ffBA60';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
});
