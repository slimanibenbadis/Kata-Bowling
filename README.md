# Kata du Bowling

## Pour commencer

Cliquez sur le bouton ci-dessous pour démarrer un nouvel environnement de développement :

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/maxds-lyon/Kata-xxx.git)

Une fois que vous avez lancé l'environnement de développement, vous pouvez commencer à travailler sur le kata. Voici quelques commandes utiles que vous pourriez avoir besoin d'utiliser :

- Pour lancer l'application en local, utilisez la commande : `npm run dev`
- Pour lancer les tests, utilisez la commande : `npm run test`

Les dépendances nécessaires sont déjà installées dans l'environnement Gitpod.

Le code à modifier se trouve dans `src/game.ts` et les tests sont déjà présent dans `src/game.spec.ts`


# Introduction

Dans le cadre de ce kata, les développeurs sont invités à se plonger dans le monde fascinant du bowling, un jeu riche en complexité qui offre une excellente opportunité de modélisation et de résolution de problèmes. Les règles du jeu, tout en étant relativement simples à comprendre, offrent un défi de taille lorsqu'il s'agit de les traduire en code.

*Ce que vous allez apprendre*

- La modélisation d'un jeu complexe
- L'utilisation efficace de la programmation orientée vers les tests (TDD)
- La gestion des états spéciaux tels que les "strikes" et les "spares"
- L'amélioration des compétences en résolution de problèmes

# Idées principales du kata

## 1. Les objectifs

L'objectif principal de ce kata est de créer un système capable de calculer le score d'une partie de bowling en tenant compte de toutes les règles du jeu. Cela inclut les situations spéciales comme les "strikes" et les "spares". Ce défi offre l'opportunité de travailler sur des compétences clés comme la modélisation de problèmes complexes, la programmation orientée vers les tests, et la réflexion logique.

## 2. L'approche standard

L'approche standard de ce kata consiste à commencer par les cas les plus simples, par exemple le calcul du score lorsque toutes les boules sont dans la gouttière, puis progresser vers des scénarios plus complexes. Il est essentiel d'utiliser le TDD tout au long du processus pour s'assurer que chaque nouvelle fonctionnalité est correctement testée avant de passer à la suivante.

## 3. Les avantages

Le kata "Bowling" offre de nombreux avantages pour les développeurs. Il permet d'améliorer les compétences en modélisation de problèmes et en résolution de problèmes. De plus, il offre l'opportunité d'approfondir la connaissance et la pratique du TDD, une compétence précieuse dans le développement logiciel moderne.

## 4. Les erreurs des développeurs

Les erreurs courantes lors de la réalisation de ce kata incluent l'ignorance des règles spéciales du bowling, comme les "strikes" et les "spares", ou l'essai de résoudre des scénarios trop complexes trop tôt. Une autre erreur courante est de ne pas utiliser le TDD de manière efficace, ce qui peut conduire à des problèmes de qualité du code.

## 5. Les pré requis

### 5.1 Les pré requis techniques

Pour réussir ce kata, vous aurez besoin d'une connaissance de base d'un langage de programmation et de l'expérience dans l'utilisation de frameworks de test. Une connaissance des règles du bowling est également utile, bien que le kata fournisse un résumé de ces règles.

### 5.2 Les pré requis de compétences

Il est recommandé d'avoir une certaine expérience de la résolution de problèmes et de la modélisation avant de tenter ce kata. De plus, une connaissance de la programmation orientée vers les tests (TDD) est fortement recommandée.

# Conclusion

Le kata "Bowling" offre une occasion inestimable d'améliorer vos compétences en programmation orientée vers les tests, en résolution de problèmes et en modélisation. Il pose un défi attrayant, qui est loin d'être simple, mais qui est aussi gratifiant. En suivant le rythme et en progressant pas à pas, vous découvrirez une nouvelle manière d'appréhender la programmation, en transformant un jeu classique en une opportunité d'apprentissage passionnante.

Ce parcours vous conduira à une meilleure compréhension de la modélisation de problèmes complexes, tout en vous donnant l'opportunité d'approfondir votre pratique du TDD. Les erreurs et les obstacles rencontrés en cours de route seront autant de leçons précieuses, car ils vous permettront d'affiner votre approche et de renforcer vos compétences.

En somme, le kata "Bowling" est bien plus qu'un simple exercice de programmation. C'est une invitation à embrasser la complexité, à réfléchir de manière créative et à développer un code solide, testable et efficace. Préparez-vous à chausser vos chaussures de bowling virtuelles et à plonger dans cette aventure stimulante de développement logiciel!

# Exemples

La réalisation de ce kata en code nécessite une compréhension approfondie des règles du bowling. Pour rappel, les règles essentielles sont:

* Un jeu se compose de 10 frames.
* Dans chaque frame, le joueur a deux chances de renverser 10 quilles.
* La note pour un frame est le total du nombre de quilles renversées, plus les bonus pour les strikes et les spares.
* Un spare est lorsque le joueur renverse toutes les 10 quilles en deux coups. Le bonus pour cela est le nombre de quilles renversées par le prochain coup + 10 points supplémentaires.
* Un strike est lorsque le joueur renverse toutes les 10 quilles lors du premier coup. Le bonus pour cela est la valeur des deux prochains coups + 10 points supplémentaires.
* Dans le dixième frame, un joueur qui fait un spare ou un strike peut lancer une ou deux boules supplémentaires pour compléter le frame.


