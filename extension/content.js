chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'action_plan') {
    (msg.steps || []).forEach(step => {
      if (step.action === 'go_to_url') {
        window.location.href = step.url;
      } else if (step.action === 'fill') {
        const el = document.querySelector(step.selector);
        if (el) el.value = step.value;
      } else if (step.action === 'click') {
        const el = document.querySelector(step.selector);
        if (el) el.click();
      }
    });
  }
});
