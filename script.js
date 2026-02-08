
let currentPage = 1;
const itemsPerPage = 10;
let selectedPasal = new Set();

// =====================
// DATA PASAL
// =====================

const pasalData = [
// ================= PASAL RINGAN =================

{
  kode: "A1",
  kategori: "Ringan",
  bidang: "Gangguan Ketertiban Umum",
  keterangan: "Keributan / Onar",
  denda: 3200,
  jail: 10,
  impound: 0
},

{
  kode: "A2",
  kategori: "Ringan",
  bidang: "Menghina Petugas Aparat Penegak Hukum",
  keterangan: "Verbal / Gestur",
  denda: 2000,
  jail: 10,
  impound: 0
},

{
  kode: "A3",
  kategori: "Ringan",
  bidang: "Tidak Patuh Perintah",
  keterangan: "Abaikan Instruksi Petugas",
  denda: 4000,
  jail: 7,
  impound: 0
},

{
  kode: "A4",
  kategori: "Ringan",
  bidang: "Memasuki Area Terlarang",
  keterangan: "Tanpa Izin",
  denda: 2000,
  jail: 10,
  impound: 0
},

{
  kode: "A5",
  kategori: "Ringan",
  bidang: "Menghalangi Polisi",
  keterangan: "Hambat Tugas",
  denda: 2100,
  jail: 7,
  impound: 0
},

{
  kode: "A6",
  kategori: "Ringan",
  bidang: "Tidak Membawa Identitas",
  keterangan: "Tidak Membawa KTP / ID",
  denda: 800,
  jail: 5,
  impound: 0
},

{
  kode: "A7",
  kategori: "Ringan",
  bidang: "Identitas Palsu",
  keterangan: "Nama / ID Palsu",
  denda: 2500,
  jail: 15,
  impound: 0
},

{
  kode: "A8",
  kategori: "Ringan",
  bidang: "Kabur Saat Diperiksa",
  keterangan: "Belum Ditahan",
  denda: 1200,
  jail: 10,
  impound: 0
},

{
  kode: "A9",
  kategori: "Ringan",
  bidang: "Provokasi Publik",
  keterangan: "Memancing Chaos",
  denda: 3200,
  jail: 12,
  impound: 0
},

{
  kode: "A10",
  kategori: "Ringan",
  bidang: "Perusakan Ringan",
  keterangan: "Properti Kecil",
  denda: 3500,
  jail: 10,
  impound: 0
},

{
  kode: "A11",
  kategori: "Ringan",
  bidang: "Membawa Alat Ilegal Ringan",
  keterangan: "Lockpick, dll",
  denda: 4000,
  jail: 15,
  impound: 0
},

{
  kode: "A12",
  kategori: "Ringan",
  bidang: "Mengganggu TKP",
  keterangan: "Rusak Bukti",
  denda: 3100,
  jail: 10,
  impound: 0
},

{
  kode: "A13",
  kategori: "Ringan",
  bidang: "Penyalahgunaan Klakson / Suara",
  keterangan: "Spam Suara",
  denda: 500,
  jail: 5,
  impound: 0
},

{
  kode: "A14",
  kategori: "Ringan",
  bidang: "Menghalangi Evakuasi",
  keterangan: "EMS / PD",
  denda: 5000,
  jail: 20,
  impound: 0
},

{
  kode: "A15",
  kategori: "Ringan",
  bidang: "Mengabaikan Panggilan Polisi",
  keterangan: "Kabur Call",
  denda: 500,
  jail: 7,
  impound: 0
},

{
  kode: "A16",
  kategori: "Ringan",
  bidang: "Perkelahian Ringan",
  keterangan: "Tanpa Senjata",
  denda: 800,
  jail: 5,
  impound: 0
},

{
  kode: "A17",
  kategori: "Ringan",
  bidang: "Merokok di Area Terlarang",
  keterangan: "Area Publik / Kantor Negara",
  denda: 800,
  jail: 5,
  impound: 0
},

{
  kode: "A18",
  kategori: "Ringan",
  bidang: "Mengganggu Pelayanan Publik",
  keterangan: "Menghambat Pelayanan PD / EMS",
  denda: 2000,
  jail: 10,
  impound: 0
},

{
  kode: "A19",
  kategori: "Ringan",
  bidang: "Membuat Laporan Palsu",
  keterangan: "Kejadian Fiktif",
  denda: 1200,
  jail: 10,
  impound: 0
},

{
  kode: "A20",
  kategori: "Ringan",
  bidang: "Penyalahgunaan Call Emergency",
  keterangan: "Spam / Prank Call Hotline",
  denda: 1200,
  jail: 10,
  impound: 0
},

{
  kode: "A21",
  kategori: "Ringan",
  bidang: "Mengganggu Proses Penangkapan",
  keterangan: "Menghalangi Penangkapan Orang Lain",
  denda: 2500,
  jail: 15,
  impound: 0
},

{
  kode: "A22",
  kategori: "Ringan",
  bidang: "Menggunakan Atribut Instansi Tanpa Izin",
  keterangan: "Seragam / Aksesoris / ID Palsu",
  denda: 5000,
  jail: 15,
  impound: 0
},

{
  kode: "A23",
  kategori: "Ringan",
  bidang: "Membawa Hewan ke Area Terlarang",
  keterangan: "Mengganggu Area Publik",
  denda: 4000,
  jail: 10,
  impound: 0
},

{
  kode: "A24",
  kategori: "Ringan",
  bidang: "Pencemaran Nama Baik Perorangan",
  keterangan: "Fitnah / Tuduhan Tanpa Bukti",
  denda: 2500,
  jail: 8,
  impound: 0
},

{
  kode: "A25",
  kategori: "Ringan",
  bidang: "Pencemaran Nama Baik Instansi",
  keterangan: "Informasi Palsu / Hoax",
  denda: 4000,
  jail: 18,
  impound: 0
},

{
  kode: "A26",
  kategori: "Ringan",
  bidang: "Memakai Atribut Tidak Senonoh di Tempat Umum",
  keterangan: "Pakaian / Aksesoris Tidak Pantas",
  denda: 5000,
  jail: 10,
  impound: 0
},

{
  kode: "A27",
  kategori: "Ringan",
  bidang: "Tindakan Tidak Senonoh di Tempat Umum",
  keterangan: "Perbuatan Asusila / Gestur Tidak Pantas",
  denda: 4000,
  jail: 15,
  impound: 0
},

// ================= MENENGAH UMUM =================
{
  kode: "B1",
  kategori: "Menengah Umum",
  bidang: "Perlawanan Aparat",
  keterangan: "Fisik",
  denda: 5000,
  jail: 20,
  impound: 0
},

{
  kode: "B2",
  kategori: "Menengah Umum",
  bidang: "Ancaman Kekerasan",
  keterangan: "Serius",
  denda: 8000,
  jail: 15,
  impound: 0
},

{
  kode: "B3",
  kategori: "Menengah Umum",
  bidang: "Penyalahgunaan Senjata Tajam / Tumpul",
  keterangan: "Pisau / Baton",
  denda: 5200,
  jail: 15,
  impound: 0
},

{
  kode: "B4",
  kategori: "Menengah Umum",
  bidang: "Penyergangan Warga",
  keterangan: "Luka Ringan / Sedang",
  denda: 6700,
  jail: 10,
  impound: 0
},

{
  kode: "B5",
  kategori: "Menengah Umum",
  bidang: "Percobaan Kabur",
  keterangan: "Saat Ditahan",
  denda: 8000,
  jail: 23,
  impound: 0
},

{
  kode: "B6",
  kategori: "Menengah Umum",
  bidang: "Perusakan Properti",
  keterangan: "Skala Sedang",
  denda: 5200,
  jail: 10,
  impound: 0
},

{
  kode: "B7",
  kategori: "Menengah Umum",
  bidang: "Penipuan",
  keterangan: "Scam / Fraud",
  denda: 5800,
  jail: 10,
  impound: 0
},

{
  kode: "B8",
  kategori: "Menengah Umum",
  bidang: "Pencurian",
  keterangan: "Kekerasan / Tanpa Kekerasan",
  denda: 6800,
  jail: 15,
  impound: 0
},

{
  kode: "B9",
  kategori: "Menengah Umum",
  bidang: "Car Stealing",
  keterangan: "Pencurian Kendaraan",
  denda: 8000,
  jail: 20,
  impound: 0
},

{
  kode: "B10",
  kategori: "Menengah Umum",
  bidang: "Membawa Barang Car Stealing",
  keterangan: "Kunci L / Tinggis dll",
  denda: 6700,
  jail: 10,
  impound: 0
},

{
  kode: "B11",
  kategori: "Menengah Umum",
  bidang: "Kepemilikan Barang Curian",
  keterangan: "Hasil Kejahatan",
  denda: 5000,
  jail: 12,
  impound: 0
},

{
  kode: "B12",
  kategori: "Menengah Umum",
  bidang: "Penyuapan Aparat Penegak Hukum",
  keterangan: "Uang / Barang",
  denda: 8500,
  jail: 20,
  impound: 0
},

{
  kode: "B13",
  kategori: "Menengah Umum",
  bidang: "Menghalangi Penyelidikan",
  keterangan: "Hilang Bukti",
  denda: 5500,
  jail: 7,
  impound: 0
},

{
  kode: "B14",
  kategori: "Menengah Umum",
  bidang: "Membantu Pelaku Kejahatan",
  keterangan: "Menyembunyikan",
  denda: 6400,
  jail: 10,
  impound: 0
},

{
  kode: "B15",
  kategori: "Menengah Umum",
  bidang: "Pembegalan",
  keterangan: "Perampasan Paksa di Jalan",
  denda: 7900,
  jail: 20,
  impound: 0
},

{
  kode: "B16",
  kategori: "Menengah Umum",
  bidang: "Membawa Kevlar",
  keterangan: "Tanpa Izin Resmi Kepolisian",
  denda: 8000,
  jail: 18,
  impound: 0
},

{
  kode: "B17",
  kategori: "Menengah Umum",
  bidang: "Membawa Uang Merah",
  keterangan: "Uang Hasil Kejahatan",
  denda: 12000,
  jail: 15,
  impound: 0
},

{
  kode: "B18",
  kategori: "Menengah Umum",
  bidang: "Perburuan Ilegal",
  keterangan: "Berburu Tanpa Izin",
  denda: 5700,
  jail: 7,
  impound: 0
},

{
  kode: "B19",
  kategori: "Menengah Umum",
  bidang: "Membawa Hasil Burung",
  keterangan: "Daging / Hasil Lindung",
  denda: 4500,
  jail: 8,
  impound: 0
},

{
  kode: "B20",
  kategori: "Menengah Umum",
  bidang: "Membawa Hewan Dilindungi",
  keterangan: "Penyu, Hiu, Lumba-lumba, dll",
  denda: 8000,
  jail: 20,
  impound: 0
},

{
  kode: "B21",
  kategori: "Menengah Umum",
  bidang: "Penjualan Hewan Dilindungi",
  keterangan: "Melalui Media Sosial / Offline",
  denda: 7000,
  jail: 15,
  impound: 0
},

{
  kode: "B22",
  kategori: "Menengah Umum",
  bidang: "Penodongan terhadap Warga",
  keterangan: "Mengancam Warga dengan Senjata / Tanpa Senjata",
  denda: 7000,
  jail: 15,
  impound: 0
},

{
  kode: "B23",
  kategori: "Menengah Umum",
  bidang: "Penodongan terhadap Instansi",
  keterangan: "Mengancam Anggota dengan Senjata / Tanpa Senjata",
  denda: 8500,
  jail: 30,
  impound: 0
},

{
  kode: "B24",
  kategori: "Menengah Umum",
  bidang: "Berada di Zona Ilegal",
  keterangan: "Masuk / Berada di Red Zone Tanpa Izin",
  denda: 5500,
  jail: 10,
  impound: 0
},

{
  kode: "B25",
  kategori: "Menengah Umum",
  bidang: "Berada di TKP Penembakan",
  keterangan: "Sengaja / Tidak Sengaja di TKP Aktif",
  denda: 5000,
  jail: 10,
  impound: 0
},


// ================= MENENGAH UMUM =================
{
  kode: "B26",
  kategori: "Menengah Minuman",
  bidang: "Konsumsi Alkohol",
  keterangan: "Minum Alkohol di Tempat Umum",
  denda: 5000,
  jail: 10,
  impound: 0
},
{
  kode: "B27",
  kategori: "Menengah Minuman",
  bidang: "Mabuk di Tempat Umum",
  keterangan: "Mengganggu Keamanan Publik",
  denda: 5000,
  jail: 5,
  impound: 0
},
{
  kode: "B28",
  kategori: "Menengah Minuman",
  bidang: "Membawa Alkohol Ilegal",
  keterangan: "Tanpa Izin Label",
  denda: 8000,
  jail: 8,
  impound: 0
},
{
  kode: "B29",
  kategori: "Menengah Minuman",
  bidang: "Mengganggu Ketertiban",
  keterangan: "Akibat Alkohol",
  denda: 8000,
  jail: 8,
  impound: 0
},
{
  kode: "B30",
  kategori: "Menengah Minuman",
  bidang: "Minum di Area Terlarang",
  keterangan: "RS/Kantor/Pemerintahan",
  denda: 7000,
  jail: 10,
  impound: 0
},
{
  kode: "B31",
  kategori: "Menengah Minuman",
  bidang: "DUI / Drunk Driving",
  keterangan: "Mengemudi Mabuk",
  denda: 5000,
  jail: 8,
  impound: 0
},
{
  kode: "B32",
  kategori: "Menengah Minuman",
  bidang: "Penjualan Alkohol Ilegal",
  keterangan: "Distribusi Ilegal",
  denda: 7000,
  jail: 10,
  impound: 0
},
{
  kode: "B33",
  kategori: "Menengah Minuman",
  bidang: "Produksi Alkohol Ilegal",
  keterangan: "Moonshine / Oplosan",
  denda: 8000,
  jail: 8,
  impound: 0
},
{
  kode: "B34",
  kategori: "Menengah Minuman",
  bidang: "Mabuk + Senjata",
  keterangan: "Situasi Berbahaya",
  denda: 8000,
  jail: 10,
  impound: 0
},
{
  kode: "B35",
  kategori: "Menengah Minuman",
  bidang: "Akibat Fatal Alkohol",
  keterangan: "Menyebabkan Kekacauan",
  denda: 8000,
  jail: 10,
  impound: 0
},
{
  kode: "B36",
  kategori: "Menengah Minuman",
  bidang: "Menghalangi Tugas Aparat",
  keterangan: "Akibat Alkohol",
  denda: 8000,
  jail: 10,
  impound: 0
},

// ================= MENENGAH NARKOTIKA (PEMAKAI) =================
{
  kode: "B37",
  kategori: "Menengah Narkotika",
  bidang: "Pemakai Narkotika",
  keterangan: "Konsumsi Pribadi",
  denda: 4500,
  jail: 15,
  impound: 0
},
{
  kode: "B38",
  kategori: "Menengah Narkotika",
  bidang: "Narkotika Keras",
  keterangan: "Sabu, Kokain, dll",
  denda: 5500,
  jail: 15,
  impound: 0
},
{
  kode: "B39",
  kategori: "Menengah Narkotika",
  bidang: "Pengaruh Narkotika",
  keterangan: "Efek Aktif di Publik",
  denda: 4700,
  jail: 8,
  impound: 0
},
{
  kode: "B40",
  kategori: "Menengah Narkotika",
  bidang: "Narkoba Saat Berkendara",
  keterangan: "DUI Narkoba",
  denda: 5000,
  jail: 8,
  impound: 0
},
{
  kode: "B41",
  kategori: "Menengah Narkotika",
  bidang: "Narkoba + Senjata",
  keterangan: "Kombinasi Berbahaya",
  denda: 3800,
  jail: 10,
  impound: 0
},

  // BERAT
  {
    kode: "B1",
    kategori: "Berat",
    bidang: "Kriminal Berat",
    keterangan: "Perampokan",
    denda: 10000,
    jail: 40,
    impound: 0
  },

// ================= MENENGAH NARKOTIKA (KEPEMILIKAN) =================
{
  kode: "B42",
  kategori: "Menengah Narkotika",
  bidang: "Membawa Ganja",
  keterangan: "Ganja Mentah",
  denda: 8000,
  jail: 15,
  impound: 0
},
{
  kode: "B43",
  kategori: "Menengah Narkotika",
  bidang: "Membawa Marijuana",
  keterangan: "Siap Edar",
  denda: 10000,
  jail: 18,
  impound: 0
},
{
  kode: "B44",
  kategori: "Menengah Narkotika",
  bidang: "Membawa Sabu Mentah",
  keterangan: "Bahan Dasar",
  denda: 8000,
  jail: 15,
  impound: 0
},
{
  kode: "B45",
  kategori: "Menengah Narkotika",
  bidang: "Membawa Sabu",
  keterangan: "Siap Edar",
  denda: 12000,
  jail: 20,
  impound: 0
},
{
  kode: "B46",
  kategori: "Menengah Narkotika",
  bidang: "Membawa Efedrin",
  keterangan: "Prekursor",
  denda: 8000,
  jail: 15,
  impound: 0
},
{
  kode: "B47",
  kategori: "Menengah Narkotika",
  bidang: "Campuran Narkoba",
  keterangan: "Lebih dari 1 Jenis",
  denda: 10000,
  jail: 15,
  impound: 0
},
{
  kode: "B48",
  kategori: "Menengah Narkotika",
  bidang: "Menyimpan Narkotika",
  keterangan: "Tas / Gudang Kecil",
  denda: 10000,
  jail: 15,
  impound: 0
},
{
  kode: "B49",
  kategori: "Menengah Narkotika",
  bidang: "Narkotika Sintetis",
  keterangan: "Pil / Obat Sintetis",
  denda: 7000,
  jail: 10,
  impound: 0
},

// ================= MENENGAH NARKOTIKA (BANDAR/JARINGAN) =================
{
  kode: "B51",
  kategori: "Menengah Narkotika",
  bidang: "Mengedarkan Ganja",
  keterangan: "Lintas Area",
  denda: 8000,
  jail: 10,
  impound: 0
},
{
  kode: "B52",
  kategori: "Menengah Narkotika",
  bidang: "Jual Cannabis",
  keterangan: "Transaksi Langsung",
  denda: 5000,
  jail: 8,
  impound: 0
},
{
  kode: "B53",
  kategori: "Menengah Narkotika",
  bidang: "Jual Marijuana",
  keterangan: "Transaksi Langsung",
  denda: 10000,
  jail: 10,
  impound: 0
},
{
  kode: "B54",
  kategori: "Menengah Narkotika",
  bidang: "Kurir Sabu",
  keterangan: "Bandar",
  denda: 7000,
  jail: 10,
  impound: 0
},
{
  kode: "B55",
  kategori: "Menengah Narkotika",
  bidang: "Jual Sabu",
  keterangan: "Bandar Utama",
  denda: 10000,
  jail: 12,
  impound: 0
},
{
  kode: "B56",
  kategori: "Menengah Narkotika",
  bidang: "Efedrin",
  keterangan: "Produksi",
  denda: 8000,
  jail: 10,
  impound: 0
},
{
  kode: "B57",
  kategori: "Menengah Narkotika",
  bidang: "Impor Narkotika",
  keterangan: "Proses Pembuatan",
  denda: 8000,
  jail: 10,
  impound: 0
},
{
  kode: "B58",
  kategori: "Menengah Narkotika",
  bidang: "Jaringan Narkoba",
  keterangan: "Terorganisir",
  denda: 12000,
  jail: 15,
  impound: 0
},
{
  kode: "B59",
  kategori: "Menengah Narkotika",
  bidang: "Distribusi Instansi/Geng",
  keterangan: "Skala Besar",
  denda: 15000,
  jail: 15,
  impound: 0
},

// ================= PIDANA BERAT =================

{
  kode: "C1",
  kategori: "Berat",
  bidang: "Senjata Api Ilegal",
  keterangan: "Tanpa Surat Izin Resmi Polisi",
  denda: 9000,
  jail: 20,
  impound: 0
},
{
  kode: "C2",
  kategori: "Berat",
  bidang: "Senjata Laras Pendek Ilegal",
  keterangan: "Colt .45 / Pistol / Desert Eagle",
  denda: 10000,
  jail: 20,
  impound: 0
},
{
  kode: "C3",
  kategori: "Berat",
  bidang: "Senjata Laras Panjang Ilegal",
  keterangan: "Micro UZI / MP5 / Shotgun / Sniper",
  denda: 11000,
  jail: 25,
  impound: 0
},
{
  kode: "C4",
  kategori: "Berat",
  bidang: "Kepemilikan Senjata Berat",
  keterangan: "AK47 / M4 / Combat Shotgun / SPAS",
  denda: 12000,
  jail: 25,
  impound: 0
},
{
  kode: "C5",
  kategori: "Berat",
  bidang: "Produksi Senjata Ilegal",
  keterangan: "Pabrik / Lab Senjata",
  denda: 100000,
  jail: 0,
  impound: 0
},
{
  kode: "C6",
  kategori: "Berat",
  bidang: "Peredaran Senjata Ilegal",
  keterangan: "Jual / Bandar Senjata",
  denda: 100000,
  jail: 0,
  impound: 0
},
{
  kode: "C7",
  kategori: "Berat",
  bidang: "Kepemilikan Kevlar",
  keterangan: "Tanpa Surat Izin Polisi",
  denda: 8000,
  jail: 15,
  impound: 0
},
{
  kode: "C8",
  kategori: "Berat",
  bidang: "Pencucian Uang",
  keterangan: "Money Laundering",
  denda: 7000,
  jail: 15,
  impound: 0
},
{
  kode: "C9",
  kategori: "Berat",
  bidang: "Penembakan Warga",
  keterangan: "Luka Berat / Ancaman Nyawa",
  denda: 6000,
  jail: 15,
  impound: 0
},
{
  kode: "C10",
  kategori: "Berat",
  bidang: "Penembakan Aparat",
  keterangan: "EMS / Pemerintah",
  denda: 100000,
  jail: 0,
  impound: 0
},
{
  kode: "C11",
  kategori: "Berat",
  bidang: "Penembakan Polisi",
  keterangan: "Serangan Langsung ke PD",
  denda: 12000,
  jail: 0,
  impound: 0
},
{
  kode: "C12",
  kategori: "Berat",
  bidang: "Percobaan Pembunuhan",
  keterangan: "Niat Membunuh",
  denda: 7000,
  jail: 20,
  impound: 0
},
{
  kode: "C13",
  kategori: "Berat",
  bidang: "Pembunuhan",
  keterangan: "Menghilangkan Nyawa Orang",
  denda: 7000,
  jail: 25,
  impound: 0
},
{
  kode: "C14",
  kategori: "Berat",
  bidang: "Perampokan Warung",
  keterangan: "Toko Kecil / 24 Jam",
  denda: 10000,
  jail: 18,
  impound: 0
},
{
  kode: "C15",
  kategori: "Berat",
  bidang: "Perampokan Bank Kecil",
  keterangan: "Fleeca Bank",
  denda: 10000,
  jail: 18,
  impound: 0
},
{
  kode: "C16",
  kategori: "Berat",
  bidang: "Perampokan Bank Besar",
  keterangan: "Central Bank",
  denda: 10000,
  jail: 20,
  impound: 0
},
{
  kode: "C17",
  kategori: "Berat",
  bidang: "Perang Antar Geng",
  keterangan: "Bentrok Kelompok Terorganisir",
  denda: 12000,
  jail: 15,
  impound: 0
},
{
  kode: "C18",
  kategori: "Berat",
  bidang: "Penculikan",
  keterangan: "Menahan Paksa",
  denda: 8000,
  jail: 15,
  impound: 0
},
{
  kode: "C19",
  kategori: "Berat",
  bidang: "Penyanderaan",
  keterangan: "Ancaman Senjata",
  denda: 8000,
  jail: 15,
  impound: 0
},
{
  kode: "C20",
  kategori: "Berat",
  bidang: "Korupsi Instansi",
  keterangan: "Penyalahgunaan Wewenang",
  denda: 0,
  jail: 999,
  impound: 0
},
{
  kode: "C21",
  kategori: "Berat",
  bidang: "Terorisme",
  keterangan: "Teror Massal / Kota",
  denda: 100000,
  jail: 0,
  impound: 0
},

// ================= LALU LINTAS =================

{
  kode: "D1",
  kategori: "Lalu Lintas",
  bidang: "Tanpa SIM",
  keterangan: "Tidak Memiliki SIM",
  denda: 3500,
  jail: 0,
  impound: 1
},
{
  kode: "D2",
  kategori: "Lalu Lintas",
  bidang: "Tanpa Plat",
  keterangan: "Kendaraan Tanpa Plate",
  denda: 4000,
  jail: 0,
  impound: 1
},
{
  kode: "D3",
  kategori: "Lalu Lintas",
  bidang: "Tanpa Helm",
  keterangan: "Mengemudi Tanpa Helm",
  denda: 5000,
  jail: 0,
  impound: 0
},
{
  kode: "D4",
  kategori: "Lalu Lintas",
  bidang: "Hambat Petugas",
  keterangan: "Menghalangi Instansi",
  denda: 8000,
  jail: 0,
  impound: 2
},
{
  kode: "D5",
  kategori: "Lalu Lintas",
  bidang: "Parkir Sembarangan",
  keterangan: "Kendaraan Parkir Ilegal",
  denda: 4500,
  jail: 0,
  impound: 1
},
{
  kode: "D6",
  kategori: "Lalu Lintas",
  bidang: "Zona Terlarang",
  keterangan: "Zona Ilegal / Merah",
  denda: 7000,
  jail: 0,
  impound: 2
},
{
  kode: "D7",
  kategori: "Lalu Lintas",
  bidang: "Melawan Arus",
  keterangan: "Arah Berlawanan",
  denda: 3500,
  jail: 0,
  impound: 0
},
{
  kode: "D8",
  kategori: "Lalu Lintas",
  bidang: "Lawan Rambu",
  keterangan: "Tidak Mematuhi Rambu",
  denda: 5000,
  jail: 0,
  impound: 1
},
{
  kode: "D9",
  kategori: "Lalu Lintas",
  bidang: "Ngebut",
  keterangan: "Speeding Berlebihan",
  denda: 6500,
  jail: 0,
  impound: 1
},
{
  kode: "D10",
  kategori: "Lalu Lintas",
  bidang: "Ugal-ugalan",
  keterangan: "Berkendara Berbahaya",
  denda: 4000,
  jail: 0,
  impound: 2
},
{
  kode: "D11",
  kategori: "Lalu Lintas",
  bidang: "Kabur Razia",
  keterangan: "Menghindari Pemeriksaan",
  denda: 5000,
  jail: 0,
  impound: 1
},
{
  kode: "D12",
  kategori: "Lalu Lintas",
  bidang: "Balap Liar",
  keterangan: "Street Race",
  denda: 7000,
  jail: 0,
  impound: 2
},
{
  kode: "D13",
  kategori: "Lalu Lintas",
  bidang: "TKP Perang",
  keterangan: "Masuk Area Konflik",
  denda: 6000,
  jail: 0,
  impound: 3
},
{
  kode: "D14",
  kategori: "Lalu Lintas",
  bidang: "Barang Ilegal",
  keterangan: "Di Dalam Kendaraan",
  denda: 6000,
  jail: 0,
  impound: 2
},
{
  kode: "D15",
  kategori: "Lalu Lintas",
  bidang: "Senjata di Kendaraan",
  keterangan: "Tanpa Izin",
  denda: 7000,
  jail: 0,
  impound: 2
},
{
  kode: "D16",
  kategori: "Lalu Lintas",
  bidang: "Ganggu Operasi",
  keterangan: "Halangi Petugas",
  denda: 6500,
  jail: 0,
  impound: 1
},
{
  kode: "D17",
  kategori: "Lalu Lintas",
  bidang: "Melanggar Aturan",
  keterangan: "Tanpa Alasan",
  denda: 4500,
  jail: 0,
  impound: 0
},
{
  kode: "D18",
  kategori: "Lalu Lintas",
  bidang: "Kabur Saat Henti",
  keterangan: "Melarikan Diri",
  denda: 5000,
  jail: 0,
  impound: 1
},
{
  kode: "D19",
  kategori: "Lalu Lintas",
  bidang: "Putar Arah Ilegal",
  keterangan: "U-Turn Sembarangan",
  denda: 5000,
  jail: 0,
  impound: 0
},
{
  kode: "D20",
  kategori: "Lalu Lintas",
  bidang: "Kendaraan Suspect",
  keterangan: "Kendaraan Mencurigakan",
  denda: 8000,
  jail: 0,
  impound: 3
},

];

