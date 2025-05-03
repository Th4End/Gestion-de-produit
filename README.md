# Gestion de Produits - API avec Angular et Node.js

Ce projet est une application web permettant de gérer une liste de produits. L'application utilise Angular pour le frontend et Node.js avec Express pour le backend. L'objectif est de permettre aux utilisateurs de consulter, créer, mettre à jour et supprimer des produits à travers une interface API REST.

## Technologies utilisées

- **Frontend** : Angular
- **Backend** : Node.js avec Express
- **Base de données** : (Optionnel, selon la mise en place de ton API)
- **Module HTTP** : Angular HttpClient pour les appels API
- **Routage** : Angular Router
- **Serveur API local** : `http://localhost:3000`
- **Serveur FRONT local**: `http://localhost:4200`

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [Angular CLI](https://angular.io/cli) (version 12 ou supérieure)

## Installation

### 1. Cloner le projet

Clonez ce repository sur votre machine locale :
```bash
git clone https://github.com/Th4End/Gestion-de-produit.git
```
Pour l'api : 
````bash 
git clone 'https://github.com/Th4End/epsi-tp-02.git'
````

### 2. Installer les dépendances
- **API** : 
    ```bash
    cd epsi-tp-02
    npm install
    ```
- **Front** : 
    ```bash 
        cd GESTION_DE_PROJET
        npm install
    ```
### 3. Démarrer les serveurs
Démarrer l'API et initialiser la base de donnée
Dans le dossier API, démarrez le serveur Express avec la commande suivante :
```bash
cd epsi-tp-02
npm run init-db 
npm run start
```
Cela démarrera le serveur sur http://localhost:3000.

Démarer le frontend : 
```bash 
cd GESTION_DE_PROJET
ng serve
```
Cela démarrera le serveur sur http://localhost:4200.
## Fonctionnalités
- **1**. Gestion des produits

        Consulter tous les produits : Affiche la liste de tous les produits disponibles.

        Consulter un produit par ID : Permet de visualiser les détails d'un produit spécifique en utilisant son identifiant unique.

        Ajouter un produit : Permet de créer un nouveau produit en remplissant un formulaire avec les informations nécessaires.

        Mettre à jour un produit : Permet de modifier les informations d'un produit existant.

        Supprimer un produit : Permet de supprimer un produit de la liste.

- **2**. Enrichir la description d'un produit
        
        Chaque produit peut avoir une description enrichie, générée par un service externe (API externe, par exemple OpenAI). 
        Une fois enrichie, la description sera mise à jour dans le produit.

## API Backend
    L'API expose plusieurs points d'accès pour gérer les produits. Voici un aperçu des routes disponibles :

    GET /api/products : Récupère tous les produits.

    GET /api/products/:id : Récupère un produit par son ID.

    POST /api/products : Crée un nouveau produit.

    PUT /api/products/:id : Met à jour un produit existant.

    DELETE /api/products/:id : Supprime un produit.

    POST /api/products/:id/enrich : Enrichit la description d'un produit.
```bash
Exemple de réponse pour GET /api/products :
[
  {
    "id": 1,
    "name": "Produit A",
    "description": "Description du produit A",
    "price": 100,
    "category": "Électronique"
  },
  {
    "id": 2,
    "name": "Produit B",
    "description": "Description du produit B",
    "price": 150,
    "category": "Maison"
  }
]
```
##  Structure du projet
    Voici la structure de base de l'application :
```bash
    gestion-de-produits/
    ├── backend/
    │   ├── node_modules/           # Dépendances Node.js
    │   ├── server.js               # Fichier principal du serveur Node.js
    │   └── package.json            # Dépendances backend
    └── frontend/
        ├── src/
        │   ├── app/
        │   │   ├── components/     # Composants Angular (ex : navbar, product-list)
        │   │   ├── services/       # Services Angular (ex : product.service.ts)
        │   │   ├── app.component.ts
        │   │   └── app.module.ts   # Module principal de l'application
        ├── package.json            # Dépendances frontend
        ├── angular.json            # Configuration Angular
        └── tsconfig.json           # Configuration TypeScript
```
## Contribution
Les contributions sont les bienvenues ! Si vous avez des suggestions, des corrections ou des améliorations, veuillez ouvrir une issue ou soumettre une pull request.

License
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

### Explication du contenu du `README.md` :
- **Technologies utilisées** : Un résumé des technologies utilisées dans le projet.
- **Prérequis** : Liste des outils nécessaires pour faire fonctionner le projet.
- **Installation** : Instructions pour installer les dépendances et démarrer les serveurs backend et frontend.
- **Fonctionnalités** : Description des fonctionnalités principales de l'application.
- **API Backend** : Détail des routes disponibles dans l'API backend.
- **Structure du projet** : Une vue d'ensemble de l'organisation des fichiers du projet.
- **Contribution** : Encourage les autres à contribuer au projet avec des instructions sur la manière de le faire.
- **License** : Information sur la licence du projet (ici MIT).

