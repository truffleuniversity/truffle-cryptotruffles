const CryptoTruffles = artifacts.require('CryptoTruffles');

contract('CryptoTruffles', function(accounts) {
  it("should assert true", function(done) {
    var crypto_truffles = CryptoTruffles.deployed();
    assert.isTrue(true);
    done();
  });
});
