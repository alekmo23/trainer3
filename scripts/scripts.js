// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Режимы тренажера
  const learnMode = document.getElementById('learn-mode');
  const practiceMode = document.getElementById('practice-mode');
  const testMode = document.getElementById('test-mode');
  
  // Обработчики для перехода в разные режимы
  if (learnMode) {
    learnMode.addEventListener('click', () => {
      window.location.href = 'learn-mode.html';
    });
  }
  
  if (practiceMode) {
    practiceMode.addEventListener('click', () => {
      window.location.href = 'practice-mode.html';
    });
  }
  
  if (testMode) {
    testMode.addEventListener('click', () => {
      window.location.href = 'test-mode.html';
    });
  }
  
  // Анимация при загрузке
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  // Подсветка карточек при наведении
  const cards = document.querySelectorAll('.mode-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
  });
});