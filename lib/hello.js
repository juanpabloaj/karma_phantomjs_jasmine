var hello = function () {
  return 'hello';
};

var bye = function () {
  return 'bye bye';
};

var throwFunction = function () {
  throw 'throwFunction was called';
};

var callThrowFunction = function (arg) {
  throwFunction(arg);
};

var returnStringDate = function () {
  return (new Date()).toString();
};
