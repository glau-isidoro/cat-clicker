//Classe Gato
var Cat = function(name, img, i) {
    this.name = name;
    this.img = img;
    this.i = i;
    this.count = 0;
}

//Função para renderizar o gato na área principal da tela
Cat.prototype.render = function() {
    $(".cat-clicker h2").html("<span class='name'>" + this.name +
        "</span> <span class='count'>" + this.count + "</span>");
    $(".cat-clicker img").attr("src", this.img);
    $(".cat-clicker img").attr("id", this.i);
}

//Função para aumentar o contador de cliques do gato
Cat.prototype.counter = function() {
    this.count++;
    $('.' + this.i + ' .count').text(this.count);
}

//Função para listar o nome dos gatos
function list(cats) {
    for(var c = 0 ; c < cats.length ; c++) {
        $(".list-group").append("<li id='" + cats[c].i +
            "' class='list-group-item'>" + cats[c].name + "</li>")
    }
}

//Array de gatos
var cats = [];

//Instanciando gatos - acrescentar aqui gatos novos
var cat1 = new Cat("Biscoito", "img/gato1.jpg", "cat1");
cats.push(cat1);
var cat2 = new Cat("Bolacha", "img/gato2.jpg", "cat2");
cats.push(cat2);
var cat3 = new Cat("Torradinha", "img/gato3.jpg", "cat3");
cats.push(cat3);
var cat4 = new Cat("Pudim", "img/gato4.jpg", "cat4");
cats.push(cat4);
var cat5 = new Cat("Alfajor", "img/gato5.jpg", "cat5");
cats.push(cat5);
var cat6 = new Cat("Pipoca", "img/gato6.jpg", "cat6");
cats.push(cat6);

//Chamando função para listar na tela
list(cats);

//Clique no nome do gato para aoarecer no meio
$("li").on("click", function (event) {
    var catObj = eval($(this).attr("id"));
    catObj.render();
});

//Clique na imagem do gato para aumentar seu contador
$("img").on("click", function (event) {
    var catObj = eval($(this).attr("id"));
    catObj.counter();
    catObj.render();
});
