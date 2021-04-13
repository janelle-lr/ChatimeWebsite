// MOBILE NAVIGATION BAR START
function openAcc() {
  document.getElementById('accountNav').style.width = '50%';
  document.getElementById('greyOut').style.display = 'block'; //puts grey overlay on body

}

function closeAcc() {
  document.getElementById('accountNav').style.width = '0%';
  document.getElementById('greyOut').style.display = 'none'; //removes overlay effect on the body

}

function openNav() {
  document.getElementById('hamburgerNav').style.width = '50%';
  document.getElementById('greyOut').style.display = 'block'; //puts grey overlay on body
}

function closeNav() {
  document.getElementById('hamburgerNav').style.width = '0%';
  document.getElementById('greyOut').style.display = 'none'; //removes overlay effect on the body
}
// MOBILE NAVIGATION BAR END

// DESKTOP NAVIGATON START
function openAccDesktop() {
  document.getElementById('accountDropdown').classList.toggle('show');
}
// DESKTOP NAVIGATION END


//CART OVERLAY POPUP MOBILE
if (window.location.href.indexOf('menu.html') > -1) {

  var cartButtonMenu = document.getElementById('cartButton');
  // const cartButtonMenuDesktop = document.querySelector('.cartButtonMenuDesktop');
  var cartOverlay = document.querySelector('.cartOverlay');
  var closeBtn = document.querySelector('.fa-close');
  cartButtonMenu.addEventListener('click', function() {
    cartOverlay.classList.add('active');
    document.getElementById('greyOut').style.display = 'block';
    document.getElementById('greyOut').style.zIndex = '16';
  });
  closeBtn.addEventListener('click', function() {
    cartOverlay.classList.remove('active');
    document.getElementById('greyOut').style.display = 'none';
    document.getElementById('greyOut').style.zIndex = '0';
  });

  var totalCartItems = 0;
  var totalItemsPrice = 0;

  document.getElementById('milkyCoconut').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Coconut Milky Iced Tea";
    var itemPrice = 6;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('milkyEarl').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Earl Grey Milky Iced Tea";
    var itemPrice = 6;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('milkyMango').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Mango Milky Iced Tea";
    var itemPrice = 6;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('fruityGuava').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Guava Fruity Iced Green Tea";
    var itemPrice = 7;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('fruityPeach').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Peach Fruity Iced Black Tea";
    var itemPrice = 7;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('fruityLemon').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Lemon Fruity Iced Black Tea";
    var itemPrice = 7;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('hotJasmine').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Hot Jasmine Tea";
    var itemPrice = 6;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });

  document.getElementById('frostTeaChoc').addEventListener('click', function() {
    totalCartItems++;
    var drinkName = "Chocolate Frost-Tea";
    var itemPrice = 6;
    totalItemsPrice += itemPrice;
    document.getElementById('itemName').innerHTML += drinkName + "<br>";
    document.getElementById('price').innerHTML += itemPrice + "<br>";
    document.getElementById('total').innerHTML = totalItemsPrice;
    document.getElementById('totalItems').innerHTML = totalCartItems;
  });
}

$(document).ready(function() {
  $('#all').show();
  $('#milkyDrinks, #fruityDrinks, #hotDrinks, #frostTeaDrinks').css({
    'opacity': '0.5'
  });

  $('#milkyDrinks').click(function() {
    $('#milkyDrinks').fadeTo(1000, 1);
    $('#allDrinks, #fruityDrinks, #hotDrinks, #frostTeaDrinks').fadeTo(500, 0.5);

    $('#milky').show();
    $('#fruity, #hot, #frostTea').hide();
  });

  $('#fruityDrinks').click(function() {
    $('#fruityDrinks').fadeTo(1000, 1);
    $('#allDrinks, #milkyDrinks, #hotDrinks, #frostTeaDrinks').fadeTo(500, 0.5);

    $('#fruity').show();
    $('#milky, #hot, #frostTea').hide();
  });

  $('#hotDrinks').click(function() {
    $('#hotDrinks').fadeTo(1000, 1);
    $('#allDrinks, #milkyDrinks, #fruityDrinks, #frostTeaDrinks').fadeTo(500, 0.5);

    $('#hot').show();
    $('#milky, #fruity, #frostTea').hide();
  });

  $('#frostTeaDrinks').click(function() {
    $('#frostTeaDrinks').fadeTo(1000, 1);
    $('#allDrinks, #milkyDrinks, #hotDrinks, #fruityDrinks').fadeTo(500, 0.5);

    $('#frostTea').show();
    $('#milky, #fruity, #hot').hide();
  });

  $('#allDrinks').click(function() {
    $('#allDrinks').fadeTo(1000, 1);
    $('#fruityDrinks, #milkyDrinks, #hotDrinks, #frostTeaDrinks').fadeTo(500, 0.5);

    //$('#all').show();
    $('#milky').show();
    $('#fruity').show();
    $('#hot').show();
    $('#all').show();
  });
});
