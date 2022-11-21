var main_lagi = true;
while (main_lagi) {
  // menangkap pilihan player
  var player = prompt('Tulis salah satu: gunting, batu, kertas');

  console.log('Player: ' + player);

  // menangkap pilihan komputer
  // membangkitkan bilangan random
  var bot = Math.random();

  if (bot < 0.34) {
    bot = 'gunting';
  } else if (bot >= 0.34 && bot <= 0.67) {
    bot = 'batu';
  } else {
    bot = 'kertas';
  }

  console.log('Bot: ' + bot);

  // menentukan rules
  var hasil = null;
  var pesan_menang = 'Kamu menang';
  var pesan_kalah = 'Kamu kalah';
  var pesan_seri = 'Hasil seri';

  if (player === bot) {
    hasil = pesan_seri;
  } else if (player === 'gunting') {
    /*
    if (bot === 'kertas') {
      hasil = pesan_menang;
    } else {
      hasil = pesan_kalah;
    }
    */
    hasil = (bot === 'kertas') ? pesan_menang : pesan_kalah;
  } else if (player === 'batu') {
    hasil = (bot === 'gunting') ? pesan_menang : pesan_kalah;
  } else if (player === 'kertas') {
    hasil = (bot === 'batu') ? pesan_menang : pesan_kalah;
  } else {
    hasil = 'Input yang kamu lakukan belum benar';
  }

  // tampilkan hasil
  alert('Bot memilih ' + bot + '. ' + hasil);
  console.log(hasil + '\n ');

  main_lagi = confirm('Main lagi?');
}

alert('Terima kasih sudah bermain');