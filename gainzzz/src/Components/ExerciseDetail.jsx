import { Box } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import { useState, useEffect } from 'react'
import axios from "axios";


const ExerciseDetail = () => {
const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
const getMuscleGroups = async () => {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    headers: {
      "X-RapidAPI-Key": "7555c9e913msh92629e7c5507e7cp1b8026jsna98c340ed373",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      const bodyPartData = response.data
      setBodyParts([...bodyPartData]);
      console.log(bodyPartData)
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  getMuscleGroups();
  }, [])
  




  return (
    <div>ExerciseDetail
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts}/>
      </Box>
    </div>
  )
}

export default ExerciseDetail