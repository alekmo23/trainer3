// main.js - основной файл скриптов

document.addEventListener('DOMContentLoaded', function() {
  // Инициализация переключения между режимами
  const practiceModeBtn = document.getElementById('practice-mode');
  const testModeBtn = document.getElementById('test-mode');
  
  if (practiceModeBtn) {
    practiceModeBtn.addEventListener('click', function() {
      window.location.href = 'practice-mode.html';
    });
  }
  
  if (testModeBtn) {
    testModeBtn.addEventListener('click', function() {
      window.location.href = 'test-mode.html';
    });
  }
  
  // Дополнительная инициализация
  console.log('App initialized');
});

// Функция для администратора (доступна в консоли)
function resetStatistics() {
  if (window.statsTracker) {
    if (confirm('Вы уверены, что хотите сбросить всю статистику?')) {
      window.statsTracker.resetStats();
    }
  } else {
    console.error('StatsTracker not found');
  }
}