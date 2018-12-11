// Générer un nombre aléatoire entre 1 et 100.
//    Stocker le nombre de tours déjà joués. Commencer par 1.
//    Fournir au joueur le moyen de saisir un nombre.
//    Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.
//    Vérifier si le nombre saisi par le joueur est correct.
//    S'il est correct :
//        Afficher un message de félicitations.
//        Empêcher que le joueur saisisse de nouveau un nombre.
//        Afficher un contrôle pour que le joueur puisse rejouer.
//    S'il est faux et que le joueur a encore des tours à jouer :
//        Informer le joueur que sa proposition de nombre est fausse.
//        Lui permettre d'entrer une nouvelle proposition de nombre.
//        Incrémenter le nombre de tours de 1.
//    S'il est faux et que le joueur n'a plus de tours à jouer :
//        Informer le joueur qu'il a perdu et que la partie est finie.
//        Empêcher que le joueur saisisse de nouveau un nombre.
//        Afficher un contrôle pour que le joueur puisse rejouer.
//    Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.


//Réalisé avec un tuto en support






let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;


//Définit les variables
function checkGuess(){
  let userGuess = Number(guessField.value); //Déclare variable et définit sa valeur
  if (guessCount === 1) {//utilisation de number pour s'assurer que la valeur est bien un nombre
    guesses.textContent ='Propositions précédentes : ';
    }

  guesses.textContent += userGuess + ' ';

//définit un bloc appelé par la meme fonction
 
  if (userGuess === randomNumber) {//définition de nos conditions 
    lastResult.textContent ='Bravo, vous avez trouvé le nombre !';//Résulatat égal a random phrase
    lastResult.style.backgroundColor ='violet';//
    lowOrHi.textContent ='';
    setGameOver();//termine le jeu

  } else if (guessCount === 3) { //Demande a verifier le nbr de tentatives 
    lastResult.textContent = '!!! PERDU !!!';//Affiche si false
    setGameOver();//sort du jeu

  } else { // exécuté que si aucun des deux autres tests n'a renvoyé vrai
    lastResult.textContent ='Faux !';
    lastResult.style.backgroundColor = 'red';

    if (userGuess < randomNumber) {//definit si le chiffre est inferieur
      lowOrHi.textContent = 'Le nombre saisi est trop petit !';//imprime ecran
    }else if (userGuess > randomNumber) {//définit si le chiffre est supérieur
      lowOrHi.textContent = 'Le nombre saisi est trop grand !';//imprime écran
    }
}
 
  guessCount++;//Décompte les tours (on ajoute 1 a la variable)
  guessField.value = '';//affiche les valeurs dejà saisient je crois mais je suis pas sure
  guessField.focus();//nouveau formulaire pret pour la nouvelle saisie


}
guessSubmit.addEventListener('click', checkGuess);//Méthode qui prends deux valeurs d'entrée (arg) est produit le click


function setGameOver() //ce qui est doit se réaliser une fois le jeu terminé
{
  guessField.disabled = true;//desactive l'entrée
  guessSubmit.disabled = true;//
  resetButton = document.createElement('button');//le bouton 
  resetButton.textContent = 'Start new game';//phrase qui apparait en appuyant sur le bouton
  document.body.appendChild(resetButton);//imprime le bouton
  resetButton.addEventListener('click', resetGame);//remise a zero
}

function resetGame() {//interface du jeu terminé Remettre le jeu a zero
  guessCount = 1;//verifie le nbr d'entrée

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);//detail des conditions pour reset le jeu
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;//
}

      
