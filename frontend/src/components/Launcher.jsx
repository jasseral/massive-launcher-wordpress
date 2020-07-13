import React , { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import { MuiThemeProvider } from '@material-ui/core/styles'

//css
import { useStyles,theme } from './style'
//Select
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

import Stepper from './Stepper'
import Accordion from './Accordion'


const axios = require('axios')


export default function OutlinedButtons() {
  const classes = useStyles()

  
  const [location, setLocation] = useState('')
  const [buttons, setbuttons] = useState(true)
  const [result1, setResult1] = useState(null)
  const [result2, setResult2] = useState(null)
  const [ip, setIp] = useState(null)
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)

  const [showStepper, setshowStepper] = useState(false)
  
  const handleChange = (event) => {
    if(event.target.value){
      setbuttons(false) 
    }
    setLocation(event.target.value)
    
  }
  
  const handleCreate = () => {
    // Make a request for a user with a given ID
    setshowStepper(true)
    setOpen(true)
    setbuttons(true)
    axios.get('http://54.165.140.202:3001/terraform/create').then(data => {  
      setResult1(data.data.stdAppend.toString())
      setIp(data.data.clean.toString())
      setStep(1)
     
      axios.get(`http://54.165.140.202:3001/ansible/up/${ip}`).then(data => {  
        setStep(2)
        setResult2(data.data.stdAppend.toString()) 
        setOpen(false)
        setbuttons(false)
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
    Launch WordPress 
    </Typography>      
    
    {/* <Typography variant="body1">Alternative advertising network.</Typography> */}
    
    <Grid container spacing={2} >
    <Grid item xs = {12}>
    <Typography variant="h6" component="h2" gutterBottom>
    {`Select the number of servers to deploy`}
    </Typography>
    
    <MuiThemeProvider theme={theme}>
    
    <FormControl className={classes.formControl}>
    <InputLabel>Servers</InputLabel>
    <Select
    value={location}
    onChange={handleChange}
    >
    <MenuItem value={1}>1</MenuItem>
    </Select>

    </FormControl>
    </MuiThemeProvider>

    </Grid>

    <Grid item xs = {12}>
    <Typography variant="h6" component="h2" gutterBottom>
    {`Select the instance type`}
    </Typography>
    
    <MuiThemeProvider theme={theme}>
    
    <FormControl className={classes.formControl}>
    <InputLabel>Instance Type</InputLabel>
    <Select
    value={location}
    onChange={handleChange}
    >
    <MenuItem value={1}>t3.medium</MenuItem>
    </Select>

    </FormControl>
    </MuiThemeProvider>

    </Grid>
    

    <Grid item xs = {12}>
    <Typography variant="h6" component="h2" gutterBottom>
    {`Select the number of sites to deploy`}
    </Typography>
    
    <MuiThemeProvider theme={theme}>
    
    <FormControl className={classes.formControl}>
    <InputLabel>Sites</InputLabel>
    <Select
    value={location}
    onChange={handleChange}
    >
    <MenuItem value={1}>1</MenuItem>
    </Select>

    </FormControl>
    </MuiThemeProvider>

    </Grid>
    
    <Grid item xs = {12}>
    {showStepper?<Stepper step={step}/>:''}
    {showStepper?<Accordion message1={result1} message2={result2} ip = {ip} />:''}
    </Grid>

    <Grid item>
    <div>
    <MuiThemeProvider theme={theme}>
    {/* <Button onClick={(e) => {history.push('/')}} className={classes.button} color="secondary" size="medium" variant="outlined">To back</Button> */}
    <Button disabled={buttons} onClick={handleCreate} className={classes.button} color="primary" variant="contained">Create</Button>
    </MuiThemeProvider>
    </div> 
    

    </Grid>
    </Grid>      
    </Container>
    </div>
    
    )
  }
  
  