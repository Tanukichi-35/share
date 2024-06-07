<?php

namespace App\Http\Controllers;

use App\Models\Good;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Good::all();
        return response()->json([
            'data' => $items
        ], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $item = Good::create([
            'user_id' => Auth::id(),
            'message_id' => $request->message_id,
        ]);
        // $item = Good::create($request->all());
        return response()->json([
            'data' => $item
        ], 201);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Good  $good
     * @return \Illuminate\Http\Response
     */
    public function show(Good $good)
    {
        $item = Good::find($good);
        if ($item) {
            return response()->json([
                'data' => $item
            ], 200);
        } else {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
    }
    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Models\Good  $message
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, Good $good)
    // {
    //     $update = [
    //     ];
    //     $item = Good::where('id', $good->id)->update($update);
    //     if ($item) {
    //         return response()->json([
    //             'message' => 'Updated successfully',
    //         ], 200);
    //     } else {
    //         return response()->json([
    //             'message' => 'Not found',
    //         ], 404);
    //     }
    // }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $message_id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $message_id)
    {
        $item = Good::where('message_id', $message_id)->Where('user_id', Auth::id())->delete();
        if ($item) {
            return response()->json([
                'message' => 'Deleted successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
    }
}
