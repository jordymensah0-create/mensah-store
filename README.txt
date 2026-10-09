MENSAH Store — guide de démarrage
================================

FICHIERS
- index.html : structure et contenu des sections.
- style.css : couleurs, mise en page et affichage mobile.
- script.js : catalogue, recherche, filtres et liens WhatsApp.
- images/ : logo et illustrations d’exemple.

OUVRIR LE SITE
1. Ouvrez Visual Studio Code.
2. Choisissez Fichier > Ouvrir un dossier et sélectionnez le dossier MENSAH Store.
3. Ouvrez index.html dans un navigateur. Pour prévisualiser les changements facilement, installez l’extension Live Server dans VS Code, puis cliquez sur « Go Live ».
4. Sur téléphone, ordinateur et téléphone doivent être connectés au même réseau Wi-Fi. Dans Live Server, ouvrez l’adresse réseau de l’ordinateur sur le téléphone. Vous pouvez aussi publier le site et ouvrir son lien.

LOGO ET PHOTOS
- Remplacez images/logo-mensah.svg par votre logo (gardez ce nom), ou modifiez le chemin du logo dans index.html.
- Placez les photos de vos articles dans images/. Préférez des images JPG, PNG ou WebP carrées ou verticales, légères, et utilisez des noms simples sans accents (ex. sac-rouge.jpg).
- Remplacez le champ photo de l’article dans script.js par le nom exact du fichier.
- Les dessins SVG fournis sont des visuels temporaires, pas des photos de produits.

AJOUTER OU MODIFIER UN ARTICLE
Dans script.js, repérez const PRODUCTS. Chaque ligne entre accolades correspond à un article. Exemple à copier dans la liste (ajoutez une virgule après chaque bloc, sauf le dernier) :
{ name: "Mon article", price: 10000, description: "Petite description.", category: "Accessoires", photo: "mon-article.jpg", available: true, badge: "Nouveau" }
- name : nom affiché.
- price : prix en nombre, sans espace ni devise (la devise FCFA s’affiche automatiquement).
- description : courte présentation.
- category : catégorie ; le filtre est créé automatiquement.
- photo : nom de la photo déposée dans images/.
- available : true pour disponible, false pour indisponible.
- badge : petit ruban sur la photo (facultatif).
Pour supprimer un article, supprimez simplement toute sa ligne entre accolades.
Les huit produits et prix actuels sont fictifs : remplacez-les avant la mise en ligne.

COORDONNÉES ET WHATSAPP
Au début de script.js, modifiez CONFIG.whatsappNumber avec votre numéro au format international, chiffres uniquement, sans +, espace ni tiret. Le numéro affiché dans les messages et le numéro wa.me sont construits à partir de cette valeur. Modifiez phoneDisplay pour l’affichage dans la section Contact.
Modifiez email avec votre adresse e-mail et location avec votre ville/quartier. Remplacez les liens # de socials par les liens complets de vos vrais profils. Aucun profil ni lieu réel n’est fourni ici.

TESTER ET PUBLIER
Avant publication, testez les catégories, la recherche, la demande de livraison et un bouton de commande. Les liens WhatsApp ouvrent l’application ou WhatsApp Web ; le numéro d’exemple doit être remplacé pour recevoir les commandes.
Pour une publication gratuite, créez un compte GitHub, mettez les fichiers du site dans un dépôt public, puis activez GitHub Pages dans Settings > Pages en choisissant la branche principale et le dossier racine. GitHub vous donnera un lien public à partager. Netlify et Cloudflare Pages proposent aussi un hébergement gratuit pour un site statique.

Le site ne traite pas les paiements et ne confirme pas automatiquement les stocks. Les clients échangent avec vous sur WhatsApp ; confirmez les zones de livraison, les frais, la disponibilité et les modalités de paiement avec eux.
