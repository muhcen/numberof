function numberof(str, val) {
  str = String(str);
  val = String(val);
  if (val === "") {
    return 0;
  } else {
    let count = 0;
    str = str.split("");

    while (val.length <= str.length) {
      let indexOf = str.join("").indexOf(val);
      if (indexOf > -1) {
        count++;
        str.splice(indexOf, val.length);
      } else {
        break;
      }
    }

    return count;
  }
}

module.exports = numberof;
