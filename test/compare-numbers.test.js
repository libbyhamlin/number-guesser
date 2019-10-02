// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from './compare-numbers.js';

const test = QUnit.test;

test('Should return true if guess is correct', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const guess = 7;
    const correctNumber = 7;
  //Act
  // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
  //Assert
  // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('Should return false if guess is too low', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const guess = 5;
    const correctNumber = 7;
  //Act
  // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
  //Assert
  // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('Should return false if guess is too high', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const guess = 8;
    const correctNumber = 7;
  //Act
  // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
  //Assert
  // Make assertions about what is expected valid result
    assert.equal(result, 1);
});
