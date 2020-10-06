function tugas22(){
  var kalimat = "Saya ingin belajar bersama";
  var pecahan = kalimat.split(" ");
  pecahan.forEach(function (item,index,array){
    console.log("Item : "+ item +" Index ke "+index);
  });
}

tugas22();
