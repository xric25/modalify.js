# Modalify.js 🚀  
A lightweight, customizable JavaScript library for creating dynamic, responsive, and elegant modal alerts.

## Features ✨  
- Simple and Clean: Easy to implement with just one script.  
- Customizable Alert Types: Supports `default`, `alert`, and `error` modals.  
- Dynamic Buttons: Add multiple actions with custom event handlers.  
- Dismissible Modals: Optionally allow closing modals by clicking outside.  
- Long Descriptions: Supports lengthy content with responsive design.  

---

## Installation 📦  

1. Include Modalify.js in your HTML file:
```html
<script src="modalify.js"></script>
```

2. Call the `showModalAlert` function to create modals.  

---

## Usage 🛠️  

### Basic Alert Example  
```js
showModalAlert({
  type: 'default',
  headline: 'Default Alert',
  description: 'This is a simple default alert example.',
  actions: [
    { label: 'OK', handler: () => alert('OK clicked') }
  ]
});
```

### Alert with Multiple Actions  
```js
showModalAlert({
  type: 'alert',
  headline: 'Choose an Option',
  description: 'Please select one of the available options.',
  actions: [
    { label: 'Option 1', handler: () => alert('Option 1 clicked') },
    { label: 'Option 2', handler: () => alert('Option 2 clicked') },
    { label: 'Cancel', handler: () => alert('Cancel clicked') }
  ]
});
```

### Dismissible Alert
```js  
showModalAlert({
  type: 'error',
  headline: 'Error Alert',
  description: 'An error occurred! Click outside to dismiss this alert.',
  actions: [{ label: 'Close', handler: () => alert('Closed') }],
  dismissible: true
});
```

### Long Description Example  
```js
showModalAlert({
  type: 'default',
  headline: 'Long Description Example',
  description: 'This is an example of a modal with a longer description. ' +
    'It is designed to handle lengthy text content and ensures everything is responsive.',
  actions: [{ label: 'Got it!', handler: () => alert('Understood') }]
});
```

---

## Screenshot 📸  
Replace this section with a screenshot of your modal alert examples:  
![Modalify.js Screenshot](https://i.postimg.cc/RhjdcNNp/Screenshot-3.png)  

---

## Customization 🎨  

- Alert Types: Use one of the predefined alert types:  
  - default (blue bar and text)  
  - alert (orange bar and text)  
  - error (red bar and text)  

- Dismissible Option:  
  Set `dismissible: true` to allow the modal to close when clicking outside.  

---

## Contribution 🤝  

We welcome contributions! To get started:  

1. Fork this repository.  
2. Clone the forked repository to your local machine.  
3. Make changes and submit a pull request.  

---

## License 📝  

Modalify.js is licensed under the MIT License.  

---

## Author 👤  

**xric25**  
GitHub: [xric25](https://github.com/xric25)  
# modalify.js
A lightweight, customizable JavaScript library for dynamic modal alerts.
