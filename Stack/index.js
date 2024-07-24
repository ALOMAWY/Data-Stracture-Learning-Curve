function isValid(s) {
  let pattern = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let stack = [];
    let currentChar = s[i];

    if (pattern[currentChar]) {
      stack.push(pattern[currentChar]);
    } else if (stack.pop() != currentChar) {
      return false;
    }
  }
}

isValid("({}()[])");
