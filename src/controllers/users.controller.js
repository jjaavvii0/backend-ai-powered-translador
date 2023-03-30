import User from "../models/User"

export const createUser = async (req, res) => {
    try{
        const {username, password} = req.body;
        const newUser = new User ({username, password});

        const userSaved = await newUser.save();

        res.status(201).send({data: userSaved});
    }catch(e){
        res.status(404).json(e);
    }
}
export const getUsers = async (req, res)=> {
    try{
        const users = await User.find(req.query)
        res.status(200).json(users);
    }catch(e){
        res.status(404).json(e);
    }
}