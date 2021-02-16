const User = require('../models/user');

const UserController = () => {

    const register = async (user) => {
      let success = await User.insertOne(user);

      return success;
    }

    const auth = async () => {

    }

    return {
        register,
        auth
    }
}

module.exports = UserController();