let filteredData = pasalData;

const list = document.getElementById("listPasal");
const pagination = document.getElementById("pagination");

const totalDendaEl = document.getElementById("totalDenda");
const totalJailEl = document.getElementById("totalJail");
const totalImpoundEl = document.getElementById("totalImpound");
const listPasalTerpilihEl = document.getElementById("listPasalTerpilih");

const searchInput = document.getElementById("search");
const kategoriSelect = document.getElementById("kategoriFilter");


function tampilkanPasal(data) {

  list.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const pageData = data.slice(start, end);

  pageData.forEach((p, index) => {

    const div = document.createElement("div");
    div.className = "pasal";
    div.id = "pasal-" + p.kode;

    div.innerHTML = `
      <input type="checkbox" data-index="${index + start}">

      <div>
        <div class="kode">${p.kode} - ${p.bidang}</div>
        <div class="kategori">${p.kategori} | ${p.keterangan}</div>
        <div class="harga">
          💰 $${p.denda} | ⏱️ ${p.jail} Bulan | 🚗 ${p.impound} Hari
        </div>
      </div>
    `;

    div.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") {
        const cb = div.querySelector("input");
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event("change"));
      }
    });

    list.appendChild(div);
  });

  aktifkanCheckbox();
  renderPagination(data.length);
}


