// Refactor Codex - 07/06/2025
document.addEventListener('DOMContentLoaded', () => { // Codex
  const words = ['{{ settings.word1 }}', '{{ settings.word2 }}', '{{ settings.word3 }}']; // Codex
  const element = document.getElementById('alternating-words'); // Codex
  const interval = {{ settings.interval | times: 1000 }}; // Codex
  let index = 0; // Codex
  function changeWord() { // Codex
    element.classList.remove('fade'); // Codex
    void element.offsetWidth; // Codex
    element.textContent = words[index]; // Codex
    element.classList.add('fade'); // Codex
    index = (index + 1) % words.length; // Codex
  } // Codex
  changeWord(); // Codex
  setInterval(changeWord, interval); // Codex
}); // Codex
