import { makeStyles,withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

export const useStylesAppBar = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar:{
        boxShadow: "none",
        backgroundColor: 'transparent'
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color : '#343a40'
    },
    title: {
        flexGrow: 1,
        color: '#000000'
    },
    button:{
        color: '#666',
        textTransform : 'none'
    }
    
}));

export const useStylesNavigation = makeStyles((theme) => ({
    root: {
      flexGrow: 1, 
      marginTop: theme.spacing(-3)
    },
    
    BottomNavigation:{
      outline: 'none',
        '& button': {
          minWidth: 50
        }
    },
    BottomNavigationAction : {
      color: '#666',
      textTransform : 'none',
      outline: 'none',                                                                   
    }
  }));

export const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

// Create Own theme:
export const theme = createMuiTheme({
  
    palette: {
      secondary: {
        main: '#000000'
      },
      primary :{
        main:'#666'
      }
    }
  });
  

