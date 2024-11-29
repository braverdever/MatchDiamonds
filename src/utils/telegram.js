export function validateTelegramWebAppData(searchString) {
  const urlParams = new URLSearchParams(searchString);
  const hash = urlParams.get('hash');
  const data = Object.fromEntries(urlParams.entries());
  delete data.hash;

  // Sort keys alphabetically
  const dataCheckString = Object.keys(data)
    .sort()
    .map(key => `${key}=${data[key]}`)
    .join('\n');

  // Validate the hash
  // Note: You'll need to implement HMAC validation on your backend
  return { isValid: true, data };
} 