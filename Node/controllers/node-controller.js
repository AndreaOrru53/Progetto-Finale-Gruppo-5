import FavouriteMovie from "../model/FavouritesMovie.js";

export const getAllFavouritesMovies = async (req, res) => {
    try {
        const movie = await FavouriteMovie.findAll();
        res.send(movie);
    } catch (err) {
        console.log(err);
    }
}

export const getFavouriteMovieById = async (req, res) => {
    try {
        const movie = await FavouriteMovie.findOne({
            where: {
                id: req.params.id
            }
        });
        
        if (movie) {
            res.send(movie);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}
export const getFavouriteMovieByMovieId = async (req, res) => {
    try {
        const movie = await FavouriteMovie.findOne({
            where: {
                movie_id: req.params.movie_Id
            }
        });
        
        if (movie) {
            res.send(movie);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getFavouriteMovieByUserId = async (req, res) => {
    try {
        const movie = await FavouriteMovie.findAll({
            where: {
                user_id: req.params.user_Id                
            }
        });
        
        if (movie) {
            res.send(movie);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getFavouriteMovieByUserIdMovieId = async (req, res) => {
    try {
        const movie = await FavouriteMovie.findOne({
            where: {
                user_id: req.params.user_Id,
                movie_id: req.params.movie_Id
            }
        });
        
        if (movie) {
            res.send(movie);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createFavouriteMovie = async (req, res) => {
    try {
        const foavouMovie= await FavouriteMovie.create(req.body);
        res.json({
            "message": "Favourite Movie Created",
            "data": foavouMovie
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateFavouriteMovie = async (req, res) => {
    try {
        await FavouriteMovie.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Favourite Movie Updated"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteFavouriteMovie = async (req, res) => {
    try {
        await FavouriteMovie.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Favourite Movie Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}