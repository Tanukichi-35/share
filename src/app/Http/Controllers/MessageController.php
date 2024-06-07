<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Message::all();
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
        $item = Message::create([
            'user_id' => Auth::id(),
            'text' => $request->text,
        ]);
        // $item = Message::create($request->all());
        return response()->json([
            'data' => $item
        ], 201);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        // $item = Message::find($message);
        if ($message) {
            return response()->json([
                'data' => $message
            ], 200);
        } else {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        $update = [
            'text' => $request->text,
            'status' => $request->status
        ];
        $item = Message::where('id', $message->id)->update($update);
        if ($item) {
            return response()->json([
                'message' => 'Updated successfully',
            ], 200);
        } else {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        $item = Message::where('id', $message->id)->delete();
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
    /**
     * get messages list.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $items = Message::all();
        if ($items) {
            foreach ($items as $item) {
                $list[] = [
                    'message' => $item,
                    'user' => $item->user,
                    'goods' => $item->goods,
                    'good_flag' => $item->goods->where('user_id', Auth::id())->isNotEmpty(),
                ];
            }
            return response()->json([
                'data' => $list,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
    }
    /**
     * get message detail.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function details(Message $message)
    {
        // $item = Message::find($message);
        if ($message) {
            $comments = [];
            if($message->comments){
                foreach ($message->comments as $comment) {
                    $comments[] = [
                        'comment' => $comment,
                        'user' => $comment->user,
                    ];
                }
            }
            $detail = [
                'message' => $message,
                'user' => $message->user,
                'goods' => $message->goods,
                'good_flag' => $message->goods->where('user_id', Auth::id())->isNotEmpty(),
                'comments' => $comments,
            ];
            return response()->json([
                'data' => $detail,
            ], 200);
        } else {
            return response()->json([
                'message' => 'Not found',
            ], 404);
        }
    }
}
