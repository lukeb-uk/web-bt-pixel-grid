'use strict';

const bleno = require(`bleno`);
class colorCharacteristic extends bleno.Characteristic {
    constructor(pixelGrid) {
        super({
            uuid: 'fadaf690-1f0d-11e8-a594-e1d1160981b7',
            properties: ['writeWithoutResponse'],
            descriptors: [
                new bleno.Descriptor({
                    uuid: '2901',
                    value: 'Sets the color of a pixel'
                })
            ],
        });

        this.pixelGrid = pixelGrid;
    }

    onWriteRequest(data, offset, withoutResponse, callback) {
        let [ x, y, color ] = data.toString().split(',');

        x = parseInt(x, 10);
        y = parseInt(y, 10);

        this.pixelGrid.fillPixel(x, y, color)
    }
}

module.exports = colorCharacteristic;
