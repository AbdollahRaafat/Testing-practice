
const {add, subtract, multiply, divide, reverseString, stringLength}= require('./try.js');



describe('Task one & two', () => {
  test('Reversed', () => {
    expect(reverseString ('Hello')).toBe('olleH');
  });
  
  test('Hello', () => {
    expect(stringLength ("Hello")).toBeTruthy();
  });
});









  describe('Adding', () => {
    test('5 + 6 equal 11', () => {
      expect(add(5,6)).toBe(11);
    });
  
    test('9 + 6 equal 15', () => {
      expect(add(9,6)).toBe(15);
    });
  
    test('-15 + 6 equal -9', () => {
      expect(add(-15,6)).toBe(-9);
    });

  });


  describe('subtract', () => {
    test('5 - 6 equal 11', () => {
      expect(subtract(5,6)).toBe(-1);
    });
  
    test('9 - 6 equal 15', () => {
      expect(subtract(9,6)).toBe(3);
    });
  
    test('-15 - 6 equal -9', () => {
      expect(subtract(-15,6)).toBe(-21);
    });

  });


  describe('divide', () => {
    test('6 / 3 equal 2', () => {
      expect(divide(6,3)).toBe(2);
    });
  
    test('9 / 3 equal 3', () => {
      expect(divide(9,3)).toBe(3);
    });
  
    test('50 / 2 equal -9', () => {
      expect(divide(50,2)).toBe(25);
    });
  });


    describe('multiply', () => {
      test('6 * 3 equal 2', () => {
        expect(multiply(6,3)).toBe(18);
      });
    
      test('9 * 3 equal 3', () => {
        expect(multiply(9,3)).toBe(27);
      });
    
      test('50 * 2 equal -9', () => {
        expect(multiply(50,2)).toBe(100);
  });
});




describe('Capitalization', () => {
  test('Capitalize string', () => {
    expect(capitalize("string")).toBe('String');
  });

  test('Capitalize high', () => {
    expect(capitalize("high")).toBe('High');
  });

  test('Capitalize look', () => {
    expect(capitalize("look")).toBe('Look');
  });

});