function renderPagination(total) {

  const totalPages = Math.ceil(total / itemsPerPage);
  pagination.innerHTML = "";

  const maxVisible = window.innerWidth <= 600 ? 2 : 6;

  // Tombol Prev
  const prev = document.createElement("button");
  prev.textContent = "Prev";
  prev.disabled = currentPage === 1;

  prev.onclick = () => {
    currentPage--;
    tampilkanPasal(filteredData);
  };

  pagination.appendChild(prev);

  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxVisible + 1);
  }

  // Jika awal kepotong → tampilkan ...
  if (start > 1) {

    const first = document.createElement("button");
    first.textContent = "1";

    first.onclick = () => {
      currentPage = 1;
      tampilkanPasal(filteredData);
    };

    pagination.appendChild(first);

    if (start > 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pagination.appendChild(dots);
    }
  }

  // Nomor halaman utama
  for (let i = start; i <= end; i++) {

    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      currentPage = i;
      tampilkanPasal(filteredData);
    };

    pagination.appendChild(btn);
  }

  // Jika akhir kepotong → tampilkan ...
  if (end < totalPages) {

    if (end < totalPages - 1) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pagination.appendChild(dots);
    }

    const last = document.createElement("button");
    last.textContent = totalPages;

    last.onclick = () => {
      currentPage = totalPages;
      tampilkanPasal(filteredData);
    };

    pagination.appendChild(last);
  }

  // Tombol Next
  const next = document.createElement("button");
  next.textContent = "Next";
  next.disabled = currentPage === totalPages;

  next.onclick = () => {
    currentPage++;
    tampilkanPasal(filteredData);
  };

  pagination.appendChild(next);
}

