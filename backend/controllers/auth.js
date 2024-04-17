import User from "../model/user.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({
                error:"Password & confirmPassword didn't match "
            });
        }
        // check if userName already exists (needs to be unique)
        const user = await User.findOne({userName});
        if(user){
            res.status(400).json({
                error :'Username already exist'
            })
        }
        
        //     TODO: hash password here 

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // RANDOM PROFILE PIC (using this free api - https://avatar.iran.liara.run/)
        // for male  -> https://avatar.iran.liara.run/public/boy?username=[value]
        // for female  -> https://avatar.iran.liara.run/public/girl?username=[value]
        
        const maleDP = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const femaleDP = `https://avatar.iran.liara.run/public/girl?username=${userName}`


        // creating new user to save in DB (MongoDB)
        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender=== 'male' ? maleDP : femaleDP  
        })

        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic

        })


    } catch (error) {
        console.log('error while signing up in signup controller : ', error);
        res.status(500).json({
            error: 'Internal server error'
        })

    }
}


export const login = (req, res) => {
    res.send('sign-in user route ')
}



export const logout = (req, res) => {
    res.send('logout-up user route ')
}

