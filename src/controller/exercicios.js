const ServiceExercicios = require('../service/exercicios')

class controllerExercicios {
    Graus(req, res) {
        try {
            const resultado = ServiceExercicios.Graus(req.body.num1);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Imc(req, res) {
        try {
            const resultado = ServiceExercicios.Imc(req.body.sexo, req.body.altura);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Nota(req, res) {
        try {
            const resultado = ServiceExercicio.Nota(req.body.nota1, req.body.nota2, req.body.nota3);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Tabuada(req, res) {
        try {
            const resultado = ServiceExercicios.Tabuada(req.body.num);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Triangulos(req, res) {
        try {
            const resultado = ServiceExercicios.Triangulos(req.body.a, req.body.b, req.body.c);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
        }
}

module.exports = new controllerExercicios()