function hitung() {

  let denda = 0;
  let jail = 0;
  let impound = 0;
  let kode = [];

  selectedPasal.forEach(i => {
    const p = pasalData[i];

    denda += p.denda;
    jail += p.jail;
    impound += p.impound;

    kode.push(p.kode);
  });

  totalDendaEl.textContent = denda.toLocaleString();
  totalJailEl.textContent = jail;
  totalImpoundEl.textContent = impound;

  listPasalTerpilihEl.textContent =
    kode.length ? kode.join(", ") : "-";

  document.getElementById("ringkasanText").textContent =
    kode.length
    ? `/ro ${kode.join(", ")} | ${jail} bulan | $${denda.toLocaleString()}`
    : "-";
}


function aktifkanCheckbox() {

  document.querySelectorAll("input[type='checkbox']")
    .forEach(cb => {

      cb.addEventListener("change", () => {

        const index = Number(cb.dataset.index);

        if (cb.checked) {
          selectedPasal.add(index);
        } else {
          selectedPasal.delete(index);
        }

        hitung();
      });
    });
}


function filterPasal() {

  const key = searchInput.value.toLowerCase();
  const kat = kategoriSelect.value;

  filteredData = pasalData.filter(p =>
    p.kode.toLowerCase().includes(key) ||
    p.keterangan.toLowerCase().includes(key) ||
    p.bidang.toLowerCase().includes(key)
  );

  if (kat !== "all") {
    filteredData = filteredData.filter(p => p.kategori === kat);
  }

  currentPage = 1;
  tampilkanPasal(filteredData);
}


