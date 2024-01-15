import jwt from 'jsonwebtoken';


export const authenticateUser = (req, res, next) => {
    try {
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
        const token = req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(403).json("Token is Missing")
        }

        jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
            if(err) {
                return res.status(403).json("You are not authorized");
            }

            req.user=user;
            next();
        })
    } catch (error) {
        res.status(500).json(error);
    }
}



export const checkRole = (role) => {
    return (req, res, next) => {
        
        const roleUser = req.user && req.user.role;
        console.log(req.user)

        if (roleUser !== role) {
            res.status(403).json('Only Admin are Allowed')
        } 
        next(role);
        
    }
}