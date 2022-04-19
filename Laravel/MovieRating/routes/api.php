<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RatingController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/ratings', RatingController::class);

Route::get('/ratings/movie/id/{movie_id}', [RatingController::class, 
    'getMovieRatingsByMovieId']);

Route::get('/ratings/user/id/{user_id}', [RatingController::class, 
    'getMovieRatingsByUserId']);

Route::get('/ratings/user/and/movie/id/{user_id}/{movie_id}', [RatingController::class, 
    'getMovieRatingsByUserIdAndMovieId']);
