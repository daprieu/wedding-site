import CountdownTimer from "./components/countdownTimer";
import ImageGallery from "./components/ImageGallery";
import "./App.css"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  lineHeight: '60px',
}));


const lightTheme = createTheme({ palette: { mode: 'light' } });

function App() {
  return (
    <div className="App-container">
    <Grid container style={{justifyContent: 'center'}}>
        <Grid item >
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                
                bgcolor: 'background.default',
                display: 'grid',
                marginTop: 2,
                marginBottom: 2
                
              }}
            >
                <Item elevation={8}>
                  <div className="App-content" >
                  <h1 className="title top">Meredith Fifer</h1>
                  <h1 className="title">&</h1>  
                  <h1 className="title">Alex Prieu</h1>
                  <h2 className="date">March 19th, 2022</h2>
                  <CountdownTimer/>
                  <ImageGallery/>
                  </div>
                </Item> 
            </Box>
          </ThemeProvider>
        </Grid>
      
    </Grid>
    </div>
  );
}



// function App() {
//   return (
//     <div className="App" >
//       <h1 className="title">Meredith Fifer</h1>
//       <h1 className="title">&</h1>  
//       <h1 className="title">Alex Prieu</h1>
//       <h2 className="date">March 19th, 2022</h2>
//       <CountdownTimer/>
//       <ImageGallery/>
      
//     </div>
//   );
// }

export default App;
