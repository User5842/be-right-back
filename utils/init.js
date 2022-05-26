/**
 * CamanJS Filter Extension
 * @see {@link http://camanjs.com/guides/#Extending}
 */
Caman.Filter.register("posterize", function (adjust) {
  const numOfAreas = 256 / adjust;
  const numOfValues = 255 / (adjust - 1);

  this.process("posterize", function (rgba) {
    rgba.r = Math.floor(Math.floor(rgba.r / numOfAreas) * numOfValues);
    rgba.g = Math.floor(Math.floor(rgba.g / numOfAreas) * numOfValues);
    rgba.b = Math.floor(Math.floor(rgba.b / numOfAreas) * numOfValues);

    return rgba;
  });
});
