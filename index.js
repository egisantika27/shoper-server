// Impor library yang dibutuhkan
const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Modul 'fs' untuk membaca file
const path = require('path'); // Modul 'path' untuk menangani path file

// Inisialisasi aplikasi express
const app = express();
const PORT = process.env.PORT || 3000; // Gunakan port dari hosting atau default 3000

// Aktifkan CORS agar bisa diakses dari domain lain (penting!)
app.use(cors());

// Endpoint utama untuk mendapatkan konfigurasi
app.get('/api/config', (req, res) => {
  try {
    // Tentukan path ke file config.json
    const configPath = path.join(__dirname, 'config.json');

    // Baca file secara sinkron (karena file kecil dan hanya dibaca sekali per request)
    const rawConfig = fs.readFileSync(configPath);

    // Ubah data file menjadi objek JSON
    const configData = JSON.parse(rawConfig);

    // Kirim data sebagai response
    res.json(configData);

  } catch (error) {
    // Jika terjadi error (misal: file tidak ditemukan), kirim status error
    console.error("Error reading config file:", error);
    res.status(500).json({ message: "Internal Server Error: Could not retrieve config." });
  }
});

// Jalankan server pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});