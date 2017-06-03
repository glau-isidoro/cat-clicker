var Cat = function(name, img, i) {
    this.name = name;
    this.img = img;
    this.i = i;
    this.count = 0;
}

Cat.prototype.render = function() {
    $(".cat-clicker").append("<li class='" + this.i + "'><img src='" + this.img + "' alt='gato' class='img-responsive'>"
    + "<span class='name'>" + this.name + "</span> <span class='count'>" + this.count + "</span></li>")
}

Cat.prototype.counter = function() {
  this.count++;
  console.log(this.name + " - " + this.count)
  $('.' + this.i + ' .count').text(this.count);
}

var cat1 = new Cat("Biscoito", "img/gato1.jpg", "cat1");
var cat2 = new Cat("Bolacha", "img/gato2.jpg", "cat2");
var cat3 = new Cat("Torradinha", "img/gato3.jpg", "cat3");

cat1.render();
cat2.render();
cat3.render();

$("li").on("click", function (event) {
    var catObj = eval($(this).attr("class"));
    catObj.counter();
});
