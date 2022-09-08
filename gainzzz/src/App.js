import './App.css';
import { exerciseByID, findUser, getMuscleGroups, listAllWorkouts, listByBodyPart, listByEquipment, listOfEquipment, listOfTargetMuscles, listWorkoutsByTargetMuscle, setFavoriteWorkouts } from './actions/supabase';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import ExerciseDetail from './Components/ExerciseDetail'
import Footer from './Components/Footer'
import { LoginPage } from './Components/LoginPage'


function App() {
  console.log(process.env)
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exercise_details" element={<ExerciseDetail />}></Route>
        <Route path="/login_page" element={<LoginPage />}></Route>
      </Routes>
      <div className="App">
        GAINZZZ
        <button onClick={findUser}>find user</button>
        <button onClick={getMuscleGroups}>Get Generic Workouts</button>
        <button onClick={listByBodyPart}>list by body part</button>
        <button onClick={exerciseByID}>list exercise by ID</button>
        <button onClick={listOfTargetMuscles}>list of target muscles</button>
        <button onClick={listWorkoutsByTargetMuscle}>
          list workouts by target muscle
        </button>
        <button onClick={listAllWorkouts}>list all workouts </button>
        <button onClick={listOfEquipment}>list of equipment </button>
        <button onClick={listByEquipment}>list by equipment </button>
        <button onClick={setFavoriteWorkouts}>Add to Favorites </button>
      </div>
      <Footer />
    </Box>
  );
}

export default App;
