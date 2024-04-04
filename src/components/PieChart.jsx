import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Chart } from "react-google-charts";
import { yesterdayGenderData, sevenDaysGenderdata, thirtyDaysGenderdata } from '../data/listingData'; 

export const data = [
  ["Task", "Hours per Day"],
  ["Male", 25],
  ["Female", 60],
  ["Other", 15],
];

export const options = {
  pieHole: 0.4,
  is3D: false,
  colors: ["#1F145E", "#FB8DB3", "#566FFE"],
  legend: "none",
  chartArea: {
    left: "0%",
    top: "7%",
    width: "100%",
    height: "80%",
  },
};

const styles = {
  listItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "#485058",
    marginBottom: "1rem",
    "@media (max-width: 600px)": {
      justifyContent: "flex-start",
      width: "30%",
    },
  },
  listItemBefore: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "10px",
  },
};

const PieArcLabel = ({ genderData, selectedDay }) => { // Accept genderData as a prop
  return (
    <Box component="div">
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Gender Ratio Title and List */}
        <Box
          component="div"
          sx={{
            width: "40%",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            className="heading-h4"
            sx={{ marginBottom: { xs: '3rem', sm: '5rem' } }}
          >
            Gender Ratio
          </Typography>
          <Box
            component="ul"
            sx={{
              "@media (max-width: 600px)": {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              },
            }}
          >
            <Box component="li" sx={styles.listItem}>
              <Box sx={{ ...styles.listItemBefore, backgroundColor: "#1F145E" }}></Box>
              Male
            </Box>
            <Box component="li" sx={styles.listItem}>
              <Box sx={{ ...styles.listItemBefore, backgroundColor: "#FB8DB3" }}></Box>
              Female
            </Box>
            <Box component="li" sx={styles.listItem}>
              <Box sx={{ ...styles.listItemBefore, backgroundColor: "#566FFE" }}></Box>
              Other
            </Box>
          </Box>
        </Box>

        {/* Pie Chart */}
        <Box
          component="div"
          sx={{
            width: "60%",
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          <Chart
            chartType="PieChart"
            width="100%"
            height="250px"
            data={genderData} 
            options={options}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PieArcLabel;