import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';





  

function ListingCard({value, label}) {
    return (
   
        <Box component='li' className='listing-card'>
             
                    {label}
               
                <Typography variant="h3">
                    {value}
                </Typography>
          
        </Box>
  
    );
  }
  
  export default ListingCard;