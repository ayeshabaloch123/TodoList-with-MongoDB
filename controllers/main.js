
const utils=require('../utils/data')

exports.welcome=function(req,res){
    res.send("Welcome to the Slim Coder!!")
}
exports.remainder=function(req,res){
  const data=utils.remainder(6,2);
  res.status(200).json({
      data:data
  });
  
}
