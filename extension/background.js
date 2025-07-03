chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  if (msg.type === 'prompt') {
    const plan = await fetch('http://localhost:8000/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'process_prompt', params: { text: msg.text } })
    }).then(res => res.json()).catch(err => ({ error: err.toString() }));
    sendResponse(plan);
  }
  return true;
});
