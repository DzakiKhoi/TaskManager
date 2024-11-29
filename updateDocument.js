const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'testsaja';

async function main() {
  try {
    await client.connect();
    console.log('Berhasil terhubung ke MongoDB database server');
    const db = client.db(namaDatabase);

    // Memperbaharui Data dengan perintah updateOne
    const updateOneResult = await db.collection('pengguna').updateOne(
      { _id: new ObjectId('674938a2d189c1470234366b') }, // Filter dengan _id yang benar
      { $set: { nama: 'Dzaki Khoirullah Winadri' } }           // Update
    );
    console.log('Hasil updateOne:', updateOneResult);

    // Memperbaharui Data dengan perintah
    /*
    const updateManyResult = await db.collection('Tugas').updateMany(
      { StatusPenyelesaian: false },                    // Filter
      { $set: { StatusPenyelesaian: true } }            // Update
    );
    console.log('Jumlah dokumen yang diubah (updateMany):', updateManyResult.modifiedCount);
    */
   
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  } finally {
    // Pastikan koneksi ditutup setelah semua operasi selesai
    await client.close();
    console.log('Koneksi ke MongoDB ditutup.');
  }
}

main();