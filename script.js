/* The code `const textArea = document.querySelector('.text-area')` is selecting an HTML element with
the class name 'text-area' using the `document.querySelector` method and storing it in a constant
variable `textArea`. Similarly, `const message = document.querySelector('.message')` is selecting an
HTML element with the class name 'message' and storing it in a constant variable `message`. These
variables are used to reference these specific elements in the JavaScript code for further
manipulation, such as getting input values, setting values, or performing actions based on user
interactions with these elements on the webpage. */
const textArea = document.querySelector('.text-area')
const message = document.querySelector('.message')

/* The `const alphabet` object is mapping each letter of the English alphabet (from 'a' to 'z') to a
corresponding emoji. Each key in the object represents a letter (e.g., 'a' for '😀', 'b' for '😃'),
and the value associated with each key is the emoji representation for that letter. */
const alphabet = {
  a: '😀',
  b: '😃',
  c: '😄',
  d: '😁',
  e: '😆',
  f: '😅',
  g: '😂',
  h: '🤣',
  i: '😊',
  j: '😇',
  k: '🙂',
  l: '🙃',
  m: '😉',
  n: '😌',
  o: '😍',
  p: '🥰',
  q: '😘',
  r: '😗',
  s: '😙',
  t: '😚',
  u: '😋',
  v: '😛',
  w: '😜',
  x: '🤪',
  y: '😝',
  z: '🤑'
}

/**
 * The function `encryptText` takes a plain text and a key as input, and returns the text encrypted
 * using a substitution cipher based on the provided key.
 * @param plainText - It looks like there is a mistake in the code snippet you provided. The
 * `encryptText` function is referencing variables like `sentence`, `alphabet`, and `letter` that are
 * not defined within the function.
 * @param key - It seems like there is a mistake in the code snippet you provided. The `encryptText`
 * function is missing the `alphabet` and `sentence` variables. Could you please provide the
 * definitions for these variables so that I can assist you better?
 * @returns The `encryptText` function is returning the `encryptedSentence` variable, which contains
 * the encrypted version of the `plainText` input using the `key`.
 */
const encryptText = (sentence) => {
  let encryptedSentence = ''
  for (let letter of sentence.toLowerCase()) {
    if (alphabet[letter]) {
      encryptedSentence += alphabet[letter]
    } else {
      encryptedSentence += letter
    }
  }
  return encryptedSentence
}

/**
 * The `decryptText` function takes an encrypted text containing emojis and decrypts it by matching
 * emojis to corresponding alphabet characters.
 * @param encryptedText - It seems like you haven't provided the `encryptedText` parameter for the
 * `decryptText` function. Could you please provide the encrypted text that you want to decrypt?
 * @returns The `decryptText` function returns the decrypted sentence after decoding the emojis in the
 * `encryptedText` using the `alphabet` object.
 */
const decryptText = (encryptedText) => {
  let replacedString = ''

  for (const emoji of encryptedText) {
    const letter = Object.keys(alphabet).find((key) => alphabet[key] === emoji)
    if (letter !== undefined) {
      replacedString += letter
    } else {
      replacedString += emoji
    }
  }

  return replacedString.toUpperCase()
}

/**
 * The `encryptButton` function encrypts the text from a text area using a secret key and displays the
 * encrypted text in a message field.
 */
const encryptButton = () => {
  const encryptedText = encryptText(textArea.value)
  message.value = encryptedText
  textArea.value = ''
  message.style.backgroundImage = 'none'
}

/**
 * The `decryptButton` function takes the encrypted text from an input field, decrypts it using a
 * secret key, and then displays the decrypted text in a text area.
 */
const decryptButton = () => {
  const decryptedText = decryptText(textArea.value)
  message.value = decryptedText
  textArea.value = ''
}

/**
 * The `copyText` function copies the text from an input field to the clipboard using JavaScript.
 */
const copyText = () => {
  const textToCopy = message.value
  if (textToCopy.trim() === '') return
  const tempElement = document.createElement('textarea')
  tempElement.value = textToCopy

  document.body.appendChild(tempElement)
  tempElement.select()
  tempElement.setSelectionRange(0, 99999)

  document.execCommand('copy')

  document.body.removeChild(tempElement)
  message.value = ''
}
