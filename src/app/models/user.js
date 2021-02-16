const Model = require('../core/model');

const User = () => {
    let model = this; 
    model  = Model('users');

    return model;
}

module.exports = User();
