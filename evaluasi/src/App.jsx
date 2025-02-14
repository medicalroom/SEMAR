import React, { useState } from 'react';
import './index.css';

function App() {
  const data = [
    {
      no: 1,
      usia: '4 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Menumpu dengan kedua lengan dan mengangkat kepala',
    },
    {
      no: 1,
      usia: '4 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Bermain-main dengan kedua tangan',
    },
    {
      no: 1,
      usia: '4 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Meraih dan mengamati mainan',
    },
    {
      no: 1,
      usia: '4 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak:
        'Mendengar suara kertas diremas tanpa melihatnya atau bermain bibir sambil mengeluarkan air liur',
    },
    {
      no: 1,
      usia: '4 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Melihat ke ibu sambil tersenyum saat disapa',
    },
    {
      no: 2,
      usia: '8 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Duduk sendiri dan mengambil posisi ongkong-ongkong sambil bertahan sebentar',
    },
    {
      no: 2,
      usia: '8 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Menggenggam balok mainan dengan seluruh permukaan tangan',
    },
    {
      no: 2,
      usia: '8 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Memperhatikan, mencari, dan mengikuti arah mainan yang jatuh',
    },
    {
      no: 2,
      usia: '8 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Mengeluarkan suara: ma.. ma... ma...., da... da...., ta... ta.... ta....',
    },
    {
      no: 2,
      usia: '8 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Bermain ciluk... baa...',
    },
    {
      no: 3,
      usia: '12 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Berdiri sendiri dan berjalan sambil berpegangan pada satu tangan',
    },
    {
      no: 3,
      usia: '12 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Mengambil benda kecil dengan ujung ibu jari dan jari telunjuk',
    },
    {
      no: 3,
      usia: '12 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Menunjuk bagian dari mainan, misalnya roda mobil-mobilan atau mata boneka',
    },
    {
      no: 3,
      usia: '12 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Mengucapkan satu kata atau lebih dan tahu artinya',
    },
    {
      no: 3,
      usia: '12 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Memberikan mainan pada ibu',
    },
    {
      no: 4,
      usia: '18 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Berlari tanpa terjatuh',
    },
    {
      no: 4,
      usia: '18 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Menyusun tiga balok mainan',
    },
    {
      no: 4,
      usia: '18 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Menutup gelas',
    },
    {
      no: 4,
      usia: '18 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Mengucapkan sepuluh kata atau lebih dan tahu artinya',
    },
    {
      no: 4,
      usia: '18 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Menyebutkan namanya bila ditanya',
    },
    {
      no: 5,
      usia: '24 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Melompati garis dengan kedua kaki sekaligus',
    },
    {
      no: 5,
      usia: '24 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Membuka botol dengan memutar tutupnya',
    },
    {
      no: 5,
      usia: '24 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Menunjuk dan menyebutkan 6 bagian tubuh (mata, hidung, mulut, kepala, tangan, telinga, dst.)',
    },
    {
      no: 5,
      usia: '24 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Menjawab dengan kalimat yang terdiri dari dua kata',
    },
    {
      no: 5,
      usia: '24 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Meniru kegiatan orang dewasa',
    },
    {
      no: 6,
      usia: '36 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Turun tangga dengan kaki bergantian tanpa berpegangan',
    },
    {
      no: 6,
      usia: '36 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Meniru garis tegak, garis datar, dan lingkaran',
    },
    {
      no: 6,
      usia: '36 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Menyebut tiga warna',
    },
    {
      no: 6,
      usia: '36 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Bertanya dengan memakai kata apa, siapa, di mana?',
    },
    {
      no: 6,
      usia: '36 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Bermain bersama dengan teman',
    },
    {
      no: 7,
      usia: '48 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Melompat dengan satu kaki di tempat',
    },
    {
      no: 7,
      usia: '48 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Memegang pensil dengan tiga jari',
    },
    {
      no: 7,
      usia: '48 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Menghitung tiga balok mainan dengan cara menunjuk',
    },
    {
      no: 7,
      usia: '48 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Menjawab dengan menggunakan kalimat lengkap (lebih dari dua kata)',
    },
    {
      no: 7,
      usia: '48 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Bermain bersama teman dalam satu permainan',
    },
    {
      no: 8,
      usia: '60 Bulan',
      aspekPerkembangan: 'Gerakan Kasar',
      kemampuanAnak: 'Melompat dengan satu kaki ke arah depan',
    },
    {
      no: 8,
      usia: '60 Bulan',
      aspekPerkembangan: 'Gerakan Halus',
      kemampuanAnak: 'Meniru gambar bujur sangkar, segitiga, dan tanda (+)',
    },
    {
      no: 8,
      usia: '60 Bulan',
      aspekPerkembangan: 'Pengamatan',
      kemampuanAnak: 'Menggambar orang',
    },
    {
      no: 8,
      usia: '60 Bulan',
      aspekPerkembangan: 'Bicara',
      kemampuanAnak: 'Bercerita dengan makna',
    },
    {
      no: 8,
      usia: '60 Bulan',
      aspekPerkembangan: 'Sosialisasi',
      kemampuanAnak: 'Bermain bersama mengikuti urutan permainan',
    },
  ];

  const [selectedAge, setSelectedAge] = useState(null);

  const handleAgeClick = (usia) => {
    setSelectedAge(usia);
  };

  const filteredData = selectedAge ? data.filter((item) => item.usia === selectedAge) : data;

  const uniqueAges = [...new Set(data.map((item) => item.usia))];

  return (
    <div className="container">
      <h1>Evaluasi Anak Difabel</h1>

      <div className="age-buttons">
        {uniqueAges.map((usia) => (
          <button key={usia} onClick={() => handleAgeClick(usia)}>
            {usia}
          </button>
        ))}
        {selectedAge && (
          <button onClick={() => handleAgeClick(null)}>Tampilkan Semua</button>
        )}
      </div>

      <table className="evaluation-table">
        <thead>
          <tr>
            <th>Aspek Perkembangan</th>
            <th>Kemampuan Anak</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.aspekPerkembangan}</td>
              <td>{item.kemampuanAnak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
