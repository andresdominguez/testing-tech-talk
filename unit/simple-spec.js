describe('Simple unit tests', function() {

  it('should pass', function() {
    var name = 'John';

    expect(name).toBe('John');
    expect(name).not.toBe('Mike');
    expect(10).toBeGreaterThan(9);
  });

  it('should fail', function() {
    expect(1).toEqual(2);
  });
});
