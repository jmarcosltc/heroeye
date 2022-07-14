import { Card, CardContent, Grid, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import React, { useEffect } from 'react';
import Calculator from '../../components/Calculator';
import Navbar from '../../components/Navbar';
import './App.css';

// npm run deploy -- -m "example"

function App() {

  useEffect(() => {
    document.title = 'Calculator - HeroEye';
  });
  
  return (
    <>
    <Navbar></Navbar>
      <div className="App">
        
        <div className="calculator" style={{
          
        }}></div>

        
        <div className='content'>
          
        
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          
        >
          <Grid item xs={6}>
            
            <Card sx={{ minWidth: 275, borderRadius: '3px', boxShadow: 9, margin: '25px', paddingLeft: '30px', paddingRight: '30px' }}>
            <CardContent>
              <Calculator></Calculator>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
          </Grid>
      </Grid>
      </div>
          <footer>
            <p>© Created by Leat - 2022</p>
            <p>Discord: jleat#0414</p>
          </footer>
      </div>
    </>
  );
}

export default App;
