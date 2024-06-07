<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $guarded = array('id');
    protected $fillable = [
        'user_id',
        'message_id',
        'text',
    ];

    public static $rules = array(
        'user_id' => 'required',
        'message_id' => 'required',
        'text' => 'required'
    );

    // Userモデルとの紐づけ
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    // Messageモデルとの紐づけ
    public function message()
    {
        return $this->belongsTo('App\Models\Message');
    }
}
