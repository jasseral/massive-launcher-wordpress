import React , {useState}  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import { MuiThemeProvider } from '@material-ui/core/styles'


import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

//css
import { useStyles,theme } from './style'



const axios = require('axios')

export default function OutlinedButtons() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [result1, setResult1] = useState(null)
    const [result2, setResult2] = useState(null)

    
  const handleDestroy = () => {
    // Make a request for a user with a given ID
    setOpen(true)
    axios.get('http://34.122.20.65:3001/terraform/destroy').then(data => {  
        setResult1(data.data.stdAppend.toString()) 
      axios.get('http://34.122.20.65:3001/docker/down').then(data => {  
        setOpen(false)
        setResult2(data.data.stdAppend.toString()) 
      })

    })
  }
    
    
    return (
        <div className={classes.root}>
             <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
        Destroy 
        </Typography> 
        <MuiThemeProvider theme={theme}>     
        <Button  onClick={handleDestroy} className={classes.button} color="primary" variant="contained">Destroy</Button>
        </MuiThemeProvider>
        <div>
        {result1}
        </div>
        <div>
        {result2}  
        </div>
        </Container>
        
        
        </div>
        
        )
    }
    
    