var main_lagi = true;
while (main_lagi) {
  // menangkap pilihan player
  var player = prompt('Tulis salah satu: gunting, batu, kertas');

  console.log(player);

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

  console.log(bot);

  // menentukan rules
  var hasil = null;
  var pesan_menang = 'Kamu menang';
  var pesan_kalah = 'Kamu kalah';
  var pesan_seri = 'Hasil seri';

  if (player === bot) {
    hasil = pesan_seri;
  } else if (player === 'gunting') {
    if (bot === 'kertas') {
      hasil = pesan_menang;
    } else {
      hasil = pesan_kalah;
    }
  } else if (player === 'batu') {
    if (bot === 'gunting') {
      hasil = pesan_menang;
    } else {
      hasil = pesan_kalah;
    }
  } else if (player === 'kertas') {
    if (bot === 'batu') {
      hasil = pesan_menang;
    } else {
      hasil = pesan_kalah;
    }
  } else {
    hasil = 'Input yang kamu lakukan belum benar';
  }

  // tampilkan hasil
  alert('Bot memilih ' + bot + '. ' + hasil);
  console.log(`Hasil: ${hasil}`);

  main_lagi = confirm('Main lagi?');
}

alert('Terima kasih sudah bermain');