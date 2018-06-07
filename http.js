var router = require('./router');

var app = router(3012);

var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	
];

var treinos = [
	{nome: "Treino de Peito ", exercicios: "Supino Reto ", dia: " Segunda-feira", peso: "20kg",repeticoes:"10", series:"4x", descanso: "30 segundos "},
    {nome: "Treino de Perna ", exercicios: "Agachamento  ", dia: " Terça-feira", peso: "25kg",repeticoes:"10", series:"4x", descanso: "30 segundos "},
    {nome: "Treino de Costas ",  exercicios: "Puxada Frontal ", dia: " Quarta-feira", peso: "35kg",repeticoes:"12", series:"4x", descanso: "30 segundos "}
];

app.interceptor(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.interceptor(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
  });

app.get('/operadoras', function(req, res){
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/treinos', function(req, res){
    res.write(JSON.stringify(treinos));
    res.end();
});

app.post('/treinos', function (req, res) {
    var treino = req.body;
    treinos.push(JSON.parse(treino));
    res.end();
});

app.post('/file', function (req, res) {
    console.log(req.body);
    res.end();
});
  
app.options('/file', function (req, res) {
    res.end();
});

