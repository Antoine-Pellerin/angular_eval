# Evaluation Angular

Pour cette évaluation, nous allons compléter le projet qui a servi de fil rouge aux cours Angular: Zenika E-Commerce.

## La page de détails d'un produit

Ajouter une page de détails d'un produit, pour cela vous devez:

 - Créer un composant `product-details` qui sera la page de détails d'un produit.
 - Brancher cette page au routeur sur l'url `/product/:id`.
 - Récupérer les détails du produit dans le serveur à l'url `/products/:id` (id étant l'id du produit à aller chercher.
 - Afficher les détails du produit: nom, description, prix et stock dans la page de détails.
 - Afficher un texte en rouge disant "DERNIER DISPONIBLE" dans la page de détails du produit si le stock est 1.
 - En dessous des détails du produit, afficher une liste de produits qui affiche les autres produits disponibles (avec un stock > 0) comme dans la page `home`.
 - Ajouter un bouton au composant `product` afin d'ouvrir la page de détails du produit en question.

## Bonus

 - Dans la liste des produits, afficher le prix en vert pour les produits dont le prix est inférieur au prix actuel.
 - Dans la page de détails d'un produit, afficher l'image en noir et blanc si le stock est épuisé.