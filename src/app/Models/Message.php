<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'text',
    ];

    public static $rules = array(
        'user_id' => 'required',
        'text' => 'required'
    );

    // Userモデルとの紐づけ
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    // Goodモデルとの紐づけ
    public function goods()
    {
        return $this->hasMany('App\Models\Good');
    }

    // Commentモデルとの紐づけ
    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }
}
