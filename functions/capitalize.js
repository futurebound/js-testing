// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

module.exports = capitalize
