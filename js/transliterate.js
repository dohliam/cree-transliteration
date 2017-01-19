function cas_sro(word) {
  translit = "";
  for (l in word) {
    letter = word[l];
    match = false;
    for (i in cas) {
      if (letter == cas[i].l) {
        translit += cas[i].t;
        match = true;
      }
    }
    if (match == false) {
      translit += letter;
    }
  }
    return translit;
}

function sro_cas(word) {
  translit = word.toLowerCase();
  for (i in sro) {
    var re = new RegExp(sro[i].l, "g");
    translit = translit.replace(re, sro[i].t);
  }
  return translit;
}

function convert_button() {
  word = window.textbox.value;
  direction = window.orthography.value;

  if (direction == "cas_sro") {
    window.output.innerHTML = cas_sro(word);
  } else {
    window.output.innerHTML = sro_cas(word);
  }
}
