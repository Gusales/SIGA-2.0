<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Auth/Login');
});

// ! TODAS ESSAS ROTAS DEVEM VOLTAR A ESTAR AUTENTICADAS APÓS O BACKEND ESTIVER PRONTO!
// ADICIONAR ->middleware(['auth', 'verified'])

Route::get(uri: '/aluno/home', action: function () {
  return Inertia::render('Aluno/Home');
})->name(name: "aluno/home");

Route::get(uri: '/aluno/notas', action: function () {
  return Inertia::render('Aluno/Notas');
})->name(name: "aluno/notas");

Route::get(uri: '/aluno/consulta', action: function () {
  return Inertia::render('Aluno/Consulta');
})->name(name: "aluno/consulta");

Route::get(uri: '/aluno/solicitacoes', action: function () {
  return Inertia::render('Aluno/Solicitacoes');
})->name(name: "aluno/solicitacoes");

Route::get(uri: '/aluno/disciplinas', action: function () {
  return Inertia::render('Aluno/Disciplinas');
})->name(name: "aluno/disciplinas");

Route::get(uri: '/aluno/faltas', action: function () {
  return Inertia::render('Aluno/FaltasParciais');
})->name(name: "aluno/faltas");

Route::get(uri: '/aluno/historico', action: function () {
  return Inertia::render('Aluno/Historico');
})->name(name: "aluno/historico");

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
