const optimizerButton = document.getElementById('prompt-optimizer-btn');
const promptInput = document.getElementById('prompt-input');
const optimizerPanel = document.getElementById('optimizer-panel');
const optimizedOutput = document.getElementById('optimized-output');
const copyOutputButton = document.getElementById('copy-output-btn');
const clearOutputButton = document.getElementById('clear-output-btn');
const optimizerStatus = document.getElementById('optimizer-status');

const optimizePrompt = (value) => {
  const normalized = value.replace(/\s+/g, ' ').trim();

  if (!normalized) {
    return {
      text: 'Please add details about your task, desired output format, and constraints.',
      status: 'Enter a prompt first, then click Prompt Optimizer again.',
    };
  }

  return {
    text: [
      `Task: ${normalized}`,
      'Requirements: Provide a concise response with clear, numbered steps.',
      'Constraints: Ask clarifying questions only if critical details are missing.',
      'Output format: Use headings and bullets where helpful.',
    ].join('\n'),
    status: 'Prompt optimized. You can copy and test it now.',
  };
};

optimizerButton.addEventListener('click', () => {
  const result = optimizePrompt(promptInput.value);
  optimizedOutput.value = result.text;
  optimizerStatus.textContent = result.status;
  optimizerPanel.hidden = false;
});

copyOutputButton.addEventListener('click', async () => {
  if (!optimizedOutput.value) {
    optimizerStatus.textContent = 'Nothing to copy yet. Optimize a prompt first.';
    return;
  }

  try {
    await navigator.clipboard.writeText(optimizedOutput.value);
    optimizerStatus.textContent = 'Copied optimized prompt to your clipboard.';
  } catch {
    optimizerStatus.textContent = 'Copy failed in this browser. Select text manually.';
  }
});

clearOutputButton.addEventListener('click', () => {
  optimizedOutput.value = '';
  optimizerStatus.textContent = 'Output cleared. Enter a new prompt to optimize.';
  promptInput.focus();
});
