describe('test lib', function () {

  beforeEach(function () {
    spyOn(window, 'throwFunction').and.callThrough();
  });

  it('test hello', function () {
    expect(hello()).toBe('hello');
  });

  it('throwFunction', function () {

    throwFunction.and.stub();
    throwFunction();

    expect(throwFunction.calls.any()).toEqual(true);

  });

  it('callThrowFunction', function () {
    throwFunction.and.stub();
    callThrowFunction('some arg');

    expect(throwFunction.calls.allArgs()).toEqual([['some arg']]);
  });
});
