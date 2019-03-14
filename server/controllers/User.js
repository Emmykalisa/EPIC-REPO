import UserModel from '../models/User';

const User = {
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} user object 
   */
  create(req, res) {
    if (!req.body.email && !req.body.firstName && !req.body.lastName) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const user = UserModel.create(req.body);
    return res.status(201).send(user);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} users array
   */
  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send(users);
  },

  loginUser(req, res){
    req.assert('email', 'Enter your email').notEmpty();
    req.assert('password', 'Enter your password').notEmpty();
    let errors = req.validationErrors();
    if(errors) return res.status(400).json({status:400,message: errors[0] });

    let user_info = {email:req.body.email, password:req.body.password};

    UserModel.signUser(user_info, (err, user)=>{
      if(err) return res.status(404).json({status:404,message: err});
      if(!user) return res.status(400).json({status:400,message: 'NO user found'});
      res.status(200).json({status:200,message:'Login successful',data:user});
    })
  }
}

export default User;