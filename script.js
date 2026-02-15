const optimizerButton = document.getElementById('prompt-optimizer-btn');
const promptInput = document.getElementById('prompt-input');
const optimizerPanel = document.getElementById('optimizer-panel');
const optimizedOutput = document.getElementById('optimized-output');

const optimizePrompt = (value) => {
  const normalized = value.replace(/\s+/g, ' ').trim();

  if (!normalized) {
    return 'Please add details about your task, desired output format, and constraints.';
  }

  return [
    'Task: ' + normalized,
    'Requirements: Provide a concise response with clear steps.',
    'Constraints: Ask clarifying questions only if critical details are missing.',
  ].join('\n');
};

optimizerButton.addEventListener('click', () => {
  optimizedOutput.textContent = optimizePrompt(promptInput.value);
  optimizerPanel.hidden = false;
});
