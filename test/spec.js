const numberGenerator = require( '../palindromic-number-generator.js' );
const chai = require( 'chai' );
const should = chai.should();
const expect = chai.expect;

describe('Palindromic Number Generator', function() {
  it('should return a object', function() {
    const matrix = numberGenerator(87);
    matrix.should.be.a('object');
  });

  it('should have a value and steps keys', function() {
    const generatedObject = numberGenerator(87);
    expect(generatedObject).to.have.property('value');
    expect(generatedObject).to.have.property('steps');
  });

  it('should return the correct values', function() {
    const generatedObject = numberGenerator(87);
    expect(generatedObject.value).to.equal(4884);
    expect(generatedObject.steps).to.equal(4);

    const regeneratedObject = numberGenerator(359700);
    expect(regeneratedObject.value).to.equal(880484088);
    expect(regeneratedObject.steps).to.equal(9);
  });

  it('should return the same value if number is already palindromic', function() {
    const generatedObject = numberGenerator(7337);
    expect(generatedObject.value).to.equal(7337);
    expect(generatedObject.steps).to.equal(0);
  });
});
