const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/api/clases', (req, res) => {
  const clases = [
    { id: 1, nombre: 'Tema 1: Introducción', archivo: 'CLASE1.HTML' },
    { id: 2, nombre: 'Tema 2: Conceptos', archivo: 'CLASE2.HTML' },
    { id: 3, nombre: 'Tema 3: Preguntas personales', archivo: 'CLASE3.HTML' },
    { id: 4, nombre: 'Tema 4: Casos prácticos', archivo: 'CLASE4.HTML' },
    { id: 5, nombre: 'Tema 5: Análisis', archivo: 'CLASE5.HTML' },
    { id: 6, nombre: 'Tema 6: Metodología', archivo: 'CLASE6.HTML' },
    { id: 7, nombre: 'Tema 7: Aplicaciones', archivo: 'CLASE7.HTML' },
    { id: 8, nombre: 'Tema 8: Ejercicios', archivo: 'CLASE8.HTML' },
    { id: 9, nombre: 'Tema 9: Evaluación', archivo: 'CLASE9.HTML' },
    { id: 10, nombre: 'Tema 10: Recursos', archivo: 'CLASE10.HTML' },
    { id: 11, nombre: 'Tema 11: Avanzado', archivo: 'CLASE11.HTML' },
    { id: 12, nombre: 'Tema 12: Proyecto Final', archivo: 'CLASE12.HTML' }
  ];
  res.json(clases);
});

app.get('/clase/:id', (req, res) => {
  const { id } = req.params;
  const archivo = `CLASE${id}.HTML`;
  res.sendFile(path.join(__dirname, 'public', archivo));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✓ Servidor en puerto ${PORT}`));
