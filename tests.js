// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the helloWorld function
describe('hiEveryone', function() {
    it('should be a defined function', function() {
      expect(typeof hiEveryone).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof hiEveryone()).toBe("string");
    });
    it('should return the string "Hi, everyone!" when executed', function() {
      expect(hiEveryone()).toBe("Hi, everyone!");
    });
    it("should never return 'undefined' when called", function() {
      expect(hiEveryone()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
    });
});



