<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'text' => 'required|string|max:120',
        ];
    }

    public function messages()
    {
        return [
            'text.required' => '投稿内容を入力してください',
            'text.string' => '投稿内容は文字列で入力してください',
            'text.max' => '投稿内容は120文字以内です',
        ];
    }
}
