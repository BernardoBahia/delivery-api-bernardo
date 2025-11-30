const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

const pessoas = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro']

wss.on('connection', (ws) => {
  console.log('Novo cliente conectado')

  ws.on('message', (message) => {
    const busca = message.toString().toLowerCase()
    console.log('Mensagem recebida:', busca)
    const resultado = pessoas.filter(pessoa => pessoa.toLowerCase().includes(busca))
  })

  ws.on('close', () => {
    console.log('Cliente desconectado');
  })

  ws.on('error', err => {
    console.error('Erro no WebSocket:', err);
  })

})

console.log('Servidor WebSocket rodando na porta 8080')