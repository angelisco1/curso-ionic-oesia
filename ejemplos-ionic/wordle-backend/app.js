// Importaciones de CommonJS
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const PALABRA_SECRETA = 'una frase cualquiera'
const USUARIOS_REGISTRADOS = [
  { id: 0, nombre: 'Admin', password: 'admin', email: 'admin@admin.com', imagen: '' }
]

// Lo ejecutamos con el comando:
// npm start

const app = express()

app.use(cors())
app.use(express.json())


app.post('/login', (req, res) => {
  const { email, password } = req.body

  const usuarioBuscado = USUARIOS_REGISTRADOS.find(usuario => usuario.email === email && usuario.password === password)

  if (usuarioBuscado) {

    const token = jwt.sign({
      nombre: usuarioBuscado.nombre,
      imagen: usuarioBuscado.imagen
    }, PALABRA_SECRETA)

    console.log(token)

    return res.json({ jwt: token })

  }

  return res.status(401).json({mensaje: 'Datos de email y/o contraseña incorrectos'})

})

app.post('/registro', () => {

})




app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})