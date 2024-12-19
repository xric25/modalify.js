(function() {
  /**
   * Dynamic Modal Alert System with Unified Button Styling and Dismissible Option
   */

  // Inject updated styles dynamically
  const styles = `
    /* Modal Styles */
    body.modal-open { overflow: hidden; }

    .modal-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    .modal-container {
      background: #DBDDDF;
      border-radius: 14px;
      width: 90%; max-width: 400px;
      text-align: center;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      font-family: inherit; /* Inherit font from the overlay */
    }

    .modal-header-bar {
      height: 4px; width: 100%;
    }

    .modal-title {
      font-size: 1.6em;
      margin: 25px 0 5px;
      font-weight: 700;
    }

    .modal-description {
      font-size: 1.1em;
      margin: 0 20px 25px;
      color: #6C7075;
      font-weight: 500;
    }

    .modal-actions {
      display: flex;
      flex-direction: column;
    }

    .modal-button {
      width: 100%;
      padding: 17px 0;
      font-size: 1.1em;
      font-weight: 700;
      text-align: center;
      border: none;
      border-top: 2px solid #B4B9BE;
      color: #2E72D2;
      background: transparent;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .modal-button:hover {
      background: #E7E8EA;
    } 

    /* Alert Types */
    .alert-default .modal-header-bar { background: #2C6FCD; }
    .alert-default .modal-title { color: #202223; }

    .alert-alert .modal-header-bar { background: #B98900; }
    .alert-alert .modal-title { color: #916A00; }

    .alert-error .modal-header-bar { background: #D92800; }
    .alert-error .modal-title { color: #D92B0D; }
  `;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  /**
   * Show a modal alert
   * @param {Object} options
   * @param {string} options.type - Type of alert: default, alert, error
   * @param {string} options.headline - Headline text
   * @param {string} options.description - Description text
   * @param {Array} options.actions - Array of actions: { label, handler }
   * @param {boolean} [options.dismissible] - Whether modal can be dismissed on outside click
   */
  window.showModalAlert = function({ type, headline, description, actions, dismissible = false }) {
    // Remove existing modal
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.classList.add('modal-open');

    // Close modal when clicked outside if dismissible
    if (dismissible) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
      });
    }

    // Modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = `modal-container alert-${type}`;

    // Header bar
    const headerBar = document.createElement('div');
    headerBar.className = 'modal-header-bar';

    // Title and description
    const title = document.createElement('div');
    title.className = 'modal-title';
    title.textContent = headline;

    const desc = document.createElement('div');
    desc.className = 'modal-description';
    desc.textContent = description;

    // Actions
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'modal-actions';

    actions.forEach(action => {
      const button = document.createElement('div');
      button.textContent = action.label;
      button.className = `modal-button`;
      button.onclick = () => {
        action.handler(action.label);
        closeModal();
      };
      actionsContainer.appendChild(button);
    });

    // Assemble modal
    modalContainer.appendChild(headerBar);
    modalContainer.appendChild(title);
    modalContainer.appendChild(desc);
    modalContainer.appendChild(actionsContainer);
    overlay.appendChild(modalContainer);
    document.body.appendChild(overlay);

    function closeModal() {
      document.body.classList.remove('modal-open');
      overlay.remove();
    }
  };
})();
