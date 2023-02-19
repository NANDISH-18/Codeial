const User = require("../models/user")

module.exports.profile = function(req,res){
    
    // res.end('<h1>Profile page</h1>');
    return res.render('user_profile',{
        title: "User Profile"
    })

}


// Render the signup page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"codeial | Sign Up"
    })
}

// Render the signin page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title:"codeial | Sign in"
    })
}

//get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in sign up');
            return;
        }
        console.log(req.body);
        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log('error in creating user in sign up');
                    return;
                }
                return res.redirect('/users/sign-in');

            })
        }else{
            return res.redirect('back');
        }
        
    })
}

//sign in and create a session for this
module.exports.createsession = function(req,res){

}

