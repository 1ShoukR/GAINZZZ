import React, { useState } from 'react'
import { addToFavorites } from '../../actions/supabase_client'
import { markFavorites } from '../../actions/searchExercises_client'
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setFavWorkouts } from '../../actions/workoutBuilder'
import { Button } from '@mui/material'

export default function FavoriteButton(prop) {
    const setOpen = prop.setOpen
    const dispatch = useDispatch()
    let favorites = useSelector(
        state => state.favoriteWorkouts.favoriteWorkouts
    )
    const [favList, setFavList] = useState(favorites)
    const isFav = markFavorites(favList, prop?.exercise?.id)
    const [favCheck, setFavCheck] = useState(false)
    useEffect(
        () => {
            setFavWorkouts(dispatch)
        },
        // eslint-disable-next-line
        []
    )
    useEffect(() => {
        setFavList(favorites)
        setFavCheck(isFav)
    }, [favorites, isFav])
    return (
        <>
            <Button
                className="exerciseCardButton"
                variant="outlined"
                size="small"
                disabled={Boolean(favCheck)}
                onClick={() => {
                    addToFavorites(prop.exercise.id, setOpen)
                    setFavWorkouts(dispatch)
                }}
            >
                {favCheck === true ? (
                    <FavoriteSharpIcon />
                ) : (
                    <FavoriteTwoToneIcon />
                )}
            </Button>
        </>
    )
}
