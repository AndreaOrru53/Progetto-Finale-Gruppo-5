import express from "express";

import { 
    getAllFavouritesMovies,
    getFavouriteMovieById,
    createFavouriteMovie,
    updateFavouriteMovie,
    deleteFavouriteMovie,
    getFavouriteMovieByMovieId,
    getFavouriteMovieByUserId,
    getFavouriteMovieByUserIdMovieId,
    deleteFavouriteMovieByUserIdMovieID
 } from "../controllers/node-controller.js";
 
const router = express.Router();
 
router.get('/favouritemovie', getAllFavouritesMovies);
router.get('/favouritemovie/:id', getFavouriteMovieById);
router.get('/favouritemoviebm/:movie_Id', getFavouriteMovieByMovieId);
router.get('/favouritemoviebu/:user_Id', getFavouriteMovieByUserId);
router.get('/favouritemoviebmu/:user_Id/:movie_Id', getFavouriteMovieByUserIdMovieId);
router.post('/favouritemovie', createFavouriteMovie);
router.put('/favouritemovie/:id', updateFavouriteMovie);
router.delete('/favouritemovie/:id', deleteFavouriteMovie);
router.delete('/favouritemovie/:user_Id/:movie_Id',deleteFavouriteMovieByUserIdMovieID);
 
export default router;