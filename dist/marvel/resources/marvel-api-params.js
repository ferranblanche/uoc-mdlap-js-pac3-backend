'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _jsMd = require('js-md5');

var _jsMd2 = _interopRequireDefault(_jsMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get API params
const { baseUrl, keys } = require('./marvel-api-params.json');

function getConnectionParams() {
    if (!baseUrl || !keys.public || !keys.private) {
        throw new Error('Unable to load the API params');
    };
    // Compute the time stamp
    let sugar = (0, _moment2.default)().unix();
    // Compute the hash
    let hash = (0, _jsMd2.default)(sugar + keys.private + keys.public);
    // Return API params    
    return { baseUrl, keys: { public: keys.public }, hash, sugar };
};

exports.default = getConnectionParams;
//# sourceMappingURL=marvel-api-params.js.map