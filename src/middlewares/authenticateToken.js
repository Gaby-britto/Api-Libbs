const jwt = require ('jsonwebtoken');

function authenticateToken (req, res, next){
    const token = req.headers['authorization']?.slipt('')[1];

    if(!token){
        return res.status(401).json({
            msg: 'Acesso negado'
        });
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err){
            return res.status(403).json({
                msg: 'Acesso negado'
            })
        }
        // Armazenar usuario na requisição
        req.user = user;

        next();
    });
}

module.exports = authenticateToken;