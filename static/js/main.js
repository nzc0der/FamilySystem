/**
 * Family Dashboard - Main UI Logic
 */

const UI = {
  init() {
    this.updateClock();
    this.updateGreeting();
    this.initModals();
    
    // Refresh clock every minute
    setInterval(() => this.updateClock(), 60000);
  },

  updateClock() {
    const dateEl = document.getElementById('date-display');
    if (dateEl) {
      const now = new Date();
      dateEl.textContent = now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  },

  updateGreeting() {
    const greetingEl = document.getElementById('greeting-text');
    if (greetingEl) {
      const hour = new Date().getHours();
      let g = "Good evening";
      if (hour < 12) g = "Good morning";
      else if (hour < 18) g = "Good afternoon";
      
      const username = document.body.dataset.username || 'Friend';
      greetingEl.textContent = `${g}, ${username}`;
    }
  },

  initModals() {
    // Add close logic for all modals
    document.querySelectorAll('.base-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.add('hidden');
        }
      });
    });
  },

  showModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('hidden');
      const input = modal.querySelector('input');
      if (input) input.focus();
    }
  },

  hideModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('hidden');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => UI.init());
