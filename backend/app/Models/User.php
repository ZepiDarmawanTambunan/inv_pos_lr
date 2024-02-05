<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'role_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getUserByEmailOrPhone($input) {
        if (array_key_exists('email', $input) || array_key_exists('phone', $input)) {
            return self::query()
                ->where(function ($query) use ($input) {
                    if (array_key_exists('email', $input)) {
                        $query->orWhere('email', $input['email']);
                    }
                    if (array_key_exists('phone', $input)) {
                        $query->orWhere('phone', $input['phone']);
                    }
                })
                ->first();
        }
        return null; // Atau sesuaikan dengan penanganan khusus yang sesuai.
    }
}
