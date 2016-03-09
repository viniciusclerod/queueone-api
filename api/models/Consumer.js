/**
 * Consumer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName:{
      type: 'string',
      required: true
    },
    lastName:{
      type: 'string',
      required: true
    },
    cpf: {
      type: 'string',
      required:true,
      unique:true
    },
    password:{
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    }
  },

  beforeCreate: function (user, next) {
    user.password = CipherService.hashPassword(user.password);
    next();
  }
};
