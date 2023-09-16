const mongoose = require('mongoose');

const siparisSchema = new mongoose.Schema({
    adSoyad: String,
    email: String,
    mobilNumara: String,
    hizmet: String,
    aciklama: String
});

const Siparis = mongoose.model('Siparis', siparisSchema);
module.exports = Siparis;