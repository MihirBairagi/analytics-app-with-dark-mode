import React, { useState } from 'react';
import '../assets/css/App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicSelect from '../components/Select';
import ListingCard from '../components/ListingCard';
import Grid from '@mui/material/Grid';
import TopUniversities from '../components/TopUniversities';
import TopSellers from '../components/TopSellers';
import PieArcLabel from '../components/PieChart';
import TopCategories from '../components/TopCategories';

import {
  listingData,
  universitiesData,
  sellersData,
  categoriesData,
  transactionData,
  genderData,
  yesterdayListingData,
  yesterdayUniversitiesData,
  yesterdaySellersData,
  yesterdayCategoriesData,
  yesterdayTransactionData,
  yesterdayGenderData,
  sevenDaysListingData,
  sevenDaysUniversitiesData,
  sevenDaysCategoriesData,
  sevenDaysSellersData,
  sevenDaysTransactionData,
  sevenDaysGenderdata,
  thirtyDaysListingData,
  thirtyDaysUniversitiesData,
  thirtyDaysSellersData,
  thirtyDaysCategoriesData,
  thirtyDaysTransactionData,
  thirtyDaysGenderdata
} from '../data/listingData';

const App = () => {
  const [selectedDay, setSelectedDay] = useState(10);

  const dataSources = {
    10: {
      listing: listingData,
      universities: universitiesData,
      sellers: sellersData,
      categories: categoriesData,
      transaction: transactionData,
      gender: genderData,
    },
    20: {
      listing: yesterdayListingData,
      universities: yesterdayUniversitiesData,
      sellers: yesterdaySellersData,
      categories: yesterdayCategoriesData,
      transaction: yesterdayTransactionData,
      gender: yesterdayGenderData,
    },
    30: {
      listing: sevenDaysListingData,
      universities: sevenDaysUniversitiesData,
      sellers: sevenDaysSellersData,
      categories: sevenDaysCategoriesData,
      transaction: sevenDaysTransactionData,
      gender: sevenDaysGenderdata,
    },
    40: {
      listing: thirtyDaysListingData,
      universities: thirtyDaysUniversitiesData,
      sellers: thirtyDaysSellersData,
      categories: thirtyDaysCategoriesData,
      transaction: thirtyDaysTransactionData,
      gender: thirtyDaysGenderdata,
    },
  };

  const selectedData = dataSources[selectedDay];

  const handleChangeDay = (event) => {
    setSelectedDay(event.target.value);
  };

  const transactionDataSources = {
    10: transactionData,
    20: yesterdayTransactionData,
    30: sevenDaysTransactionData,
    40: thirtyDaysTransactionData,
  };

  return (
    <Box component="div" className='analytics-section'>
      <Box component="div" className='border-bg'>
        <Box
          component="div"
          className="day-selection-box justify-between"
          container
          spacing={3}
          sx={{
            display: 'flex',
          }}
        >
          <Box component="div" item xs={12}>
            <Typography variant="h4" className='heading-h4'>
              Rummy App Analytics
            </Typography>
          </Box>
          <Box component="div" item xs={12}>
            <BasicSelect selectedDay={selectedDay} handleChangeDay={handleChangeDay} />
          </Box>
        </Box>

        {/* Card Listing */}
        <Box component="ul" className='card-listing flex-box align-center'>
          {selectedData.listing.map((item, index) => (
            <ListingCard
              key={index}
              label={<p dangerouslySetInnerHTML={{ __html: item.label }} />}
              value={item.value}
            />
          ))}
        </Box>

        {/* Top 5 Universities and Sellers */}
        <Grid container columns={16}>
          <Grid item xs={8} sx={{
            "@media (max-width: 900px)": {
              maxWidth: "100%",
              flexBasis: '100%',
              marginBottom: '4rem',
            },
          }} >
            <TopUniversities universitiesData={universitiesData} selectedDay={selectedDay} />
          </Grid>
          <Grid item xs={8} sx={{
            "@media (max-width: 900px)": {
              maxWidth: "100%",
              flexBasis: '100%',
            },
          }} >
            <TopSellers sellersData={sellersData} selectedDay={selectedDay} />
          </Grid>
        </Grid>

        {/* Pie Chart and Categories */}
        <Grid container columns={16} className='mt-4'>
          <Grid item xs={8} className='piechart-box' sx={{
            "@media (max-width: 900px)": {
              maxWidth: "100%",
              flexBasis: '100%',
            },
          }} >
            <PieArcLabel genderData={selectedData.gender} selectedDay={selectedDay} />
          </Grid>
          <Grid item xs={8} sx={{
            "@media (max-width: 900px)": {
              maxWidth: "100%",
              flexBasis: '100%',
            },
          }} >
            <TopCategories categoriesData={categoriesData} selectedDay={selectedDay} />
          </Grid>
        </Grid>

        {/* Transaction Details */}
        <Box className='transaction-card-box mt-3'>
          <Typography variant="h4" className='heading-h4'>
            Transaction Details
          </Typography>
          <Box component="ul" className='transaction-card-listing card-listing flex-box align-center'>
            {transactionDataSources[selectedDay].map((item, index) => (
              <ListingCard
                key={index}
                label={<p dangerouslySetInnerHTML={{ __html: item.label }} />}
                value={item.value}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
