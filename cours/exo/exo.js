function Person(name, date){
    this.name=name;
    this.birthDay= date;
    this.friends=new Array();

    this.addfriends=function(friend){
      this.friends.push(friend)
    };
   

    this.sayNameFriends=function(){
        this.friends.forEach(element => {
            console.log(element.name);
        });
    };
    
    this.olderthanFriends=function(){
      /*if (this.friends.find(element => element.birthDay>this.birthDay) != null){
        return true;
      }
      return false;*/
      return this.friends.every(x=>x.birthDay>this.birthDay);
    };
    
  };


function start(){
    var P1= new Person("Nicho", new Date(1949,11,10));
    var P2= new Person("Fred", new Date(1979,09,27));
    var P3= new Person("Seb", new Date(1980,11,20));
    var P4= new Person("Ed", new Date(1979,02,04));

    P1.addfriends(P2);
    P1.addfriends(P3);
    P1.addfriends(P4);

    P1.sayNameFriends();
    //P1.sayNameFriendsMarcheAussi();

    //if (P1.olderthanFirends(P1.birthDay))
    if (P1.olderthanFriends())
      console.log("je suis le plus vieux de la bande");
    else
      console.log("je ne suis pas le plus vieux de la bande");

  }

function modifLien(){
  var node = document.getElementById("second");
  node.textContent = "coucou";
  node.style.color = "orange";
}

function modifcolorLien(){
  var node = document.getElementById("premier");
  if (node.style.backgroundColor == "blue"){
    node.style.backgroundColor = "red";
  } else {
    node.style.backgroundColor = "blue";
  }
  
}

function creerSommaire(){
  var sommaire = document.getElementById("sommaire");
  var x = document.getElementsByClassName("titreSommaire")
  var i;
  for (i=0; i< x.length; i++){
    var titre = document.createElement("a");
    var textTitre = document.createTextNode("Titre " + parseInt(i+1));
    titre.appendChild(textTitre);
    titre.setAttribute("href", "#titre"+i)
    sommaire.appendChild(titre);
  }
}

function ajouterPersonne(){

  var ul = document.getElementById("donnees");
  var li = document.createElement("li");
  var select = document.getElementById("nomDel");
  
  var map1 = new Map();
  var x = document.getElementsByClassName("listeDeNoms");
  var i = 0;
  for (var nom of x){
    map1.set(i, nom.textContent);
    i += 1;
  }

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var texteLi = document.createTextNode(nom + "/" + prenom);
  li.appendChild(texteLi);
  li.setAttribute("class", "listeDeNoms")
  ul.appendChild(li);

  map1.set(parseInt(i+1), nom + "/" + prenom);

  select.innerHTML = "";

  for (var items of map1.values){
    var option = document.createElement("option");
    var optionTexte = document.createTextNode(items);
    option.appendChild(optionTexte);
    select.appendChild(option);
  }
}