function demo(param) {
  let flag = true;
  for (let i = 2; i < param; i++) {
    if (param % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    console.log(param, "is prime");
  } else {
    console.log(param, "non prime");
  }
}

demo(111);
demo(47);
demo(13);
demo(41);
demo(55);
demo(61);
demo(77);
