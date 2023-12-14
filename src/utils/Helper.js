export function getClout(number) {
  let sigma;
  if (number < 500) {
    sigma = 'alpha';
  }
  if (number > 499 && number < 1000) {
    sigma = 'beta';
  }
  if ((number > 999 && number < 1500) || number === 1500 || number > 1500) {
    sigma = 'gamma';
  }
  return sigma;
}


export function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}