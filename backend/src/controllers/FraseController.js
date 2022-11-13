const Frase = require('../models/frase');

module.exports = class FraseController{
    static async criar(req, res){
        const { texto } = req.body;

        if(!texto || texto == null){
            res.status(400).json({ error: "Preencha o campo frase!"});
        }

        const frase = new Frase({
            frase: texto,
        });

        try {
            const fraseNova = await  frase.save();
            res.json({ error: null, msg: "Frase criada com sucesso!", data: fraseNova});
        } catch (error) {
            res.status(400).json({error});
        }
    }

    static async listarTodos(req, res) {

        try {
            
            const frases = await Frase.find({});

            return res.status(200).json({error: null, data: frases});

        } catch (error) {
            return res.status(400).json({error});
        }
    }

    static async listar(req, res) {

        const id = req.params.id;

        try {
            
            const frase = await Frase.findOne({_id: id});

            res.status(200).json({error: null, data: frase});

        } catch (error) {
            res.status(400).json({error});
        }

    }

    static async atualizar(req, res) {
        const id = req.params.id;
        const { texto } = req.body;

        try {
            
            const frase = await Frase.findOne({_id: id});

            if(!frase){
                res.status(400).json({ error: "Frase não encontrada!"});
            }

            if(!texto || texto == null){
                res.status(400).json({ error: "Preencha o campo frase!"});
            }

            await Frase.findOneAndUpdate({ _id: id }, { $set: {frase: texto} });

            res.status(200).json({error: null, mgs: "Frase atualizada com sucesso!"});

        } catch (error) {
            res.status(400).json({error});
        }
    }

    static async deletar(req, res){
        const id = req.params.id;

        try {
            
            const frase = await Frase.findOne({_id: id});

            if(!frase){
                res.status(400).json({ error: "Frase não encontrada!"});
            }

            await Frase.deleteOne({ _id: id});

            res.status(200).json({error: null, mgs: "Frase deletada com sucesso!"});

        } catch (error) {
            res.status(400).json({error});
        }

    }
}