function copyRingkasan() {

  const text = document.getElementById("ringkasanText").textContent;

  if (text === "-") return;

  navigator.clipboard.writeText(text);
}


function resetAll() {
  selectedPasal.clear();
  tampilkanPasal(filteredData);
  hitung();
}

searchInput.addEventListener("keyup", filterPasal);
kategoriSelect.addEventListener("change", filterPasal);

tampilkanPasal(pasalData);

// ================= MODE DARK / LIGHT =================

// ================= TOGGLE DARK MODE =================

const toggle = document.getElementById("themeToggle");

// Load setting terakhir
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
} else {
  document.body.classList.add("light");
}

// Saat toggle digeser
toggle.addEventListener("change", () => {

  if (toggle.checked) {

    document.body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");

  } else {

    document.body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");

  }

});

// ================= AUTO REKOMENDASI + SKOR =================

const recommendBtn = document.getElementById("recommendBtn");
const incidentInput = document.getElementById("incidentInput");
const recommendResult = document.getElementById("recommendResult");

// Manual keyword (bobot tinggi)
const manualRules = [

  { keywords: ["tabrak","nabrak","kecelakaan"], kode: "D12" },
  { keywords: ["kabur","lari","melarikan"], kode: "A8" },
  { keywords: ["mabuk","alkohol","miras"], kode: "B31" },
  { keywords: ["narkoba","sabu","ganja"], kode: "B37" },
  { keywords: ["senjata","pistol","tembak"], kode: "C10" },
  { keywords: ["rampok","begal","jambret"], kode: "C08" },
  { keywords: ["curi","maling","pencurian"], kode: "C01" },
  { keywords: ["bunuh","mati","pembunuhan"], kode: "C20" }

];

