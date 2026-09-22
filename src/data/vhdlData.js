const vhdlData = [
  // =========================
  // VHDL
  // =========================

    {
    keywords: ["good morning", "Hello", "Hi","good afternoon"],
    answer:
  "Hello, how can i help you today?"  
  },

  {
    keywords: ["vhdl", "what is vhdl", "definition vhdl"],
    answer:
      "VHDL (VHSIC Hardware Description Language) is a hardware description language used to describe the structure and behavior of electronic systems, especially digital circuits such as ASICs and FPGAs."
  },

  {
    keywords: ["entity", "architecture", "structure", "program vhdl"],
    answer:
      "A VHDL program contains at least one entity/architecture pair. The entity defines the inputs and outputs and represents the external interface. The architecture describes the implementation."
  },

  {
    keywords: ["multiplexer", "mux", "2 to 1", "2 vers 1"],
    answer:
      "A 2-to-1 multiplexer can be described using conditional assignment. For example: S <= in1 when sel = '0' else in2;"
  },


  // =========================
  // ISTQB - CHAPTER 1
  // =========================

  {
    keywords: ["tests", "que sont les tests", "test logiciel"],
    answer:
      "Les tests logiciels sont un moyen d’évaluer la qualité du logiciel et de réduire le risque de défaillance du logiciel en cours de fonctionnement."
  },

  {
    keywords: ["tester", "vérifier", "valider", "tester n'est pas executer"],
    answer:
      "Tester n’est pas simplement exécuter. Tester consiste à vérifier et valider. Les tests peuvent être dynamiques ou statiques."
  },

  {
    keywords: ["objectifs tests", "objectifs des tests", "pourquoi tester"],
    answer:
      "Les objectifs des tests peuvent inclure : évaluer les produits d’activités, vérifier les exigences, valider que l’objet de test fonctionne comme attendu, construire la confiance, prévenir les défauts, trouver les défaillances et réduire les risques."
  },

  {
    keywords: ["débogage", "debugging", "test et débogage"],
    answer:
      "Les tests et le débogage sont différents. Les tests peuvent mettre en évidence des défaillances. Le débogage trouve, analyse et corrige les défauts. Ensuite, le test de confirmation vérifie si la correction a résolu le problème."
  },

  {
    keywords: ["erreur", "défaut", "défaillance", "erreur défaut défaillance"],
    answer:
      "Une personne peut faire une erreur, ce qui peut conduire à l’introduction d’un défaut. Lorsqu’un défaut dans le code est exécuté, il peut causer une défaillance."
  },

  {
    keywords: ["7 principes", "principes tests", "sept principes"],
    answer:
      "Les 7 principes des tests sont : 1) Les tests montrent la présence de défauts, 2) Les tests exhaustifs sont impossibles, 3) Tester tôt économise du temps et de l’argent, 4) Regroupement des défauts, 5) Paradoxe du pesticide, 6) Les tests dépendent du contexte, 7) L’absence d’erreurs est une illusion."
  },


  // =========================
  // ISTQB - CHAPTER 2
  // =========================

  {
    keywords: ["modèles développement", "cycle de vie", "modèle développement"],
    answer:
      "Les modèles courants de cycle de vie de développement logiciel sont les modèles de développement séquentiel et les modèles de développement itératif et incrémental."
  },

  {
    keywords: ["scrum", "kanban", "spiral", "rup", "rational unified process"],
    answer:
      "Pour le développement itératif, le cours cite notamment Rational Unified Process, Scrum, Kanban et Spiral (ou par prototypage)."
  },

  {
    keywords: ["niveaux test", "niveaux de test"],
    answer:
      "Les niveaux de test sont : test de composants, test d’intégration, test système et test d’acceptation."
  },

  {
    keywords: ["test composant", "test composants"],
    answer:
      "Le test de composants vise notamment à réduire le risque, vérifier les comportements spécifiés, renforcer la confiance, trouver les défauts dans le composant et empêcher les défauts de passer à des niveaux de test plus élevés."
  },

  {
    keywords: ["test intégration", "test d'intégration"],
    answer:
      "Le test d’intégration vise notamment à vérifier les comportements des interfaces, renforcer la confiance dans les interfaces et trouver les défauts liés à l’intégration."
  },

  {
    keywords: ["test système", "test systeme"],
    answer:
      "Le test système vise notamment à vérifier que le système est complet, renforcer la confiance dans le système, trouver les défauts et empêcher les défauts de passer en production."
  },

  {
    keywords: ["test acceptation", "test d'acceptation"],
    answer:
      "Le test d’acceptation vise notamment à établir la confiance dans la qualité du système, valider que le système est complet et vérifier que les comportements sont conformes aux spécifications."
  },

  {
    keywords: ["test fonctionnel", "tests fonctionnels", "que peut faire"],
    answer:
      "Les tests fonctionnels répondent à la question : « Que peut faire le système ? ». Ils prennent en compte le comportement du logiciel et peuvent utiliser des techniques boîte-noire."
  },

  {
    keywords: ["test non fonctionnel", "tests non fonctionnels", "comment se comporte"],
    answer:
      "Les tests non-fonctionnels répondent à la question : « Comment se comporte le système ? ». Ils évaluent notamment l’utilisabilité, la performance ou la sécurité."
  },

  {
    keywords: ["boîte blanche", "boite blanche", "white box"],
    answer:
      "Les tests boîte-blanche sont basés sur la structure ou l’implémentation interne du système, notamment le code, l’architecture, les flux de travail et les flux de données."
  },

  {
    keywords: ["confirmation", "test confirmation", "régression", "regression"],
    answer:
      "Le test de confirmation vérifie qu’une correction a résolu un défaut. Les tests de régression vérifient qu’une modification n’a pas affecté accidentellement d’autres parties du logiciel."
  },

  {
    keywords: ["maintenance", "tests maintenance"],
    answer:
      "Il existe deux types de maintenance : planifiée et non-planifiée. Les tests de maintenance prennent notamment en compte le risque du changement, la taille du système existant et la taille du changement."
  }
];

export default vhdlData;