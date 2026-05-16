import React from 'react';

export interface ExamQuestion {
  id: string;
  type: 'multiple-choice' | 'code-ordering' | 'fill-in-the-blank';
  question: string;
  code?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  category: string;
}

export const examQuestions: ExamQuestion[] = [
  // --- BASICS ---
  {
    id: 'q1',
    type: 'multiple-choice',
    category: 'Notions de base',
    question: "Que produit l'exécution du code Python suivant ?",
    code: `ma_liste = ["H", "E", "C", "L", "a", "u"]\nprint(len(ma_liste + ["s", "a", "n", "n", "e"]))`,
    options: ["6", "11", "TypeError", "12"],
    correctAnswer: "11",
    explanation: "La liste initiale contient 6 éléments. On lui ajoute une liste de 5 éléments (['s', 'a', 'n', 'n', 'e']). La longueur totale est donc 6 + 5 = 11."
  },
  {
    id: 'q2',
    type: 'multiple-choice',
    category: 'Notions de base',
    question: "Quelle est la sortie du code suivant ?",
    code: `val = '20' * 2 + '24'\nprint(type(val), val)`,
    options: [
      "<class 'str'> 202024",
      "<class 'int'> 2024",
      "<class 'str'> 4024",
      "<class 'int'> 202024"
    ],
    correctAnswer: "<class 'str'> 202024",
    explanation: "L'opérateur '*' sur une chaîne de caractères la répète. '20' * 2 donne '2020'. L'opérateur '+' concatène les chaînes. '2020' + '24' donne '202024'. Le type reste 'str'."
  },
  {
    id: 'q3',
    type: 'multiple-choice',
    category: 'Notions de base',
    question: "Quelle est la valeur retournée par f(128) ?",
    code: `def f(n):\n    count = 0\n    while n > 1:\n        n = n // 2\n        count += 1\n    return count`,
    options: ["6", "7", "8", "128"],
    correctAnswer: "7",
    explanation: "La fonction divise n par 2 à chaque étape tant que n > 1. Pour 128 (2^7), il faut 7 divisions pour arriver à 1. (128->64->32->16->8->4->2->1)."
  },

  // --- COMPRÉHENSION DE CODE ---
  {
    id: 'q4',
    type: 'multiple-choice',
    category: 'Compréhension de code',
    question: "Que calcule cette fonction ?",
    code: `def mystere(data):\n    n = len(data)\n    s = sorted(data)\n    if n % 2 == 1:\n        return s[n // 2]\n    else:\n        return (s[n // 2 - 1] + s[n // 2]) / 2`,
    options: [
      "La moyenne arithmétique",
      "Le mode",
      "La médiane",
      "L'écart-type"
    ],
    correctAnswer: "La médiane",
    explanation: "L'algorithme trie les données, puis renvoie l'élément central si la taille est impaire, ou la moyenne des deux éléments centraux si elle est paire. C'est la définition de la médiane."
  },
  {
    id: 'q5',
    type: 'multiple-choice',
    category: 'Pandas',
    question: "Que contient le dictionnaire 'result' après ce code ?",
    code: `import pandas as pd\ndf = pd.read_csv('data.csv') # Colonnes: 'Ventes', 'Date'\nresult = {}\nfor col in df.columns:\n    diff = df[col].diff().abs()\n    result[col] = diff.max()`,
    options: [
      "La valeur maximale de chaque colonne",
      "La somme des différences de chaque colonne",
      "La plus grande variation absolue entre deux lignes consécutives pour chaque colonne",
      "La moyenne des variations"
    ],
    correctAnswer: "La plus grande variation absolue entre deux lignes consécutives pour chaque colonne",
    explanation: "df[col].diff() calcule la différence entre chaque ligne et la précédente. .abs() prend la valeur absolue. .max() trouve le maximum de ces différences."
  },

  // --- ALGORITHMES ---
  {
    id: 'q6',
    type: 'multiple-choice',
    category: 'Algorithmique',
    question: "Par quoi faut-il remplacer ##BLANK## pour calculer le PGCD de a et b ?",
    code: `def pgcd(a, b):\n    r = a % b\n    if r == 0:\n        return b\n    else:\n        return ##BLANK##`,
    options: [
      "pgcd(r, b)",
      "pgcd(b, r)",
      "pgcd(a, r)",
      "b % r"
    ],
    correctAnswer: "pgcd(b, r)",
    explanation: "C'est l'algorithme d'Euclide récursif. Si a n'est pas divisible par b, le PGCD de (a, b) est le même que celui de (b, reste de a/b)."
  },

  // --- OOP ---
  {
    id: 'q7',
    type: 'multiple-choice',
    category: 'POO',
    question: "Dans une classe Python, à quoi sert le paramètre 'self' ?",
    options: [
      "À définir une variable globale",
      "À faire référence à l'instance actuelle de l'objet",
      "À arrêter l'exécution de la méthode",
      "C'est un mot-clé optionnel"
    ],
    correctAnswer: "À faire référence à l'instance actuelle de l'objet",
    explanation: "'self' permet d'accéder aux attributs et aux autres méthodes de l'objet au sein de la classe."
  },
  {
    id: 'q8',
    type: 'multiple-choice',
    category: 'POO',
    question: "Que se passe-t-il si on appelle une méthode de classe sans 'self' dans sa définition ?",
    options: [
      "Rien, Python l'ajoute automatiquement",
      "Une erreur TypeError sera levée lors de l'appel",
      "La méthode devient statique par défaut",
      "Le programme s'arrête sans erreur"
    ],
    correctAnswer: "Une erreur TypeError sera levée lors de l'appel",
    explanation: "Python passe automatiquement l'instance comme premier argument. Si la méthode n'est pas définie pour le recevoir, une erreur d'argument survient."
  },

  // --- DATA SCIENCE ---
  {
    id: 'q9',
    type: 'multiple-choice',
    category: 'Matplotlib',
    question: "Quel est l'ordre correct pour afficher un graphique avec titre et labels ?",
    code: `1. plt.show()\n2. plt.plot(x, y)\n3. plt.title("Titre")\n4. import matplotlib.pyplot as plt`,
    options: [
      "4, 2, 3, 1",
      "4, 3, 2, 1",
      "2, 3, 4, 1",
      "4, 1, 2, 3"
    ],
    correctAnswer: "4, 2, 3, 1",
    explanation: "On importe d'abord le module (4), on trace les données (2), on ajoute les décorations comme le titre (3), et enfin on affiche le résultat (1)."
  },
  {
    id: 'q10',
    type: 'multiple-choice',
    category: 'NumPy',
    question: "Que produit np.arange(2, 10, 2) ?",
    options: [
      "[2, 4, 6, 8, 10]",
      "[2, 4, 6, 8]",
      "[2, 3, 4, 5, 6, 7, 8, 9]",
      "[4, 6, 8, 10]"
    ],
    correctAnswer: "[2, 4, 6, 8]",
    explanation: "np.arange(start, stop, step) génère des nombres de start (inclus) à stop (exclu) avec un pas de step. Donc 2, 4, 6, 8."
  },

  // --- STRUCTURES DE DONNÉES ---
  {
    id: 'q11',
    type: 'multiple-choice',
    category: 'Structures de données',
    question: "Quelle est la principale différence entre une liste et un tuple ?",
    options: [
      "La liste est plus rapide",
      "Le tuple est mutable, la liste est immuable",
      "La liste est mutable, le tuple est immuable",
      "Il n'y a aucune différence"
    ],
    correctAnswer: "La liste est mutable, le tuple est immuable",
    explanation: "Une liste peut être modifiée après sa création (append, pop, etc.), alors qu'un tuple ne peut plus être changé une fois défini."
  },
  {
    id: 'q12',
    type: 'multiple-choice',
    category: 'Dictionnaires',
    question: "Comment vérifier si la clé 'HEC' existe dans le dictionnaire 'ecoles' ?",
    options: [
      "ecoles.contains('HEC')",
      "'HEC' in ecoles",
      "ecoles.has_key('HEC')",
      "exists('HEC', ecoles)"
    ],
    correctAnswer: "'HEC' in ecoles",
    explanation: "L'opérateur 'in' est la méthode standard et la plus efficace pour vérifier l'existence d'une clé dans un dictionnaire en Python."
  },

  // --- RÉCURSIVITÉ ---
  {
    id: 'q13',
    type: 'multiple-choice',
    category: 'Récursivité',
    question: "Quelle est la sortie de f(4) ?",
    code: `def f(n):\n    if n <= 1: return 1\n    return n * f(n-1)`,
    options: ["4", "10", "24", "12"],
    correctAnswer: "24",
    explanation: "C'est la fonction factorielle. f(4) = 4 * f(3) = 4 * 3 * f(2) = 4 * 3 * 2 * f(1) = 4 * 3 * 2 * 1 = 24."
  },

  // --- LOGIQUE & BOUCLES ---
  {
    id: 'q14',
    type: 'multiple-choice',
    category: 'Boucles',
    question: "Que fait l'instruction 'continue' dans une boucle ?",
    options: [
      "Elle arrête définitivement la boucle",
      "Elle passe immédiatement à l'itération suivante",
      "Elle recharge le programme",
      "Elle ne fait rien"
    ],
    correctAnswer: "Elle passe immédiatement à l'itération suivante",
    explanation: "'continue' interrompt l'exécution du bloc de code actuel pour l'itération en cours et revient au début de la boucle pour l'itération suivante."
  },
  {
    id: 'q15',
    type: 'multiple-choice',
    category: 'List Comprehension',
    question: "Que produit ce code ?",
    code: `L = [x**2 for x in range(5) if x % 2 == 0]`,
    options: [
      "[0, 1, 4, 9, 16]",
      "[0, 4, 16]",
      "[1, 9]",
      "[0, 2, 4]"
    ],
    correctAnswer: "[0, 4, 16]",
    explanation: "range(5) donne [0, 1, 2, 3, 4]. La condition 'if x % 2 == 0' garde les nombres pairs : [0, 2, 4]. Le calcul 'x**2' donne [0, 4, 16]."
  },

  // --- NOUVELLES QUESTIONS (AJOUTÉES) ---
  {
    id: 'q16',
    type: 'multiple-choice',
    category: 'Notions de base',
    question: "Quel est le résultat de 10 // 3 ?",
    options: ["3.33", "3", "1", "0"],
    correctAnswer: "3",
    explanation: "// est l'opérateur de division entière. 10 divisé par 3 donne 3 avec un reste de 1."
  },
  {
    id: 'q17',
    type: 'multiple-choice',
    category: 'Notions de base',
    question: "Quel est le résultat de 10 % 3 ?",
    options: ["3", "1", "0", "3.33"],
    correctAnswer: "1",
    explanation: "% est l'opérateur modulo, il renvoie le reste de la division entière. 10 = 3 * 3 + 1."
  },
  {
    id: 'q18',
    type: 'multiple-choice',
    category: 'Strings',
    question: "Que vaut s[1:4] si s = 'PYTHON' ?",
    options: ["'PYTH'", "'YTH'", "'YTHO'", "'PYTHON'"],
    correctAnswer: "'YTH'",
    explanation: "Le slicing s[start:stop] prend les caractères de l'indice start (inclus) à stop (exclu). P=0, Y=1, T=2, H=3, O=4. Donc indices 1, 2, 3 donnent 'YTH'."
  },
  {
    id: 'q19',
    type: 'multiple-choice',
    category: 'Pandas',
    question: "Comment supprimer les lignes contenant des valeurs manquantes dans un DataFrame df ?",
    options: [
      "df.remove_null()",
      "df.dropna()",
      "df.clean()",
      "df.delete(NaN)"
    ],
    correctAnswer: "df.dropna()",
    explanation: "dropna() est la méthode Pandas standard pour supprimer les lignes (ou colonnes) contenant des valeurs nulles/manquantes."
  },
  {
    id: 'q20',
    type: 'multiple-choice',
    category: 'Algorithmique',
    question: "Quelle est la complexité temporelle d'une recherche dichotomique dans une liste triée de taille n ?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    correctAnswer: "O(log n)",
    explanation: "La recherche dichotomique divise l'espace de recherche par deux à chaque étape, ce qui correspond à une complexité logarithmique."
  },
  {
    id: 'q21',
    type: 'multiple-choice',
    category: 'POO',
    question: "Quelle méthode est appelée automatiquement lors de la création d'un objet ?",
    options: ["__init__", "__new__", "__start__", "__create__"],
    correctAnswer: "__init__",
    explanation: "__init__ est le constructeur de la classe, il initialise les attributs de l'instance."
  },
  {
    id: 'q22',
    type: 'multiple-choice',
    category: 'Exceptions',
    question: "Quel bloc de code est exécuté si une erreur survient dans un bloc 'try' ?",
    options: ["finally", "else", "except", "catch"],
    correctAnswer: "except",
    explanation: "Le bloc 'except' intercepte et gère les exceptions levées dans le bloc 'try'."
  },
  {
    id: 'q23',
    type: 'multiple-choice',
    category: 'NumPy',
    question: "Comment obtenir la forme (nombre de lignes, colonnes) d'un array NumPy 'a' ?",
    options: ["a.size()", "a.shape", "a.dimensions", "len(a)"],
    correctAnswer: "a.shape",
    explanation: "L'attribut .shape renvoie un tuple représentant les dimensions de l'array."
  },
  {
    id: 'q24',
    type: 'multiple-choice',
    category: 'Dictionnaires',
    question: "Quelle méthode permet de récupérer toutes les valeurs d'un dictionnaire ?",
    options: ["d.keys()", "d.items()", "d.values()", "d.all()"],
    correctAnswer: "d.values()",
    explanation: "d.values() renvoie une vue sur toutes les valeurs contenues dans le dictionnaire."
  },
  {
    id: 'q25',
    type: 'multiple-choice',
    category: 'Algorithmique',
    question: "Quel algorithme de tri compare les éléments adjacents et les échange s'ils sont dans le mauvais ordre ?",
    options: ["Tri par insertion", "Tri rapide", "Tri à bulles", "Tri fusion"],
    correctAnswer: "Tri à bulles",
    explanation: "Le tri à bulles (bubble sort) parcourt la liste et fait 'remonter' les plus grands éléments vers la fin par échanges successifs."
  },
  {
    id: 'q26',
    type: 'multiple-choice',
    category: 'Notions de base',
    question: "Que renvoie bool(0) ?",
    options: ["True", "False", "None", "Error"],
    correctAnswer: "False",
    explanation: "En Python, 0, les listes vides, les chaînes vides et None sont évalués à False dans un contexte booléen."
  },
  {
    id: 'q27',
    type: 'multiple-choice',
    category: 'Functions',
    question: "Peut-on retourner plusieurs valeurs dans une fonction Python ?",
    options: [
      "Non, c'est impossible",
      "Oui, en les séparant par des virgules (elles forment un tuple)",
      "Oui, mais seulement deux valeurs maximum",
      "Oui, mais il faut utiliser une liste obligatoirement"
    ],
    correctAnswer: "Oui, en les séparant par des virgules (elles forment un tuple)",
    explanation: "Python permet de retourner plusieurs objets séparés par des virgules. Ils sont automatiquement empaquetés dans un tuple."
  },
  {
    id: 'q28',
    type: 'multiple-choice',
    category: 'Matplotlib',
    question: "Quelle fonction permet de tracer un nuage de points ?",
    options: ["plt.plot()", "plt.scatter()", "plt.points()", "plt.hist()"],
    correctAnswer: "plt.scatter()",
    explanation: "scatter() est spécifiquement conçu pour les nuages de points (scatter plots)."
  },
  {
    id: 'q29',
    type: 'multiple-choice',
    category: 'Pandas',
    question: "Comment renommer une colonne 'A' en 'B' dans un DataFrame df ?",
    options: [
      "df.rename(columns={'A': 'B'})",
      "df.change_name('A', 'B')",
      "df.columns['A'] = 'B'",
      "df.replace('A', 'B')"
    ],
    correctAnswer: "df.rename(columns={'A': 'B'})",
    explanation: "La méthode rename() avec l'argument columns acceptant un dictionnaire est la façon correcte de renommer des colonnes."
  },
  {
    id: 'q30',
    type: 'multiple-choice',
    category: 'Récursivité',
    question: "Quelle est la condition d'arrêt (cas de base) nécessaire pour une fonction récursive calculant la somme des n premiers entiers ?",
    options: [
      "if n == 0: return 0",
      "if n > 0: return n",
      "while n > 0:",
      "return n + f(n-1)"
    ],
    correctAnswer: "if n == 0: return 0",
    explanation: "Une fonction récursive doit toujours avoir un cas de base pour arrêter les appels récursifs. Pour une somme, s'arrêter à 0 et retourner 0 est logique."
  }
];
