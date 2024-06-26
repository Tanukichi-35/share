<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'message_id',
    ];

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
