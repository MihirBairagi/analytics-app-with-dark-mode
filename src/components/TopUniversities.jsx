import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { yesterdayUniversitiesData, sevenDaysUniversitiesData, thirtyDaysUniversitiesData } from '../data/listingData'; 


const tableHeaders = ['College Name', 'User Count', 'ML', 'RL'];

function University({ collageName, userCount, marketListing, rentalListing }) {
  return (
    <Box component='ul' className='university-box flex-box justify-between'>
      <Box component='li'>
        <Typography variant="h4">{collageName}</Typography>
      </Box>
      <Box component='li'>
        <Typography variant="h4">{userCount}</Typography>
      </Box>
      <Box component='li'>
        <Typography variant="h4">{marketListing}</Typography>
      </Box>
      <Box component='li'>
        <Typography variant="h4">{rentalListing}</Typography>
      </Box>
    </Box>
  );
}

function TopUniversities({ universitiesData, selectedDay }) {

  let data;
  if (selectedDay === 20) {
    data = yesterdayUniversitiesData;
  } else if (selectedDay === 30) {
    data = sevenDaysUniversitiesData;
  } else if (selectedDay === 40) {
    data = thirtyDaysUniversitiesData;
  } else {
    data = universitiesData; 
  }



  return (
    <Box component='div' className='university-box text-center'>
      <Typography variant="h4" className='head-box'>
        Top 5 Universities By User Count
      </Typography>

      <Box component='ul' className='table-box flex-box justify-between'>
        {tableHeaders.map((header, index) => (
          <Box component='li' key={index}>
            <Typography component="p">{header}</Typography>
          </Box>
        ))}
      </Box>

      {data.map((university, index) => (
        <University
          key={index}
          collageName={university.collageName}
          userCount={university.userCount}
          marketListing={university.marketListing}
          rentalListing={university.rentalListing}
        />
      ))}
    </Box>
  );
}

export default TopUniversities;
