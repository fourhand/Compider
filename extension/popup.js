document.getElementById('send').addEventListener('click', async () => {
  const text = document.getElementById('prompt').value;
  const response = await chrome.runtime.sendMessage({ type: 'prompt', text });
  console.log('Action plan', response);
});
