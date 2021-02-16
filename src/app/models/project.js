const Model = require('../core/model');

const Project = () => {
    let model = this; 
    model  = Model('projects');
    
    return model;
}

module.exports = Project();
