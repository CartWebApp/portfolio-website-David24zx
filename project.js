function playClick() {
      const clickSound = document.getElementById("click-sound");
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
    }

    function attachClickSoundToAll() {
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("click", playClick);
      });
    }

    // Run this after the DOM loads
    document.addEventListener("DOMContentLoaded", () => {
      attachClickSoundToAll();

      const buttons = document.querySelectorAll('.tab-button');
      const tabs = document.querySelectorAll('.tab-content');

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          // Tab button styling
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          // Tab content toggling
          const tabId = button.getAttribute('data-tab');
          tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === tabId) {
              tab.classList.add('active');
            }
          });
        });
      });
    });