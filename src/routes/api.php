<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\GoodController;
use App\Http\Controllers\CommentController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/user', UserController::class);
    Route::apiResource('/message', MessageController::class);
    Route::apiResource('/good', GoodController::class);
    Route::apiResource('/comment', CommentController::class);

    Route::get('/authUser', function () {
        return Auth::user();
    });

    Route::get('/messageList', [
        MessageController::class, 'list'
    ]);

    Route::get('/messageDetails/{message}', [
        MessageController::class, 'details'
    ]);
});
