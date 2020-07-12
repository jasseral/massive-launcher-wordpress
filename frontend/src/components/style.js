import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    button :{
      width : 140,
      height : 38,
      textTransform : 'none',
      marginLeft : 20
    },
    formControl: {
        width: '100%',
        marginBottom: theme.spacing(4),
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      
  }))


// Create Own theme:
export const theme = createMuiTheme({

  MuiOutlinedInput: {
    root: {
      "& $notchedOutline": {
        borderColor: "#000000"
      },
      "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
        borderColor: "#000000",
        borderWidth: 2
      },
      "&$focused $notchedOutline": {
        borderColor: "#000000"
      }
    },
    notchedOutline: {}
  },
  MuiSelect: {
    icon: {
      fill: "#000000"
    }
  },
  
  palette: {
    secondary: {
      main: '#000000'
    },
    primary :{
      main:'#000000'
    }
  }
});