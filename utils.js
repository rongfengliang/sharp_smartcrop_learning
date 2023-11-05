const sharp = require('sharp');
const smartcrop = require('smartcrop-sharp');

function applySmartCrop(src, width, height) {
  return smartcrop.crop(src, { width: width, height: height })
    .then(function(result) {
      const crop = result.topCrop;
      return sharp(src)
        .extract({ width: crop.width, height: crop.height, left: crop.x, top: crop.y })
        .resize(width, height)
        .toBuffer();
    })
}

module.exports = {
  applySmartCrop
};