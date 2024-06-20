const celsiusInput = document.getElementById('celsius');
const fahrenheitOutput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');
const calculationOutput = document.getElementById('calculation');

convertButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitOutput.textContent = fahrenheit.toFixed(2);
  calculationOutput.textContent = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
});

resetButton.addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitOutput.textContent = '';
  calculationOutput.textContent = '';
});

reverseButton.addEventListener('click', () => {
  const fahrenheit = parseFloat(fahrenheitOutput.textContent);
  const celsius = (fahrenheit - 32) * 5 / 9;
  celsiusInput.value = celsius.toFixed(2);
  calculationOutput.textContent = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
});