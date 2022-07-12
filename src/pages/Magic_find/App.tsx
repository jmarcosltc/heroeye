import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Calculator from '../../components/Calculator';
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'Calculator - HeroEye';
  });
  
  return (
    <>
      <div className="App" style={{
        backgroundImage: ""
      }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6}>
            
            <Card sx={{ minWidth: 275, borderRadius: '3px', boxShadow: 3, margin: '25px', paddingLeft: '40px', paddingRight: '40px' }}>
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
    </>
  );
}

export default App;
