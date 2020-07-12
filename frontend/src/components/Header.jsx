//COMMON
import { MuiThemeProvider } from '@material-ui/core/styles'
import React,{ useState, useEffect  } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
//Assets
import me from '../assets/static/me.jpeg'
// App bar
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
//Tab Navigation
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
//Avatar
import Avatar from '@material-ui/core/Avatar'
//Divider
import Divider from '@material-ui/core/Divider'
//Menu
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
//Css
import { useStylesAppBar, useStylesNavigation, theme, StyledBadge } from '../assets/styles/components/Header'
import { useHistory } from 'react-router-dom'
//Redux
import { connect } from 'react-redux'
//Redux-actions
import { updateSelectedTab } from '../actions'


const Header = ({selectedTab,updateSelectedTab}) => {
  
  const history = useHistory()
  const classesAppBar = useStylesAppBar()
  const classesNavigation = useStylesNavigation()
  //For Tabs
  
  //For Menu
  const [anchorEl, setAnchorEl] = useState(null)
  
  
  const handleChangeTab = (event,newValue) => {
    
    if(newValue===0){
      history.push('/launcher')
    }
    if(newValue===1){
      history.push('/Destroy')
    }
    if(newValue===2){
      history.push('/settings')
    }
   
    updateSelectedTab(newValue)
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = (newValue) => {
    setAnchorEl(null)
  }

  const handleSelectItemMenu = (newValue) => {

    if(newValue===0){
      history.push('/launcher')
    }
    if(newValue===1){
      history.push('/Destroy')
    }
    if(newValue===2){
      history.push('/settings')
    }
    setAnchorEl(null)
    updateSelectedTab(newValue)
  }


  const handleLogout = (newValue) => {
    localStorage.clear()
    setAnchorEl(null)
    history.push('/login')
  }
  
  useEffect(() => { 
    // on Mount componenet verifiy secure token 
    if(!localStorage.getItem('secure')){
        //history.push('/login')
    }
 }, [history])
  
  return(
  <div>
    <div className={classesAppBar.root}>
       <AppBar className={classesAppBar.appBar} position="static">
         <Toolbar>
           <IconButton edge="start" className={classesAppBar.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
           </IconButton>
           
           <div className={classesAppBar.title}>
           <Typography color ='textPrimary' gutterBottom variant="h5">
            Launcher Tool
          </Typography>
           </div>
          
          
            {/* <Button selected variant="outlined" className={classesAppBar.button} >Settings</Button> */}
            <Button className={classesAppBar.button}  color="inherit">...</Button>
          
          <StyledBadge onClick={handleMenuOpen} overlap="circle" 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right',}} 
            variant="dot">
            <Avatar alt="Profile" src={me} />
          </StyledBadge>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={(e) => handleSelectItemMenu(0)}>Launch</MenuItem>
            <MenuItem onClick={(e) => handleSelectItemMenu(1)}>Destroy</MenuItem>
            <MenuItem onClick={(e) => handleSelectItemMenu(2)}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </div>

    <div className={classesNavigation.root}>
     <Container>
       <Grid container >
       <MuiThemeProvider theme={theme}>
            <Tabs  className={classesNavigation.BottomNavigation}
              value={selectedTab}
              indicatorColor="secondary"
              textColor="primary"
              onChange={handleChangeTab}
              
              >
              <Tab className={classesNavigation.BottomNavigationAction} label="Launch"/>
              <Tab className={classesNavigation.BottomNavigationAction} label="Destroy"/>
              <Tab className={classesNavigation.BottomNavigationAction} label="Settings"/>
            </Tabs>
          </MuiThemeProvider>
        </Grid>
      </Container>
    </div>
    
    <Divider />
  </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedTab : state.selectedTab
     }
 }


 export default connect(mapStateToProps,{ updateSelectedTab })( Header )
