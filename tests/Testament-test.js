/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { expect } = require('chai');

describe('Testament', function () {
  let testament, Testament, owner, doctor, dev, alice, bob;
  beforeEach(async function () {
    [owner, doctor, dev, alice, bob] = await ethers.getSigners();
    Testament = await ethers.getContractFactory('Testament');
    testament = await Testament.connect(dev).deploy(owner.address, doctor.address);
    await testament.deployed();
  });
  describe('Deployment', function () {
    it('Should revert if owner and doctor are the same person.', async function () {
      await expect(Testament.connect(dev).deploy(owner.address, owner.address)).to.revertedWith(
        'Testament: You cannot define the owner and the doctor as the same person.');
    });
  });
});
