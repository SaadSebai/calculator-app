<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BasicCalculatorController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('BasicCalculator');
    }
}
