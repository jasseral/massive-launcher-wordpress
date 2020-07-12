import React  from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

//css
import { useStyles } from './style'



export default function OutlinedButtons() {
    const classes = useStyles()
    
    
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom>
        Settings 
        </Typography>  
        
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
        <Grid item >
        <TextField   
            label="Provider"
            defaultValue="Amazon services"
            InputProps={{
                readOnly: true,
            }}
        />
        </Grid>

        <Grid item>
        <TextField
            
            label="aws_access_key_id"
            defaultValue="AKIA4MTAVGEM43NMRGU"
            InputProps={{
                readOnly: true,
            }}
        />
        </Grid>

        <Grid item>
        <TextField
            
            label="aws_secret_access_key"
            defaultValue="IWCsujeaw153C4YoiICNNc+6CQ3NdGtHjr5CMc"
            InputProps={{
                readOnly: true,
            }}
        />
        </Grid>
        
        </Grid>
        
        </Container>
        </div>
        
        )
    }
    
    