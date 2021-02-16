const Model = require('../core/model');

const UserToken = () => {
    let model = this; 
    model  = Model('user_tokens');
    
    return model;
}

module.exports = UserToken();
