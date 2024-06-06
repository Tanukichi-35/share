<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $guarded = array('id');

    public static $rules = array(
        'user_id' => 'required',
        'text' => 'required'
    );

    // Userモデルとの紐づけ
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
