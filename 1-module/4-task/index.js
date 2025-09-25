function checkSpam(str) {
  // ваш код...
  const LowerCaseStr = str.toLowerCase(); 
  if (LowerCaseStr.includes('1xbet') || LowerCaseStr.includes('xxx')) {
    return true
  }
  else 
    {
    return false
    }
}