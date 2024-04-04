import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function BasicSelect({ selectedDay, handleChangeDay }) {

  const renderValue = (value) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CalendarTodayOutlinedIcon sx={{ marginRight: 1 }} />
      {value === 10
        ? 'Today'
        : value === 20
        ? 'Yesterday'
        : value === 30
        ? '7 Days'
        : '30 Days'}
    </Box>
  );

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      {/* <InputLabel id="demo-simple-select-label">Select Day</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedDay}
          onChange={handleChangeDay}
          IconComponent={KeyboardArrowDownIcon}
          renderValue={renderValue}
        >
          <MenuItem value={10}>Today</MenuItem>
          <MenuItem value={20}>Yesterday</MenuItem>
          <MenuItem value={30}>7 Days</MenuItem>
          <MenuItem value={40}>30 Days</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
