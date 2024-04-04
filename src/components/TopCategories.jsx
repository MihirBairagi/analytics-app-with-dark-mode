import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { yesterdayCategoriesData, sevenDaysCategoriesData, thirtyDaysCategoriesData } from '../data/listingData'; 




function Categories({ priceTag, categoryName, categoryIcon }) {
  return (
 
      <Box component='li'>
        <Box className='img-box' >
            <img className='w-100' src={categoryIcon} alt="user-image" />
        </Box>
        <Typography variant="p" component="p" >{categoryName}</Typography>
        <Box className='price-tag-box' >
            <Typography variant="h4">{priceTag}</Typography>
        </Box>
      </Box>

  );
}

function TopCategories({ categoriesData, selectedDay }) {

  let data;
  if (selectedDay === 20) {
    data = yesterdayCategoriesData;
  } else if (selectedDay === 30) {
    data = sevenDaysCategoriesData;
  } else if (selectedDay === 40) {
    data = thirtyDaysCategoriesData;
  } else {
    data = categoriesData; 
  }



  return (
    <Box component='div' className='categories-box text-center'>
      <Typography variant="h4" className='head-box'>
        Top 3 Categoires
      </Typography>

        <Box className='categories-listing flex-box justify-between align-center mt-2' component='ul' >

            {data.map((categories, index) => (
                <Categories
                key={index}
                categoryName={categories.categoryName}
                priceTag={categories.priceTag}
                categoryIcon={categories.categoryIcon}
                />
                ))}
        </Box>
    </Box>
  );
}

export default TopCategories;
