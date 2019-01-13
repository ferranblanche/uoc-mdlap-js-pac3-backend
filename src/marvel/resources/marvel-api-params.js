import moment from 'moment';
import md5 from 'js-md5';

// Get API params
const {baseUrl,keys} = require('./marvel-api-params.json');

function getConnectionParams() {
    if(!baseUrl || !keys.public || !keys.private) {
        throw new Error('Unable to load the API params');
    };
    // Compute the time stamp
    let sugar = moment().unix();
    // Compute the hash
    let hash = md5(sugar + keys.private + keys.public);
    // Return API params    
    return {baseUrl,keys: {public: keys.public},hash,sugar};
};

export default getConnectionParams;