cookie = setInterval(function(){$('#bigCookie').click();}, 1);
upgrade = document.getElementsByClassName('crate upgrade enabled');
product = document.getElementsByClassName('product unlocked enabled');

if(product.length > 0){
  setInterval(clickProduct, 100);
}

function clickProduct(){
  product[0].click();
  product = document.getElementsByClassName('product unlocked enabled')
}

if(upgrade.length > 0){
  setInterval(clickUpgrade, 100);
}

function clickUpgrade(){
  upgrade[0].click();
  upgrade = document.getElementsByClassName('crate upgrade enabled')
}
