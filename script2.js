const worldElements = document.querySelectorAll('.world');
let selected = document.querySelector('.world.selected');

worldElements.forEach(world => {
  world.addEventListener('click', () => {
    if (selected) selected.classList.remove('selected');
    world.classList.add('selected');
    selected = world;
  });
});

function playWorld() {
  if (!selected) return;

  // Show loading screen
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.display = 'block';

  // Simulate loading delay
  const target = selected.getAttribute('data-target');
  setTimeout(() => {
    window.location.href = target;
  }, 3000); // 3 seconds loading
}
