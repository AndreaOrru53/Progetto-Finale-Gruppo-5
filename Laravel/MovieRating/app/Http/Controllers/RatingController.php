<?php

namespace App\Http\Controllers;

use App\Models\Rating;
use Illuminate\Http\Request;
use App\Http\Resources\RatingCollection;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Resources\RatingResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function index()
    {
        return response()->Json(
            DB::table('ratings')->
            select('movie_id', 'movie_rating', 'user_id')->
            get(),
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->only([
                'movie_rating', 'movie_id', 'user_id'
            ]
        ),
            [
                'movie_rating' => 'required|integer|between:1, 5',
                'movie_id' => 'required|integer',
                'user_id' => 'required|integer'
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                $validator->errors(),
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $rating = Rating::create(
            $request->only(
                [
                    'movie_rating', 'movie_id', 'user_id'
                ]
            )
        );

        return response()->json([
            new RatingResource($rating),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rating  $rating
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function show(Rating $rating)
    {
        return response()->Json(
            [
                new RatingResource($rating),
                'Response Status' => Response::HTTP_OK
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rating  $rating
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function update(Request $request, Rating $rating)
    {
        $validator = Validator::make(
            $request->only([
                'movie_rating', 'movie_id', 'user_id'
            ]
        ),
            [
                'movie_rating' => 'required|integer|between:1, 5',
                'movie_id' => 'required|integer',
                'user_id' => 'required|integer'
            ]
        );

        if ($validator->fails()) {
            return response()->json(
                $validator->errors(),
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        $rating->update(
            $request->only(
                [
                    'movie_rating', 'movie_id', 'user_id'
                ]
            )
        );

        return response()->json([
            new RatingResource($rating),
            'Response Status' => Response::HTTP_OK
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rating  $rating
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function destroy(Rating $rating)
    {
        $rating->delete();

        return response()->json([
            'message' => 'Rating Deleted!',
            'Response Status' => Response::HTTP_NO_CONTENT
        ]);
    }

    /**
     * Get all movie ratings by their movie_id
     * 
     * @param  \App\Models\Rating  $rating
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function getMovieRatingsByMovieId($movie_id)
    {
    
        return response()->Json(
            [
                DB::table('ratings')->
                select('movie_rating')->
                where('movie_id', '=', $movie_id)->
                get(),

                'Response Status' => Response::HTTP_OK
            ]
        );
    }

    /**
     * Get all movie ratings by their user_id
     * 
     * @param  \App\Models\Rating  $rating
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function getMovieRatingsByUserId($user_id)
    {
    
        return response()->Json(
            [
                DB::table('ratings')->
                select('movie_rating')->
                where('user_id', '=', $user_id)->
                get(),

                'Response Status' => Response::HTTP_OK
            ]
        );
    }

    /**
     * Get all movie ratings by their user_id AND movie_id
     * 
     * @param  \App\Models\Rating  $rating
     * @return 'Illuminate\Http\JsonResponse'
     */
    public function getMovieRatingsByUserIdAndMovieId($user_id, $movie_id)
    {
    
        return response()->Json(
            DB::table('ratings')->
            select('movie_id', 'movie_rating', 'user_id')->
            where('user_id', '=', $user_id)->
            where('movie_id', '=', $movie_id)->
            get()->first()       
        );
    }
}