// Generate auto rules dari database
function generateAutoRules() {

  let auto = [];

  pasalData.forEach(p => {

    let text = `${p.bidang} ${p.keterangan}`.toLowerCase();
    text = text.replace(/[^\w\s]/g, "");

    let words = text.split(" ").filter(w => w.length > 3);

    if (words.length) {

      auto.push({
        keywords: words,
        kode: p.kode
      });

    }

  });

  return auto;
}

const autoRules = generateAutoRules();

// Klik Cari
recommendBtn.addEventListener("click", () => {

  const input = incidentInput.value.toLowerCase();

  if (!input) {
    recommendResult.innerHTML = "⚠️ Masukkan deskripsi kejadian dulu";
    return;
  }

  let scores = {}; // { kode: nilai }

  // Manual rules (bobot 3)
  manualRules.forEach(rule => {

    rule.keywords.forEach(word => {

      if (input.includes(word)) {

        scores[rule.kode] = (scores[rule.kode] || 0) + 3;

      }

    });

  });

  // Auto rules (bobot 1)
  autoRules.forEach(rule => {

    rule.keywords.forEach(word => {

      if (input.includes(word)) {

        scores[rule.kode] = (scores[rule.kode] || 0) + 1;

      }

    });

  });

  // Bonus kalau banyak kecocokan
  for (let kode in scores) {

    if (scores[kode] >= 4) {
      scores[kode] += 2;
    }

  }

  // Tidak ada hasil
  if (Object.keys(scores).length === 0) {

    recommendResult.innerHTML = "❌ Tidak ada pasal yang cocok";
    return;

  }

  // Urutkan skor tertinggi
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  // Skor max → persen
  const max = sorted[0][1];

  let html = "<b>Rekomendasi:</b><br>";

  sorted.forEach(([kode, score], i) => {

    const persen = Math.round((score / max) * 100);

    let medal = "";
    if (i === 0) medal = "🥇 ";
    if (i === 1) medal = "🥈 ";
    if (i === 2) medal = "🥉 ";

    html += `
      <div class="rec-item">
        ${medal}
        <button class="rec-btn" onclick="pilihPasal('${kode}')">
          ${kode}
        </button>
        <span class="rec-score">${persen}%</span>
      </div>
    `;

  });

  recommendResult.innerHTML = html;

});

// Klik → masuk kalkulasi
function pilihPasal(kode) {

  const pasal = pasalData.find(p => p.kode === kode);

  if (pasal && !selectedPasal.includes(pasal)) {

    selectedPasal.push(pasal);
    updateSelected();

  }
}

// ================= AUTO PINDAH PAGE + SCROLL KE PASAL =================

function pilihDanScroll(kode) {

  // Cari posisi pasal di hasil filter
  const index = filteredData.findIndex(p => p.kode === kode);

  // Kalau tidak ketemu
  if (index === -1) {
    alert("Pasal tidak ditemukan (mungkin karena filter aktif)");
    return;
  }

  // Hitung halaman
  const targetPage = Math.floor(index / itemsPerPage) + 1;

  // Pindah halaman
  currentPage = targetPage;
  tampilkanPasal(filteredData);

  // Tunggu render dulu baru scroll
  setTimeout(() => {

    const el = document.getElementById("pasal-" + kode);

    if (!el) return;

    // Scroll halus
    el.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    // Highlight
    el.classList.add("highlight");

    setTimeout(() => {
      el.classList.remove("highlight");
    }, 2000);

  }, 150);
}

