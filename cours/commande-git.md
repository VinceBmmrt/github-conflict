# Commande git

## Création / Déplacement de banches

```bash
# Créer une branch et aller dessus
git checkout -b <nom-de-la-branch>
git checkout -b develop
```

```bash
# Aller sur une branch
git checkout <nom-de-la-branch>
git checkout develop
```

## Récupérer les branch créer sur le repo distant

Utile pour récupérer les branch créer par les autres membres de l'équipe.
Ne pas oublier de se déplacer sur les branchs après les avoir récupérer.

```bash
git fetch
```

## Valider son travail

```bash
# Je rajoute les fichiers que je souhaite commit
git add monFichier monFichier2
# Je rajoute tous les fichiers modifier à mon commit
git add .
```

```bash
# Je commit mon travail
git commit -m "Mon super travail qui est trop kool"
```

## Envoyer son travail sur le repo distant

```bash
# Je push mon travail sur la branch sur laquelle je suis
git push
# On peut aussi spécifier la branch sur laquelle on veut push
git push origin <nom-de-la-branch>
```

## Récupérer le travail des autres

De manière régulière afin d'éviter d'avoir trop de conflict, je vais récupérer le travail des autres.

```bash
# Je souhaite récupérer le travail des autres sur MA branch
# ON DOIT ÊTRE SUR DE SE SITUER SUR LA BONNE BRANCH
git status

git pull --rebase origin <nom-de-la-branch>
# Ici je récupère les dernières modifications qui ont eu lieu sur la branch `develop`
git pull --rebase origin develop
```

C'est ici que les conflicts peuvent arriver

## Résoudre les conflicts

On va avoir plein de fichier avec des `>>>>` et des `<<<<` dedans.
Ce sont les fichiers avec des conflits.
LA commande à utiliser régulièrement pour savoir où on en est.

```bash
git status
```

On devoir résoudre les conflicts sur tous les fichiers concernés.

Résoudre c'est modifier les fichiers en conflit afin d'avoir le code final que l'on souhaite.

Une fois le fichier correctement modifié, on va devoir le rajouter au commit.

```bash
git add monFichierEnConflitMaisMaintenantPlus
```

Une fois tous les fichiers en conflit résolu, on va pouvoir continuer le rebase.

```bash
# On continue le rebase, on va récupérer le commit suivant
git rebase --continue
```

Une fois tous les conflits résolu, on va pouvoir push notre travail.

```bash
# Push la branch courante
git push
# Si vous avez une erreur car vous aviez déjà pusher votre branch sur github
# Il faut forcer le push
git push --force
# Push la branch spécifié
git push origin <nom-de-la-branch>
```

## Quand on a fini une feature

Go sur Github pour créer une Pull Request.

Une personne autre valide notre travail et s'occupera de la fuisonner avec la branch `develop`.

Faire le merge à la main.

```bash
# Je me met sur la branch de la personne
git checkout <nom-de-la-branch>
# Je récupère le travail de la personne
git pull --rebase origin <nom-de-la-branch>

# Je me met sur la branch de destination `develop`
git checkout develop
# Je fusionne le travail de la personne
git merge <nom-de-la-branch>

# Je push le travail sur la branch `develop`
git push origin develop
```
