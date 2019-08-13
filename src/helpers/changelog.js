export const logTypes = {
  BUG: 'bug',
  FEATURE: 'fonctionnalité',
  NEW: 'nouveauté',
  INFO: 'info'
}

export default [
  {
    date: '1565126162912',
    type: logTypes.BUG,
    title: 'Mélange de chapitres',
    description:
      "En changeant de chapitre, certains versets du chapitre précédent se retrouvaient dans le chapitre suivant. Merci à Lysiane d'avoir remonté le bug."
  },
  {
    date: '1564895816518',
    type: logTypes.BUG,
    title: 'ERR_INTERNET_DISCONNECTED',
    description:
      "Il y avait un bug 'Error loading page - ERR_INTERNET_DISCONNECTED' à l'affiche de la Bible. Ce bug a été théoriquement réglé. N'hésitez à me donner des retours si ça continue."
  },
  {
    date: '1564107002776',
    type: logTypes.BUG,
    title: 'Malachie 4 - Bug sur la recherche et dans la Bible',
    description:
      "Certaines versions n'ont pas Malachie 4. De ce fait l'application plantait quand on essayait d'y accéder."
  },
  {
    date: '1563995302301',
    type: logTypes.FEATURE,
    title: 'Notes intégrées 🎉',
    description:
      "Il est maintenant possible de voir vos notes directement dans la Bible, à la suite des versets. Il est toujours possible de retourner à l'affichage classique en allant dans les paramètres de mise en forme."
  },
  {
    date: '1563752259891',
    type: logTypes.INFO,
    title: 'Vous remarquez des bugs ?',
    description:
      "S'il vous plaît, n'hésitez surtout pas à reporter les bugs dans l'application! Dans les paramètres, vous pouvez directement me joindre par mon mail ou reporter un bug. Merci :) !"
  },
  {
    date: '1563752166214',
    type: logTypes.NEW,
    title: 'Verset sélectionné',
    description:
      'Quand vous choisissez un verset vous aurez dorénavant une légère animation pour trouver facilement le verset sélectionné.'
  },
  {
    date: '1563749584258',
    type: logTypes.NEW,
    title: 'Ouvrir dans Bible',
    description:
      "Quand vous accédez à vos surbrillances, un verset trouvé dans une concordance, ou des résultats de recherche, la Bible s'ouvre dans une nouvelle page en lecture seule, pour ne pas vous sortir de votre contexte. J'ai ajouté un bouton 'Ouvrir dans Bible' pour vous permettre de retourner à l'accueil."
  },
  {
    date: '1563746444270',
    type: logTypes.BUG,
    title: 'Mode sombre - définition',
    description:
      'En mode sombre, les définitions des strongs apparaissaient parfois en noir. Ce bug a été réglé'
  },
  {
    date: '1562753462096',
    type: logTypes.NEW,
    title: 'Ajout de la Bible King James Française (KJF)!',
    description: `🎉Bonne nouvelle !🎉
    
La bible King James Française a été ajoutée à l'application ! 

La seule traduction basée sur le Texte Massorétique Hébreu Ben Chayyim pour l’Ancien Testament, (édition correcte de Ben Chayyim), qui est sans équivoque la copie exacte des textes “ originaux” .Ce texte n’est malheureusement plus imprimé, étant erronément édité par Christian Ginsburg.. Pour le Nouveau Testament, c’est le texte (Texte Majoritaire) Byzantin Grec ou Textus Receptus d’Érasme . Les traducteurs de la Bible King James se sont appuyés sur de précédentes éditions anglaises et étrangères de la Bible, aussi bien que sur de plus pures éditions en hébreu et en grec, qui ne nous sont plus disponibles aujourd’hui.
    
La raison primordiale de cette traduction était de justement donner aux francophones une Bible vraiment basée sur les manuscrits dont se sont servis les traducteurs de la King James anglaise. Cette Bible est unique en son genre. Une refonte totale était devenue nécessaire afin de mettre en valeur cette spécificité pour les lecteurs francophones.
    
C'est pourquoi ce travail est : mot pour mot, verset par verset la traduction intégrale - au plus près possible - du vocabulaire de la King James Bible anglaise.
    
Traduction N. Stratford.
http://www.kingjamesfrancaise.net/
    `
  },
  {
    date: '1562621003832',
    type: logTypes.BUG,
    title: 'Meilleures performances entre les chapitres',
    description:
      "Au changement de chapitre, il était possible de voir un écran blanc entre les transitions. C'est maintenant quasi-instantané."
  },
  {
    date: '1562583055833',
    type: logTypes.FEATURE,
    title: 'Ajout de péricopes - titres de sections',
    description:
      "J'ai appris ce mot il y a deux jours, je l'avoue. Péricope vient du mot 'découpage'. En résumé vous avez maintenant les titres ou sections des différentes parties d'un texte biblique."
  },
  {
    date: '1562470112286',
    type: logTypes.BUG,
    title: 'Texte italique sur Android',
    description: "Dans certains endroits de l'App, le texte était italique. Ce bug a été réglé."
  },
  {
    date: '1562469387018',
    type: logTypes.NEW,
    title: 'Ajout de "Quoi de neuf ?"',
    description: "Vous serez dorénavant tenu au courant de chaque modification dans l'App."
  },
  {
    date: '1562460467170',
    type: logTypes.BUG,
    title: 'Vibration désactivée',
    description:
      "Lorsqu'on sélectionne un verset, le téléphone vibrait très légèrement. Un utilisateur a remonté une erreur critique à ce niveau. J'ai désactivé pour l'instant la vibration."
  },
  {
    date: '1562459400000',
    type: logTypes.BUG,
    title: 'Bible LSG',
    description:
      "Il y a avait pas mal de soucis d'espace pour la Bible Louis Segond. Ce souci a été réglé."
  }
]
