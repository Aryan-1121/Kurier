import User from "../model/user.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({
                error:"Password & confirmPassword didn't match "
            });
        }

        const user = await User.findOne({userName});
        if(user){
            res.status(400).json({
                error :'Username already exist'
            })
        }
        

        res.send('sign-up user route ')
    } catch (error) {
        console.log('error while signing up ', error);

    }
}


export const login = (req, res) => {
    res.send('sign-in user route ')
}



export const logout = (req, res) => {
    res.send('logout-up user route ')
}

