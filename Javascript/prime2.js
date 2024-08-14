function demo(param) {
  for (let i = 2; i < param; i++) {
    if (param % i == 0) {
      console.log("N-prime");
      break;
    } else {
      console.log("prime");
      break;
    }
  }
}
