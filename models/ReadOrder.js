const mongoose = require('mongoose');

const readOrderSchema = new mongoose.Schema({
  adSoyad: String,
  email: String,
  mobilNumara: String,
  hizmet: String,
  aciklama: String,
  // Diğer alanları ekleyebilirsiniz
});

module.exports = mongoose.model('ReadOrder', readOrderSchema);
