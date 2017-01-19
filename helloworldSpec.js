describe("hello world", function () {
  var helloCtrl;
  beforeEach(module('HelloWorldApp'))
  beforeEach(inject(function ($controller) {
    helloCtrl = $controller("HelloWorldController");
  }))

  describe("helloCtrl", function () {
    it('should render the greetiog of hello world', function () {
      expect(helloCtrl.greeting).toBe('Hello World')
    })
  })
})