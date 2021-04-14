// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de request & response para utilizar ayuda IDE
const { response, request } = require('express');

const getAsteroids = (req = request, res = response) => {
  const { page = 1, limit = 3 } = req.query;

  res.json({ sms: 'get - API', page, limit });
};

const postAsteroids = (req = request, res = response) => {
  const { name, age } = req.body;

  res.json({ sms: 'post - API', name, age });
};

const putAsteroids = (req = request, res = response) => {
  const { id } = req.params;

  res.json({ sms: 'put - API', id });
};

const patchAsteroids = (req = request, res = response) => {
  res.json({ sms: 'patch - API' });
};

const deleteAsteroids = (req = request, res = response) => {
  res.json({ sms: 'delete - API' });
};

module.exports = {
  getAsteroids,
  postAsteroids,
  putAsteroids,
  patchAsteroids,
  deleteAsteroids,
};
