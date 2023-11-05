const sharp = require('sharp');
const util = require('./utils')

async function templateImage(source, width, height, output) {
    let smartcrop = await util.applySmartCrop(source, width, height)
    let items = [
        {
            input: smartcrop,
            top: 25,
            left: 25,
        },
        {
            input: smartcrop,
            top: 25,
            left: 340,
        },
        {
            input: smartcrop,
            top: 25,
            left: 655,
        },
        {
            input: smartcrop,
            top: 360,
            left: 25,
        },
        {
            input: smartcrop,
            top: 360,
            left: 340,
        },
        {
            input: smartcrop,
            top: 360,
            left: 655,
        },
        {
            input: smartcrop,
            top: 700,
            left: 25,
        },
        {
            input: smartcrop,
            top: 700,
            left: 340,
        },
        {
            input: smartcrop,
            top: 700,
            left: 655,
        }
    ];
    sharp("template.png").composite(items)
        .toFile(output)
}

templateImage("v3.png", 283, 300, "output.png")