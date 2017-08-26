module.exports = function (str) {
  // TODO

  var re = /^[0-9]+\.*jpe?g$/ 
  var result =  re.exec(str)
  return result
}