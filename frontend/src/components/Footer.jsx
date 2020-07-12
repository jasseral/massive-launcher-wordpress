//COMMON
import React,{ useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { useHistory } from 'react-router-dom'

//css
import { useStyles } from '../assets/styles/components/Footer'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
      ZestAds
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Footer() {

  const classes = useStyles()   
  const history = useHistory()
 
  useEffect(() => { 
    // on Mount componenet verifiy secure token 
    if(!localStorage.getItem('secure')){
        //history.push('/login')
    }
 }, [history])

  
  return(
    <div className={classes.root}>
    
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">ZestAds Limited.</Typography>
        <Copyright />
      </Container>
    </footer>
  </div>
  )
}