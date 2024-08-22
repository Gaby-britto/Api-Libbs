const ValidateColaborates = (req, res, next) => {
    const {empresa, mercadoria, cnpj} = req.body;

    if (!empresa || !mercadoria || !cnpj){
        return res.status(400).json({
            msg: "Campos inválidos, revise",
        });
    }

    return next();
};

const ValidateColaboratesId = (req, res, next) => {
    const { id } = req.params;

    if(!id){
        return res.status(400).json({
            msg: "Parâmetro faltando",
        });
    }

    return next();
};

module.exports = {ValidateColaborates, ValidateColaboratesId}