import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { sevenDaysSellersData, thirtyDaysSellersData, yesterdaySellersData } from '../data/listingData';

const tableHeaders = ['User', 'Email', 'ML', 'RL', 'Payout'];

function Sellers({ userImage, collageName, userCount, marketListing, rentalListing }) {
  return (
    <Box component='ul' className='sellers-box flex-box justify-between align-center'>
      <Box component='li'>
        <img className='w-100' src={userImage} alt="user-image" />
      </Box>
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

function TopSellers({ sellersData, selectedDay }) {

    let data;
        if (selectedDay === 20) {
            data = yesterdaySellersData;
        } else if (selectedDay === 30) {
            data = sevenDaysSellersData;
        } else if (selectedDay === 40) {
            data = thirtyDaysSellersData;
        } else {
            data = sellersData; 
        }


  return (
    <Box component='div' className='sellers-box text-center'>
      <Typography variant="h4" component='h4' className='head-box'>
        Top 5 Sellers
      </Typography>

      <Box className='border-box'>
        <Box component='ul' className='table-box flex-box justify-between'>
          {tableHeaders.map((header, index) => (
            <Box component='li' key={index}>
              <Typography component="p">{header}</Typography>
            </Box>
          ))}
        </Box>

        {data.map((sellers, index) => (
          <Sellers
            key={index}
            userImage={sellers.userImage}
            collageName={sellers.collageName}
            userCount={sellers.userCount}
            marketListing={sellers.marketListing}
            rentalListing={sellers.rentalListing}
          />
        ))}
      </Box>
    </Box>
  );
}

export default TopSellers;
