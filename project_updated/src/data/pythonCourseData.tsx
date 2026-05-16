import React from 'react';
import { ExamTip, CommonTrap, FormulaBox, KeyConcept, SummarySheet, ExerciseBox } from '../../components/premium/PedagogicalBlocks';

export interface LessonQuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LessonContent {
  title: string;
  duration: string;
  level: string;
  modules: React.ReactNode;
  quiz?: LessonQuizQuestion[];
}

export const pythonCourseData: Record<string, LessonContent> = {
  '1': {
    title: "Variables, Types & Opérateurs",
    duration: "2h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1.1 Introduction à l'Environnement de Programmation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Python est un langage <strong>interprété</strong>, ce qui signifie que le code est lu et exécuté ligne par ligne par un interpréteur. Pour un étudiant à HEC Lausanne, c'est l'outil de référence pour l'analyse de données, la finance quantitative et l'automatisation.
          </p>
          <KeyConcept title="Pourquoi la Programmation ?">
            <p>Sa syntaxe proche de l'anglais permet de se concentrer sur la <strong>logique algorithmique</strong> plutôt que sur des contraintes techniques complexes. C'est le langage standard de la Data Science mondiale.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1.2 Les Types de Données Fondamentaux</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            En Python, chaque donnée possède un <strong>type</strong> qui définit ce que l'on peut faire avec. Voici les quatre piliers :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">int (Integer)</h3>
              <p className="text-sm text-slate-600 mb-2">Nombres entiers, positifs ou négatifs.</p>
              <code className="text-xs bg-slate-50 p-2 rounded block">Ex: -14, 0, 42</code>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">float (Floating point)</h3>
              <p className="text-sm text-slate-600 mb-2">Nombres décimaux (utilisent un point, pas une virgule).</p>
              <code className="text-xs bg-slate-50 p-2 rounded block">Ex: 3.14, -2.5, 98.6</code>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">str (String)</h3>
              <p className="text-sm text-slate-600 mb-2">Chaînes de caractères, entourées de guillemets.</p>
              <code className="text-xs bg-slate-50 p-2 rounded block">Ex: 'salut', "HEC", '98.6'</code>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">bool (Boolean)</h3>
              <p className="text-sm text-slate-600 mb-2">Valeurs logiques : Vrai ou Faux.</p>
              <code className="text-xs bg-slate-50 p-2 rounded block">Ex: True, False</code>
            </div>
          </div>

          <KeyConcept title="La fonction type()">
            <p>Utilisez <code>type(variable)</code> pour connaître la nature d'une donnée. C'est crucial pour le débogage.</p>
            <div className="mt-4 font-mono text-xs bg-slate-900 text-brand-300 p-4 rounded-xl">
              print(type(2))&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># &lt;class 'int'&gt;</span><br/>
              print(type(2.0))&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># &lt;class 'float'&gt;</span><br/>
              print(type("2"))&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># &lt;class 'str'&gt;</span><br/>
              print(type(2 == 2))&nbsp;<span className="text-slate-500"># &lt;class 'bool'&gt;</span>
            </div>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1.3 Conversion de Types (Casting)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Il est souvent nécessaire de transformer un type en un autre, par exemple pour additionner un nombre saisi par l'utilisateur (qui arrive sous forme de texte).
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
            <li><code>int("10")</code> → 10 (texte vers entier)</li>
            <li><code>float(5)</code> → 5.0 (entier vers décimal)</li>
            <li><code>str(42)</code> → "42" (nombre vers texte)</li>
          </ul>
          <CommonTrap>
            <p>Attention : <code>int("salut")</code> provoquera une erreur car le texte ne représente pas un nombre. De même, <code>int(2.7)</code> renvoie 2 (il coupe la partie décimale sans arrondir).</p>
          </CommonTrap>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1.4 L'Entrée Utilisateur : input()</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La fonction <code>input()</code> permet d'interagir avec l'utilisateur. 
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            age = input("Votre âge : ")<br/>
            <span className="text-slate-500"># Si l'utilisateur tape 18, age vaudra "18" (str)</span><br/>
            age_entier = int(age) <span className="text-slate-500"># Conversion nécessaire pour calculs</span>
          </div>
          <ExamTip title="Piège Classique">
            <p>N'oubliez jamais que <strong>input() renvoie toujours une chaîne de caractères (str)</strong>, même si l'utilisateur entre un chiffre !</p>
          </ExamTip>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1.5 Les Opérateurs Arithmétiques</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Python permet d'effectuer des calculs mathématiques avec une syntaxe intuitive.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900">Opérateur</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Opération</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Exemple</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-6 py-4 font-mono">+</td><td className="px-6 py-4">Addition</td><td className="px-6 py-4">1 + 2 == 3</td></tr>
                <tr><td className="px-6 py-4 font-mono">-</td><td className="px-6 py-4">Soustraction</td><td className="px-6 py-4">3 - 2.5 == 0.5</td></tr>
                <tr><td className="px-6 py-4 font-mono">*</td><td className="px-6 py-4">Multiplication</td><td className="px-6 py-4">2 * 3 == 6</td></tr>
                <tr><td className="px-6 py-4 font-mono">/</td><td className="px-6 py-4">Division (flottante)</td><td className="px-6 py-4">9 / 5 == 1.8</td></tr>
                <tr><td className="px-6 py-4 font-mono">//</td><td className="px-6 py-4">Division entière</td><td className="px-6 py-4">9 // 5 == 1</td></tr>
                <tr><td className="px-6 py-4 font-mono">**</td><td className="px-6 py-4">Puissance</td><td className="px-6 py-4">2 ** 3 == 8</td></tr>
                <tr><td className="px-6 py-4 font-mono">%</td><td className="px-6 py-4">Modulo (reste)</td><td className="px-6 py-4">11 % 3 == 2</td></tr>
              </tbody>
            </table>
          </div>

          <KeyConcept title="L'utilité du Modulo (%)">
            <p>Le modulo est très utilisé pour vérifier si un nombre est pair ou impair :</p>
            <ul className="list-disc list-inside mt-2 text-sm text-slate-600">
              <li><code>x % 2 == 0</code> → x est pair</li>
              <li><code>x % 2 != 0</code> → x est impair</li>
            </ul>
          </KeyConcept>

          <FormulaBox 
            title="Priorités des Opérations"
            formula="PEMDAS"
            explanation="1. Parenthèses, 2. Puissances, 3. Multiplication/Division, 4. Addition/Soustraction, 5. Gauche à droite."
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1.6 Manipulation des Chaînes (Strings)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Les chaînes de caractères sont entourées de guillemets simples <code>'</code> ou doubles <code>"</code>.
          </p>
          
          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-4">Affectation et Concaténation</h3>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            school = "HEC Lausanne"<br/>
            a, b = "g", "a"<br/>
            c = a + "a" + a + b <span className="text-slate-500"># Concaténation</span><br/>
            print(c) <span className="text-brand-600"># Affiche "gaga"</span>
          </div>

          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-4">Indexation et Slicing</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Chaque caractère a une position, en commençant par <strong>0</strong>.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            text = "PYTHON"<br/>
            <span className="text-slate-500"># P Y T H O N</span><br/>
            <span className="text-slate-500"># 0 1 2 3 4 5</span><br/>
            print(text[0])&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 'P'</span><br/>
            print(text[1:3])&nbsp;&nbsp;<span className="text-slate-500"># 'YT' (de 1 inclus à 3 exclu)</span><br/>
            print(text[:2])&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 'PY' (du début à 2 exclu)</span><br/>
            print(text[-1])&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 'N' (dernier caractère)</span>
          </div>

          <KeyConcept title="Immutabilité">
            <p>Les chaînes sont <strong>immutables</strong> : on ne peut pas modifier un caractère directement. <code>text[0] = 'B'</code> provoquera une erreur. Il faut créer une nouvelle chaîne.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Exercices Corrigés (Slides)</h2>
          <div className="space-y-6">
            <ExerciseBox 
              title="Exercice 1 : Manipulation de variables"
              question={
                <p>Que vaut la variable <code>c</code> si :<br/>
                <code>a = "Asia"; b = "EAST"; c = b[a.find("A")] + a[3] + b[2:3] + "y"</code></p>
              }
              solution={
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>a.find("A")</code> renvoie 0 (position du premier 'A')</li>
                  <li><code>b[0]</code> est 'E'</li>
                  <li><code>a[3]</code> est 'a'</li>
                  <li><code>b[2:3]</code> est 'S' (position 2 incluse, 3 exclue)</li>
                  <li><code>c = 'E' + 'a' + 'S' + 'y' == "EaSy"</code></li>
                </ul>
              }
            />

            <ExerciseBox 
              title="Exercice 2 : Logique de slicing"
              question={<p>Inverser une chaîne de caractères <code>sky = "nevaeh"</code>.</p>}
              solution={
                <div className="font-mono text-xs">
                  lune = sky[::-1] <span className="text-slate-500"># Technique avancée de slicing</span><br/>
                  print(lune) <span className="text-slate-500"># "heaven"</span>
                </div>
              }
            />
          </div>
        </section>

        <SummarySheet items={[
          "Python est sensible à la casse (A != a).",
          "Les indices commencent toujours à 0.",
          "input() renvoie toujours du texte (str).",
          "Les chaînes de caractères sont immutables.",
          "Utilisez // pour la division entière et % pour le reste."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quel est le type de la variable x après l'opération x = 10 / 2 ?",
        options: ["int", "float", "str", "bool"],
        correctAnswer: "float",
        explanation: "En Python 3, l'opérateur de division / renvoie toujours un float, même si le résultat est un nombre entier (5.0)."
      },
      {
        question: "Que renvoie la fonction input() par défaut ?",
        options: ["Un entier (int)", "Un nombre décimal (float)", "Une chaîne de caractères (str)", "Cela dépend de ce que l'utilisateur tape"],
        correctAnswer: "Une chaîne de caractères (str)",
        explanation: "La fonction input() capture toujours l'entrée utilisateur sous forme de texte (str). Il faut utiliser int() ou float() pour la convertir."
      },
      {
        question: "Quelle est la valeur de 'Python'[1:3] ?",
        options: ["'Py'", "'yt'", "'yth'", "'y'"],
        correctAnswer: "'yt'",
        explanation: "Le slicing [1:3] commence à l'indice 1 ('y') et s'arrête juste avant l'indice 3 ('h'). Il prend donc les indices 1 et 2."
      },
      {
        question: "Comment obtenir le reste d'une division entière en Python ?",
        options: ["/", "//", "%", "rem"],
        correctAnswer: "%",
        explanation: "L'opérateur modulo % renvoie le reste de la division. Par exemple, 10 % 3 vaut 1."
      }
    ]
  },
  '2': {
    title: "Logique de Contrôle : Conditions & Booléens",
    duration: "1h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2.1 La Structure Conditionnelle if</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La programmation consiste souvent à prendre des décisions. L'instruction <code>if</code> permet d'exécuter un bloc de code <strong>uniquement si une condition est vraie (True)</strong>.
          </p>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            if condition :<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># bloc d'instructions exécuté si vrai</span>
          </div>
          <KeyConcept title="L'Indentation : La règle d'or">
            <p>En Python, l'indentation (le décalage vers la droite, généralement 4 espaces) n'est pas esthétique, elle est <strong>syntaxique</strong>. Elle définit quel code appartient au <code>if</code>. Tout ce qui est au même niveau d'indentation sera exécuté ensemble.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2.2 elif et else : Gérer les alternatives</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pour gérer plusieurs cas de figure mutuellement exclusifs, on utilise <code>elif</code> (contraction de "else if") et <code>else</code>.
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-4 mb-8">
            <li><strong>if :</strong> "Si la condition est vraie, fais ceci."</li>
            <li><strong>elif :</strong> "Sinon, si cette autre condition est vraie, fais cela." (On peut en mettre autant qu'on veut).</li>
            <li><strong>else :</strong> "Dans tous les autres cas, fais ceci." (C'est le filet de sécurité).</li>
          </ul>
          
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            age = 20<br/>
            if age &lt; 18:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;etat = "Enfant"<br/>
            elif age &gt; 65:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;etat = "Retraité"<br/>
            else:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;etat = "Actif"<br/>
            print(etat) <span className="text-slate-500"># Affiche "Actif"</span>
          </div>

          <ExamTip title="Séquence d'exécution">
            <p>Dès qu'une condition est validée (True), Python exécute son bloc et <strong>ignore tout le reste de la structure if/elif/else</strong>. L'ordre des conditions est donc primordial !</p>
          </ExamTip>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2.3 Conditions Équivalentes et Logique</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Il existe plusieurs façons d'écrire la même logique. Un bon codeur privilégie la lisibilité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Formes identiques</h4>
              <ul className="text-xs space-y-2 font-mono text-slate-600">
                <li>if x == True:</li>
                <li>if x: <span className="text-brand-600">(Préféré)</span></li>
                <li>if not(x == False):</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Opérateurs Logiques</h4>
              <ul className="text-xs space-y-2 font-mono text-slate-600">
                <li>and : les deux doivent être vrais</li>
                <li>or : au moins un des deux vrai</li>
                <li>not : inverse la valeur</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">2.4 if Indépendants vs if Liés</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C'est une source d'erreur fréquente en examen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-red-600">if Indépendants</h4>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs">
                if conditionA: code1<br/>
                if conditionB: code2
              </div>
              <p className="text-xs text-slate-500">Python teste <strong>toujours</strong> les deux. Si les deux sont vraies, code1 ET code2 sont exécutés.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-green-600">if Liés (elif)</h4>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs">
                if conditionA: code1<br/>
                elif conditionB: code2
              </div>
              <p className="text-xs text-slate-500">Si conditionA est vraie, code1 est exécuté et <strong>conditionB n'est même pas testée</strong>.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Exercices Corrigés (Slides)</h2>
          <div className="space-y-6">
            <ExerciseBox 
              title="Exercice 1 : Analyse de valeur"
              question={
                <p>Que vaut <code>x</code> après ce code ?<br/>
                <code>x=0; v="stats"</code><br/>
                <code>if v[0] == v[len(v)-1]: x=x+1</code><br/>
                <code>else: x=x-1</code><br/>
                <code>if v[:2] == v[-2:]: x=x+3</code><br/>
                <code>elif v[1] == v[3]: x=x-3</code><br/>
                <code>else: x=x+6</code></p>
              }
              solution={
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>v[0] ('s') == v[4] ('s')</code> est VRAI → <code>x = 1</code></li>
                  <li><code>v[:2] ("st") == v[-2:] ("ts")</code> est FAUX</li>
                  <li><code>v[1] ('t') == v[3] ('t')</code> est VRAI (elif) → <code>x = 1 - 3 = -2</code></li>
                  <li className="font-bold">Réponse : x = -2</li>
                </ul>
              }
            />

            <ExerciseBox 
              title="Exercice 2 : Fonction Récursive (Intro)"
              question={
                <p>Que retourne <code>a(7)</code> ?<br/>
                <code>def a(x):</code><br/>
                <code>&nbsp;&nbsp;if x % 5 == 0: return 2*x</code><br/>
                <code>&nbsp;&nbsp;elif x % 3 == 1: return 3*x</code><br/>
                <code>&nbsp;&nbsp;else: x = x-1; return a(x)</code></p>
              }
              solution={
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>a(7)</code> : <code>7%5=2</code> (F), <code>7%3=1</code> (V) → <code>return 3*7 = 21</code></li>
                  <li className="font-bold">Réponse : 21</li>
                </ul>
              }
            />
          </div>
        </section>

        <SummarySheet items={[
          "L'indentation est obligatoire et définit les blocs.",
          "elif permet de lier des conditions mutuellement exclusives.",
          "L'ordre des conditions if/elif est crucial.",
          "Utilisez and/or/not pour combiner des tests complexes."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Que se passe-t-il si la première condition d'un bloc if/elif est vraie ?",
        options: ["Toutes les autres conditions elif sont quand même testées", "Le code s'arrête immédiatement", "Le bloc correspondant est exécuté et les elif suivants sont ignorés", "Une erreur est générée"],
        correctAnswer: "Le bloc correspondant est exécuté et les elif suivants sont ignorés",
        explanation: "Dans une structure if/elif/else, dès qu'une condition est remplie, son code est exécuté et Python sort de la structure sans tester les conditions suivantes."
      },
      {
        question: "Quel opérateur logique renvoie True si AU MOINS UNE des deux conditions est vraie ?",
        options: ["and", "or", "not", "xor"],
        correctAnswer: "or",
        explanation: "L'opérateur 'or' est inclusif : il suffit qu'une seule condition soit vraie pour que l'ensemble soit vrai."
      },
      {
        question: "Comment écrit-on 'différent de' en Python ?",
        options: ["<>", "!=", "not =", "=/="],
        correctAnswer: "!=",
        explanation: "L'opérateur de comparaison pour la différence est !=. L'opérateur == est utilisé pour l'égalité."
      }
    ]
  },
  '3': {
    title: "Structures de Données : Listes & Tuples",
    duration: "2h 00 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3.1 Les Listes : Des conteneurs flexibles</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Une liste est une collection <strong>ordonnée</strong> et <strong>modifiable</strong> d'éléments. En Python, une liste peut contenir des objets de types différents (même si en pratique HEC, on utilise souvent le même type).
          </p>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            fruits = ["pomme", "banane", "cerise"]<br/>
            mixte = [10, "HEC", 3.14, True]
          </div>
          <KeyConcept title="Mutabilité">
            <p>Contrairement aux chaînes de caractères, les listes sont <strong>mutables</strong>. On peut modifier un élément directement par son indice.</p>
            <code className="text-xs bg-slate-800 p-2 rounded block mt-2">fruits[1] = "kiwi" # ["pomme", "kiwi", "cerise"]</code>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3.2 Indexation et Slicing de Listes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Le fonctionnement est identique aux chaînes de caractères : premier élément à l'indice 0.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            nums = [10, 20, 30, 40, 50]<br/>
            print(nums[0])&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 10</span><br/>
            print(nums[-1])&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 50</span><br/>
            print(nums[1:3])&nbsp;&nbsp;<span className="text-slate-500"># [20, 30]</span><br/>
            print(nums[::-1])&nbsp;<span className="text-slate-500"># [50, 40, 30, 20, 10]</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3.3 Méthodes de Listes Essentielles</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Voici les outils indispensables pour manipuler vos données :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Ajouter</h3>
              <ul className="text-sm text-slate-600 space-y-2 font-mono">
                <li>.append(x) : ajoute à la fin</li>
                <li>.insert(i, x) : insère à l'indice i</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Supprimer</h3>
              <ul className="text-sm text-slate-600 space-y-2 font-mono">
                <li>.pop(i) : enlève l'élément à l'indice i</li>
                <li>.remove(x) : enlève la 1ère occurrence de x</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Organiser</h3>
              <ul className="text-sm text-slate-600 space-y-2 font-mono">
                <li>.sort() : trie la liste (croissant)</li>
                <li>.reverse() : inverse l'ordre</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Analyser</h3>
              <ul className="text-sm text-slate-600 space-y-2 font-mono">
                <li>len(L) : nombre d'éléments</li>
                <li>sum(L) : somme (si nombres)</li>
              </ul>
            </div>
          </div>
          <CommonTrap>
            <p>Attention : <code>L.sort()</code> et <code>L.reverse()</code> modifient la liste <strong>sur place</strong> et ne renvoient rien (None). Ne faites pas <code>L2 = L1.sort()</code>, car L2 sera vide !</p>
          </CommonTrap>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">3.4 Les Tuples : Des listes immuables</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Un tuple est comme une liste, mais il est <strong>immuable</strong> (non modifiable). On utilise des parenthèses <code>()</code>.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            coords = (46.5191, 6.6323)<br/>
            <span className="text-slate-500"># coords[0] = 47.0  --&gt; ERREUR</span>
          </div>
          <KeyConcept title="Pourquoi utiliser un Tuple ?">
            <p>1. <strong>Sécurité :</strong> Garantit que les données ne seront pas modifiées par erreur.<br/>
            2. <strong>Performance :</strong> Plus rapide à traiter que les listes.<br/>
            3. <strong>Clés de dictionnaire :</strong> Un tuple peut servir de clé, une liste non.</p>
          </KeyConcept>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Manipulation de listes</p>
              <p className="text-sm text-slate-600 mb-4">Que vaut <code>L</code> après ces opérations ?<br/>
              <code>L = [1, 2, 3]; L.append(4); L.insert(1, 5); L.pop(2); L.remove(1)</code></p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                1. [1, 2, 3, 4] (append 4)<br/>
                2. [1, 5, 2, 3, 4] (insert 5 à l'indice 1)<br/>
                3. [1, 5, 3, 4] (pop à l'indice 2, donc le '2' s'en va)<br/>
                4. [5, 3, 4] (remove '1')<br/>
                <strong>Réponse : [5, 3, 4]</strong>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Matrices (Listes de listes)</p>
              <p className="text-sm text-slate-600 mb-4">Accéder au chiffre '7' dans <code>M = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]</code>.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                print(M[2][0]) <br/>
                <span className="text-slate-500"># M[2] est la 3ème liste [7, 8, 9]</span><br/>
                <span className="text-slate-500"># [0] est le 1er élément de cette liste</span>
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "Les listes sont mutables (modifiables), les tuples sont immuables.",
          "append() ajoute à la fin, insert() à une position précise.",
          "pop() utilise l'indice, remove() utilise la valeur.",
          "Les indices négatifs permettent de partir de la fin (-1 est le dernier)."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quelle est la principale différence entre une liste et un tuple ?",
        options: ["Une liste utilise des parenthèses, un tuple des crochets", "Une liste est modifiable (mutable), un tuple est immuable", "Une liste est plus rapide qu'un tuple", "Un tuple ne peut contenir que des nombres"],
        correctAnswer: "Une liste est modifiable (mutable), un tuple est immuable",
        explanation: "C'est la distinction fondamentale : une fois créé, un tuple ne peut plus être modifié (on ne peut pas ajouter, supprimer ou changer d'élément)."
      },
      {
        question: "Quelle méthode permet d'ajouter un élément à la FIN d'une liste ?",
        options: ["insert()", "add()", "append()", "push()"],
        correctAnswer: "append()",
        explanation: "La méthode append() ajoute l'élément passé en argument à la toute fin de la liste existante."
      },
      {
        question: "Que renvoie L.pop() sans argument ?",
        options: ["Le premier élément de la liste", "Le dernier élément de la liste", "Une erreur", "Rien (None)"],
        correctAnswer: "Le dernier élément de la liste",
        explanation: "Par défaut, pop() retire et renvoie le dernier élément de la liste. Si on précise un indice, il retire l'élément à cet indice."
      }
    ]
  },
  '4': {
    title: "Les Boucles : for & while",
    duration: "2h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4.1 La boucle while : Répéter tant que...</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La boucle <code>while</code> exécute un bloc d'instructions <strong>tant qu'une condition est vraie</strong>. Elle est idéale quand on ne sait pas à l'avance combien de répétitions seront nécessaires.
          </p>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            compteur = 0<br/>
            while compteur &lt; 3:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;print("Tour n°", compteur)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;compteur += 1 <span className="text-slate-500"># Crucial pour éviter la boucle infinie</span>
          </div>
          <CommonTrap>
            <p><strong>La Boucle Infinie :</strong> Si la condition du <code>while</code> reste toujours vraie, votre programme ne s'arrêtera jamais. Assurez-vous que la variable de contrôle est modifiée à l'intérieur de la boucle.</p>
          </CommonTrap>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4.2 La boucle for : Parcourir des séquences</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La boucle <code>for</code> est utilisée pour itérer sur les éléments d'une séquence (liste, tuple, chaîne de caractères).
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            amis = ["Alice", "Bob", "Charlie"]<br/>
            for ami in amis:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;print("Salut", ami)
          </div>
          <KeyConcept title="Variable d'itération">
            <p>Dans <code>for x in sequence</code>, la variable <code>x</code> prend successivement la valeur de chaque élément de la séquence. Vous pouvez la nommer comme vous voulez.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4.3 La fonction range() : Le moteur des boucles for</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <code>range()</code> génère une suite de nombres. C'est l'outil standard pour répéter une action un nombre précis de fois.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <code className="text-brand-600 font-bold">range(5)</code>
              <p className="text-xs text-slate-500 mt-2">0, 1, 2, 3, 4<br/>(5 exclu)</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <code className="text-brand-600 font-bold">range(2, 6)</code>
              <p className="text-xs text-slate-500 mt-2">2, 3, 4, 5<br/>(début inclus, fin exclue)</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <code className="text-brand-600 font-bold">range(0, 10, 2)</code>
              <p className="text-xs text-slate-500 mt-2">0, 2, 4, 6, 8<br/>(pas de 2)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">4.4 break et continue : Contrôler le flux</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Parfois, on a besoin d'interrompre une boucle prématurément ou de sauter une étape.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">!</div>
              <div>
                <h4 className="font-bold text-slate-900">break</h4>
                <p className="text-sm text-slate-600">Arrête immédiatement la boucle et passe à la suite du programme.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">→</div>
              <div>
                <h4 className="font-bold text-slate-900">continue</h4>
                <p className="text-sm text-slate-600">Passe immédiatement à l'itération suivante de la boucle, en ignorant le code restant dans le bloc actuel.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Analyse de boucle while</p>
              <p className="text-sm text-slate-600 mb-4">Que vaut <code>x</code> à la fin ?<br/>
              <code>x = 10; y = 0</code><br/>
              <code>while x &gt; y:</code><br/>
              <code>&nbsp;&nbsp;x = x - 1</code><br/>
              <code>&nbsp;&nbsp;y = y + 1</code></p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                Tour 1 : x=9, y=1 (9 &gt; 1 Vrai)<br/>
                Tour 2 : x=8, y=2 (8 &gt; 2 Vrai)<br/>
                Tour 3 : x=7, y=3 (7 &gt; 3 Vrai)<br/>
                Tour 4 : x=6, y=4 (6 &gt; 4 Vrai)<br/>
                Tour 5 : x=5, y=5 (5 &gt; 5 Faux)<br/>
                <strong>Réponse : x = 5</strong>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Somme avec une boucle for</p>
              <p className="text-sm text-slate-600 mb-4">Calculer la somme des nombres pairs entre 1 et 10 inclus.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                somme = 0<br/>
                for i in range(2, 11, 2):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;somme += i<br/>
                print(somme) <span className="text-slate-500"># 2+4+6+8+10 = 30</span>
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "while : répétition basée sur une condition.",
          "for : répétition basée sur une séquence (liste, range).",
          "range(fin) commence à 0 et s'arrête juste avant la fin.",
          "break sort de la boucle, continue passe au tour suivant."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Que génère range(2, 8, 2) ?",
        options: ["[2, 4, 6, 8]", "[2, 4, 6]", "[2, 3, 4, 5, 6, 7, 8]", "[0, 2, 4, 6]"],
        correctAnswer: "[2, 4, 6]",
        explanation: "range(start, stop, step) commence à start (2), s'arrête AVANT stop (8) avec un pas de step (2). Les valeurs sont donc 2, 4, 6."
      },
      {
        question: "Quelle est la différence entre break et continue ?",
        options: ["break arrête tout le programme, continue arrête la boucle", "break saute une étape, continue arrête la boucle", "break arrête la boucle, continue saute l'étape actuelle et passe à la suivante", "Il n'y a aucune différence"],
        correctAnswer: "break arrête la boucle, continue saute l'étape actuelle et passe à la suivante",
        explanation: "break 'casse' la boucle et en sort définitivement. continue 'continue' la boucle mais passe directement au tour suivant."
      },
      {
        question: "Que se passe-t-il si la condition d'un while est toujours True ?",
        options: ["Le programme s'arrête après 100 tours", "Une erreur est générée immédiatement", "C'est une boucle infinie qui peut bloquer l'ordinateur", "Python transforme automatiquement le while en for"],
        correctAnswer: "C'est une boucle infinie qui peut bloquer l'ordinateur",
        explanation: "Sans modification de la condition à l'intérieur du bloc, la boucle ne s'arrêtera jamais, consommant toutes les ressources processeur."
      }
    ]
  },
  '5': {
    title: "Les Fonctions : Modularité & Réutilisation",
    duration: "2h 00 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5.1 Pourquoi utiliser des fonctions ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Une fonction est un bloc de code réutilisable qui effectue une tâche spécifique. Elle permet de :
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
            <li><strong>Éviter la répétition :</strong> Ne pas écrire 10 fois le même code.</li>
            <li><strong>Modulariser :</strong> Découper un problème complexe en petites étapes simples.</li>
            <li><strong>Faciliter la maintenance :</strong> Si on change la logique, on ne le fait qu'à un seul endroit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5.2 Définir et Appeler une fonction</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            On utilise le mot-clé <code>def</code> suivi du nom de la fonction et de parenthèses.
          </p>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            def saluer(nom):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;print("Bonjour", nom)<br/>
            <br/>
            saluer("Alice") <span className="text-slate-500"># Appel de la fonction</span>
          </div>
          <KeyConcept title="Paramètres vs Arguments">
            <p>Le <strong>paramètre</strong> est la variable dans la définition (<code>nom</code>). L'<strong>argument</strong> est la valeur réelle passée lors de l'appel (<code>"Alice"</code>).</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5.3 Le mot-clé return</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C'est le concept le plus important. Une fonction peut <strong>renvoyer</strong> un résultat au reste du programme.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            def carre(x):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return x * x<br/>
            <br/>
            resultat = carre(5)<br/>
            print(resultat) <span className="text-slate-500"># Affiche 25</span>
          </div>
          <ExamTip title="print vs return">
            <p><code>print()</code> affiche juste du texte à l'écran. <code>return</code> donne une valeur que vous pouvez stocker dans une variable ou utiliser dans un calcul. En examen, si on vous demande de "calculer et renvoyer", utilisez <code>return</code>.</p>
          </ExamTip>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5.4 Paramètres par défaut</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vous pouvez donner une valeur de base à un paramètre. Si l'utilisateur ne fournit pas d'argument, c'est cette valeur qui sera utilisée.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            def puissance(x, n=2):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;return x ** n<br/>
            <br/>
            print(puissance(3))&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 3^2 = 9</span><br/>
            print(puissance(3, 3))<span className="text-slate-500"># 3^3 = 27</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5.5 Portée des variables (Scope)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Une variable créée <strong>à l'intérieur</strong> d'une fonction est <strong>locale</strong>. Elle n'existe pas en dehors.
          </p>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100 font-mono text-sm mb-6">
            def ma_fonction():<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;z = 10<br/>
            <br/>
            ma_fonction()<br/>
            print(z) <span className="text-red-600"># ERREUR : z n'est pas défini ici</span>
          </div>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Analyse de fonction</p>
              <p className="text-sm text-slate-600 mb-4">Que retourne <code>f(2, 3)</code> ?<br/>
              <code>def f(a, b):</code><br/>
              <code>&nbsp;&nbsp;if a &gt; b: return a - b</code><br/>
              <code>&nbsp;&nbsp;return b - a</code></p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                a=2, b=3. 2 &gt; 3 est Faux.<br/>
                On passe à la ligne suivante : return 3 - 2 = 1.<br/>
                <strong>Réponse : 1</strong>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Paramètres par défaut</p>
              <p className="text-sm text-slate-600 mb-4">Que retourne <code>calc(10)</code> ?<br/>
              <code>def calc(x, y=5, z=2):</code><br/>
              <code>&nbsp;&nbsp;return (x + y) * z</code></p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                x=10, y=5 (défaut), z=2 (défaut).<br/>
                (10 + 5) * 2 = 15 * 2 = 30.<br/>
                <strong>Réponse : 30</strong>
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "def permet de définir une fonction.",
          "return renvoie une valeur et arrête la fonction.",
          "Les variables locales ne sont pas accessibles à l'extérieur.",
          "Les paramètres par défaut doivent être placés à la fin."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Que fait le mot-clé return dans une fonction ?",
        options: ["Il affiche un message à l'écran", "Il renvoie une valeur et arrête l'exécution de la fonction", "Il permet de recommencer la fonction au début", "Il définit le nom de la fonction"],
        correctAnswer: "Il renvoie une valeur et arrête l'exécution de la fonction",
        explanation: "Dès que Python rencontre un return, il 'sort' de la fonction avec la valeur indiquée. Tout code situé après le return dans le même bloc ne sera jamais exécuté."
      },
      {
        question: "Où doivent être placés les paramètres par défaut dans la définition d'une fonction ?",
        options: ["Au début, avant les paramètres obligatoires", "N'importe où", "À la fin, après tous les paramètres obligatoires", "Dans un bloc séparé"],
        correctAnswer: "À la fin, après tous les paramètres obligatoires",
        explanation: "Python impose que les paramètres avec une valeur par défaut (ex: y=5) soient placés après ceux qui n'en ont pas (ex: x)."
      },
      {
        question: "Une variable définie à l'intérieur d'une fonction est-elle accessible à l'extérieur ?",
        options: ["Oui, toujours", "Non, c'est une variable locale", "Seulement si on utilise print()", "Seulement si la fonction est publique"],
        correctAnswer: "Non, c'est une variable locale",
        explanation: "C'est le concept de portée (scope). Les variables créées dans une fonction sont détruites dès que la fonction se termine."
      }
    ]
  },
  '6': {
    title: "Dictionnaires & Ensembles (Sets)",
    duration: "2h 00 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">6.1 Les Dictionnaires : Clés et Valeurs</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Un dictionnaire est une collection <strong>non ordonnée</strong> (en théorie, même si Python 3.7+ garde l'ordre d'insertion) qui stocke des données sous forme de paires <strong>clé:valeur</strong>. C'est comme un vrai dictionnaire : vous cherchez un mot (clé) pour trouver sa définition (valeur).
          </p>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            etudiant = &#123;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"nom": "Dupont",<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"age": 21,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;"cours": ["Python", "Stats"]<br/>
            &#125;
          </div>
          <KeyConcept title="Unicité des clés">
            <p>Chaque clé doit être <strong>unique</strong>. Si vous réutilisez une clé, l'ancienne valeur sera écrasée. Les clés doivent être de types immuables (str, int, tuple).</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">6.2 Manipuler les Dictionnaires</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Accéder, ajouter ou modifier des éléments est très simple avec les crochets <code>[]</code>.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            <span className="text-slate-500"># Accès</span><br/>
            print(etudiant["nom"])&nbsp;&nbsp;<span className="text-slate-500"># "Dupont"</span><br/>
            <br/>
            <span className="text-slate-500"># Ajout / Modification</span><br/>
            etudiant["note"] = 5.5<br/>
            etudiant["age"] = 22
          </div>
          <ExamTip title="La méthode .get()">
            <p>Utilisez <code>etudiant.get("adresse", "Inconnue")</code>. Si la clé n'existe pas, il renvoie "Inconnue" au lieu de faire planter le programme avec une erreur.</p>
          </ExamTip>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">6.3 Itérer sur un Dictionnaire</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Il existe trois façons principales de parcourir un dictionnaire avec une boucle <code>for</code>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Les Clés</h4>
              <code className="text-xs font-mono text-brand-600">for k in d.keys():</code>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Les Valeurs</h4>
              <code className="text-xs font-mono text-brand-600">for v in d.values():</code>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-2">Les Deux</h4>
              <code className="text-xs font-mono text-brand-600">for k, v in d.items():</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">6.4 Les Ensembles (Sets) : L'unicité absolue</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Un <code>set</code> est une collection non ordonnée d'éléments <strong>uniques</strong>. Très utile pour supprimer les doublons d'une liste.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            L = [1, 2, 2, 3, 3, 3]<br/>
            S = set(L)&nbsp;&nbsp;<span className="text-slate-500"># &#123;1, 2, 3&#125;</span><br/>
            S.add(4)<br/>
            S.remove(1)
          </div>
          <KeyConcept title="Opérations Mathématiques">
            <p>Les sets permettent des opérations puissantes :<br/>
            - <code>S1 | S2</code> : Union (tous les éléments)<br/>
            - <code>S1 & S2</code> : Intersection (éléments communs)<br/>
            - <code>S1 - S2</code> : Différence (dans S1 mais pas S2)</p>
          </KeyConcept>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Analyse de dictionnaire</p>
              <p className="text-sm text-slate-600 mb-4">Que vaut <code>d</code> ?<br/>
              <code>d = &#123;"a": 1, "b": 2&#125;</code><br/>
              <code>d["c"] = d["a"] + d["b"]</code><br/>
              <code>d["a"] = 10</code></p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                1. d["c"] = 1 + 2 = 3<br/>
                2. d["a"] devient 10<br/>
                <strong>Réponse : &#123;"a": 10, "b": 2, "c": 3&#125;</strong>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Doublons et Sets</p>
              <p className="text-sm text-slate-600 mb-4">Combien d'éléments contient <code>set("banane")</code> ?</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                Les caractères uniques sont 'b', 'a', 'n', 'e'.<br/>
                <strong>Réponse : 4</strong>
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "Dictionnaire : paires clé:valeur.",
          "Les clés doivent être uniques et immuables.",
          "Set : collection d'éléments uniques, sans ordre.",
          "set() est idéal pour nettoyer une liste de ses doublons."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Comment accède-t-on à la valeur associée à la clé 'nom' dans un dictionnaire d ?",
        options: ["d[0]", "d['nom']", "d.nom", "d.get(0)"],
        correctAnswer: "d['nom']",
        explanation: "On accède aux valeurs d'un dictionnaire en utilisant la clé entre crochets, contrairement aux listes qui utilisent des indices numériques."
      },
      {
        question: "Quelle est la particularité principale d'un ensemble (set) ?",
        options: ["Il est ordonné", "Il ne contient que des doublons", "Il ne contient que des éléments uniques", "Il utilise des parenthèses"],
        correctAnswer: "Il ne contient que des éléments uniques",
        explanation: "Un set élimine automatiquement les doublons. Si vous essayez d'ajouter un élément déjà présent, rien ne se passe."
      },
      {
        question: "Peut-on utiliser une liste comme clé de dictionnaire ?",
        options: ["Oui, sans problème", "Non, car une liste est mutable", "Seulement si la liste est vide", "Seulement si elle contient des chaînes"],
        correctAnswer: "Non, car une liste est mutable",
        explanation: "Les clés d'un dictionnaire doivent être 'hashables', ce qui signifie qu'elles doivent être immuables (comme les chaînes, les nombres ou les tuples)."
      }
    ]
  },
  '7': {
    title: "Gestion des Fichiers (I/O)",
    duration: "1h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">7.1 Lire et Écrire des fichiers</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            La gestion de fichiers est essentielle pour manipuler des données externes (bases de données, logs, exports). On utilise la fonction <code>open()</code>.
          </p>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            fichier = open("donnees.txt", "r") <span className="text-slate-500"># "r" pour read (lecture)</span><br/>
            contenu = fichier.read()<br/>
            fichier.close() <span className="text-slate-500"># Toujours fermer !</span>
          </div>
          <KeyConcept title="Les Modes d'ouverture">
            <p><strong>"r"</strong> : Lecture (défaut). Erreur si le fichier n'existe pas.<br/>
            <strong>"w"</strong> : Écriture. Écrase le contenu existant ou crée le fichier.<br/>
            <strong>"a"</strong> : Ajout (Append). Ajoute à la fin du fichier sans effacer.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">7.2 Le gestionnaire de contexte : with</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            C'est la méthode <strong>recommandée</strong> (et attendue en examen). Elle ferme automatiquement le fichier, même en cas d'erreur.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            with open("resultats.txt", "w") as f:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;f.write("Score: 100\n")<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;f.write("Fini !")<br/>
            <span className="text-slate-500"># Ici, le fichier est déjà fermé.</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">7.3 Méthodes de lecture</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Selon la taille du fichier, on choisit une méthode différente :
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-4 mb-8">
            <li><strong>.read() :</strong> Lit tout le fichier d'un coup (attention aux gros fichiers).</li>
            <li><strong>.readline() :</strong> Lit une seule ligne.</li>
            <li><strong>.readlines() :</strong> Renvoie une <strong>liste</strong> où chaque élément est une ligne.</li>
          </ul>
          <ExamTip title="Parcourir ligne par ligne">
            <p>La méthode la plus efficace en mémoire est d'itérer directement sur le fichier :<br/>
            <code>for ligne in open("file.txt"): print(ligne)</code></p>
          </ExamTip>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Écriture de liste</p>
              <p className="text-sm text-slate-600 mb-4">Écrire chaque élément de <code>L = ["A", "B", "C"]</code> sur une nouvelle ligne dans "test.txt".</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                with open("test.txt", "w") as f:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for item in L:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.write(item + "\n")
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Lecture et calcul</p>
              <p className="text-sm text-slate-600 mb-4">Un fichier contient un nombre par ligne. Calculer la somme.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                somme = 0<br/>
                with open("nombres.txt", "r") as f:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for ligne in f:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;somme += int(ligne.strip())<br/>
                print(somme)
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "Utilisez 'with open(...) as f' pour la sécurité.",
          "Mode 'r' : lecture, 'w' : écriture (écrase), 'a' : ajout.",
          "N'oubliez pas de convertir les données lues (str) en int ou float si besoin.",
          ".strip() permet d'enlever les sauts de ligne (\n) invisibles."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quel mode d'ouverture permet d'ajouter du texte à la fin d'un fichier sans effacer l'existant ?",
        options: ["'r'", "'w'", "'a'", "'x'"],
        correctAnswer: "'a'",
        explanation: "Le mode 'a' (Append) ouvre le fichier et place le curseur à la fin, permettant d'ajouter du contenu sans écraser ce qui s'y trouve déjà."
      },
      {
        question: "Pourquoi est-il fortement recommandé d'utiliser le mot-clé 'with' pour ouvrir un fichier ?",
        options: ["Cela rend le code plus rapide", "Cela permet d'ouvrir plusieurs fichiers en même temps", "Cela ferme automatiquement le fichier à la fin du bloc", "C'est la seule façon d'écrire dans un fichier"],
        correctAnswer: "Cela ferme automatiquement le fichier à la fin du bloc",
        explanation: "Le gestionnaire de contexte 'with' garantit que le fichier sera fermé proprement, même si une erreur survient pendant la lecture ou l'écriture."
      },
      {
        question: "Que fait la méthode .strip() sur une chaîne de caractères ?",
        options: ["Elle supprime les voyelles", "Elle supprime les espaces et sauts de ligne au début et à la fin", "Elle transforme la chaîne en liste", "Elle inverse la chaîne"],
        correctAnswer: "Elle supprime les espaces et sauts de ligne au début et à la fin",
        explanation: "Lors de la lecture d'un fichier, chaque ligne se termine souvent par un saut de ligne invisible (\\n). .strip() est indispensable pour le supprimer avant de traiter la donnée."
      }
    ]
  },
  '8': {
    title: "Modules & Bibliothèques Standards",
    duration: "1h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">8.1 Importer des fonctionnalités</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Python est livré avec des "piles incluses". Un module est un fichier contenant du code Python que vous pouvez importer pour utiliser ses fonctions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Import standard</h4>
              <code className="text-xs font-mono text-brand-600">import math<br/>print(math.sqrt(16))</code>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Import spécifique</h4>
              <code className="text-xs font-mono text-brand-600">from math import pi<br/>print(pi)</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">8.2 Le module math</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Indispensable pour les calculs scientifiques et financiers.</p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6 font-mono text-sm">
            <li>math.ceil(x) : Arrondi à l'entier supérieur.</li>
            <li>math.floor(x) : Arrondi à l'entier inférieur.</li>
            <li>math.pow(x, y) : x puissance y (renvoie un float).</li>
            <li>math.log(x, base) : Logarithme.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">8.3 Le module random</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Pour générer de l'aléatoire (simulations de Monte Carlo, jeux, etc.).</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            import random<br/>
            print(random.random())&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Float entre 0 et 1</span><br/>
            print(random.randint(1, 6))&nbsp;<span className="text-slate-500"># Entier entre 1 et 6 (inclus)</span><br/>
            print(random.choice(["A", "B"])) <span className="text-slate-500"># Élément au hasard</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">8.4 Le module datetime</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Pour manipuler les dates et les heures.</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            from datetime import datetime<br/>
            maintenant = datetime.now()<br/>
            print(maintenant.strftime("%d/%m/%Y")) <span className="text-slate-500"># Formatage</span>
          </div>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Simulation de dés</p>
              <p className="text-sm text-slate-600 mb-4">Simuler le lancer de deux dés et afficher la somme.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                import random<br/>
                de1 = random.randint(1, 6)<br/>
                de2 = random.randint(1, 6)<br/>
                print("Somme :", de1 + de2)
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Calcul de cercle</p>
              <p className="text-sm text-slate-600 mb-4">Calculer l'aire d'un cercle de rayon R=5 en utilisant <code>math.pi</code>.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                import math<br/>
                aire = math.pi * (5 ** 2)<br/>
                print(round(aire, 2)) <span className="text-slate-500"># 78.54</span>
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "import charge un module entier.",
          "from ... import charge uniquement ce dont vous avez besoin.",
          "math pour les calculs, random pour l'aléatoire.",
          "datetime pour la gestion temporelle."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quelle est la différence entre 'import math' et 'from math import sqrt' ?",
        options: ["Aucune", "'import math' importe tout le module, 'from math import sqrt' n'importe que la fonction sqrt", "'from math import sqrt' est plus lent", "'import math' ne permet pas d'utiliser sqrt"],
        correctAnswer: "'import math' importe tout le module, 'from math import sqrt' n'importe que la fonction sqrt",
        explanation: "L'import spécifique permet d'utiliser la fonction directement (sqrt(16)) au lieu de devoir préfixer par le nom du module (math.sqrt(16))."
      },
      {
        question: "Que renvoie random.randint(1, 10) ?",
        options: ["Un nombre décimal entre 1 et 10", "Un entier entre 1 et 9", "Un entier entre 1 et 10 (inclus)", "Un nombre au hasard entre 0 et 1"],
        correctAnswer: "Un entier entre 1 et 10 (inclus)",
        explanation: "Contrairement à range(), la fonction randint(a, b) inclut les deux bornes a et b dans les résultats possibles."
      },
      {
        question: "Quelle fonction du module math permet d'arrondir à l'entier SUPÉRIEUR ?",
        options: ["math.floor()", "math.ceil()", "math.round()", "math.up()"],
        correctAnswer: "math.ceil()",
        explanation: "math.ceil() (pour 'ceiling', plafond) arrondit toujours vers le haut. math.floor() (sol) arrondit toujours vers le bas."
      }
    ]
  },
  '9': {
    title: "Analyse de Données avec NumPy",
    duration: "2h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">9.1 Pourquoi NumPy ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            NumPy (Numerical Python) est la bibliothèque fondamentale pour le calcul scientifique. Elle introduit l'objet <code>ndarray</code> (n-dimensional array), qui est beaucoup plus rapide et efficace que les listes Python pour les calculs mathématiques.
          </p>
          <KeyConcept title="Vecteurs et Matrices">
            <p>En HEC, on utilise NumPy pour manipuler des vecteurs (1D) et des matrices (2D). Contrairement aux listes, les calculs sur les arrays NumPy sont <strong>vectorisés</strong> (appliqués à tous les éléments d'un coup).</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">9.2 Création d'Arrays</h2>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            import numpy as np<br/>
            a = np.array([1, 2, 3])&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Depuis une liste</span><br/>
            b = np.zeros((2, 3))&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Matrice de 0 (2 lignes, 3 col)</span><br/>
            c = np.ones(5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Vecteur de 1</span><br/>
            d = np.arange(0, 10, 2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># Comme range() mais renvoie un array</span><br/>
            e = np.linspace(0, 1, 5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># 5 points entre 0 et 1</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">9.3 Opérations Vectorisées</h2>
          <p className="text-slate-600 leading-relaxed mb-4">C'est ici que NumPy surpasse les listes.</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            a = np.array([1, 2, 3])<br/>
            print(a * 2)&nbsp;&nbsp;<span className="text-slate-500"># [2, 4, 6] (Multiplie chaque élément)</span><br/>
            print(a + 10) <span className="text-slate-500"># [11, 12, 13]</span><br/>
            print(a ** 2) <span className="text-slate-500"># [1, 4, 9]</span>
          </div>
          <CommonTrap>
            <p>Avec une liste <code>L = [1, 2]</code>, <code>L * 2</code> donne <code>[1, 2, 1, 2]</code> (duplication). Avec un array NumPy, cela fait un vrai calcul mathématique.</p>
          </CommonTrap>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">9.4 Statistiques avec NumPy</h2>
          <p className="text-slate-600 leading-relaxed mb-4">NumPy propose des fonctions intégrées très performantes.</p>
          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6 font-mono text-sm">
            <li>np.mean(a) : Moyenne</li>
            <li>np.median(a) : Médiane</li>
            <li>np.std(a) : Écart-type (Standard Deviation)</li>
            <li>np.min(a) / np.max(a) : Minimum / Maximum</li>
          </ul>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Création et Calcul</p>
              <p className="text-sm text-slate-600 mb-4">Créer un vecteur de 10 à 20 (exclu) et calculer sa moyenne.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                import numpy as np<br/>
                v = np.arange(10, 20)<br/>
                print(np.mean(v)) <span className="text-slate-500"># 14.5</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Masques Booléens</p>
              <p className="text-sm text-slate-600 mb-4">Extraire tous les nombres supérieurs à 5 de l'array <code>a = np.array([2, 8, 3, 10, 5])</code>.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                a = np.array([2, 8, 3, 10, 5])<br/>
                masque = a &gt; 5<br/>
                print(a[masque]) <span className="text-slate-500"># [8, 10]</span>
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "NumPy est beaucoup plus rapide que les listes pour les calculs.",
          "Les opérations sont vectorisées (appliquées à tout l'array).",
          "np.arange() et np.linspace() sont très utiles pour créer des données.",
          "Les masques booléens permettent de filtrer les données facilement."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quelle est la principale différence entre une liste Python et un array NumPy ?",
        options: ["Les arrays NumPy sont plus lents", "Les arrays NumPy ne peuvent contenir qu'un seul type de données", "Les listes Python sont plus efficaces pour les calculs mathématiques", "Il n'y a aucune différence"],
        correctAnswer: "Les arrays NumPy ne peuvent contenir qu'un seul type de données",
        explanation: "C'est cette homogénéité qui permet à NumPy d'être extrêmement rapide et d'effectuer des calculs vectorisés sur de grands ensembles de données."
      },
      {
        question: "Que fait l'opération a * 2 si a est un array NumPy [1, 2, 3] ?",
        options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[1, 2, 3, 2]", "Une erreur"],
        correctAnswer: "[2, 4, 6]",
        explanation: "NumPy applique l'opération à chaque élément de l'array (vectorisation). Dans une liste standard, a * 2 aurait dupliqué la liste."
      },
      {
        question: "Quelle fonction NumPy permet de créer un array de 10 valeurs réparties uniformément entre 0 et 1 ?",
        options: ["np.arange(0, 1, 10)", "np.linspace(0, 1, 10)", "np.random(0, 1, 10)", "np.uniform(0, 1, 10)"],
        correctAnswer: "np.linspace(0, 1, 10)",
        explanation: "linspace(start, stop, num) génère 'num' valeurs équidistantes entre start et stop inclus."
      }
    ]
  },
  '10': {
    title: "Manipulation de Données avec Pandas",
    duration: "3h 00 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">10.1 Introduction à Pandas</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Pandas est la bibliothèque reine pour la manipulation et l'analyse de données tabulaires (comme Excel, mais en beaucoup plus puissant). Elle introduit deux structures : la <strong>Series</strong> (1D) et le <strong>DataFrame</strong> (2D).
          </p>
          <KeyConcept title="Le DataFrame">
            <p>C'est un tableau avec des lignes et des colonnes nommées. C'est l'outil que vous utiliserez 90% du temps en analyse de données à HEC.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">10.2 Charger des données</h2>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            import pandas as pd<br/>
            df = pd.read_csv("ventes.csv")<br/>
            print(df.head()) <span className="text-slate-500"># Affiche les 5 premières lignes</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">10.3 Sélection et Filtrage</h2>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            <span className="text-slate-500"># Sélectionner une colonne</span><br/>
            prix = df["Prix"]<br/>
            <br/>
            <span className="text-slate-500"># Filtrer les lignes</span><br/>
            ventes_elevees = df[df["Prix"] &gt; 100]<br/>
            <br/>
            <span className="text-slate-500"># Sélection par position (iloc) ou label (loc)</span><br/>
            premiere_ligne = df.iloc[0]<br/>
            valeur_precise = df.loc[0, "Prix"]
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">10.4 Analyse Descriptive</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Pandas permet d'obtenir un résumé statistique en une ligne.</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            print(df.describe()) <span className="text-slate-500"># Moyenne, std, min, max, quartiles</span><br/>
            print(df["Categorie"].value_counts()) <span className="text-slate-500"># Fréquences</span>
          </div>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Création de DataFrame</p>
              <p className="text-sm text-slate-600 mb-4">Créer un DataFrame à partir d'un dictionnaire de listes.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                data = &#123;"Nom": ["A", "B"], "Note": [5, 6]&#125;<br/>
                df = pd.DataFrame(data)<br/>
                print(df)
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : GroupBy</p>
              <p className="text-sm text-slate-600 mb-4">Calculer la moyenne des prix par catégorie.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                moyennes = df.groupby("Categorie")["Prix"].mean()<br/>
                print(moyennes)
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "Pandas est indispensable pour manipuler des tableaux de données.",
          "read_csv() est la fonction d'entrée principale.",
          "Le filtrage se fait avec des masques (comme NumPy).",
          "describe() donne un aperçu statistique immédiat."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quelle est la structure de données 2D principale de Pandas ?",
        options: ["Series", "Array", "DataFrame", "Table"],
        correctAnswer: "DataFrame",
        explanation: "Le DataFrame est l'objet central de Pandas, représentant un tableau de données avec des lignes et des colonnes étiquetées."
      },
      {
        question: "Quelle fonction permet de lire un fichier Excel ou CSV dans Pandas ?",
        options: ["pd.open()", "pd.read_csv()", "pd.load()", "pd.import()"],
        correctAnswer: "pd.read_csv()",
        explanation: "Pandas propose toute une famille de fonctions pd.read_* (csv, excel, sql, json) pour importer des données de sources variées."
      },
      {
        question: "Que fait la méthode df.describe() ?",
        options: ["Elle affiche les 5 premières lignes", "Elle donne le type de chaque colonne", "Elle calcule des statistiques descriptives (moyenne, min, max, etc.)", "Elle supprime les valeurs manquantes"],
        correctAnswer: "Elle calcule des statistiques descriptives (moyenne, min, max, etc.)",
        explanation: "describe() est l'outil de base pour l'analyse exploratoire, fournissant un résumé statistique complet des colonnes numériques."
      }
    ]
  },
  '11': {
    title: "Visualisation de Données avec Matplotlib",
    duration: "2h 00 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">11.1 Pourquoi visualiser ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Une image vaut mille mots, surtout en finance et en économie. La visualisation permet de détecter des tendances, des corrélations et des anomalies que les chiffres seuls ne montrent pas.
          </p>
          <KeyConcept title="Matplotlib.pyplot">
            <p>C'est le module standard pour créer des graphiques en Python. On l'importe généralement sous l'alias <code>plt</code>.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">11.2 Créer un graphique simple</h2>
          <div className="bg-slate-900 text-brand-300 p-6 rounded-2xl font-mono text-sm mb-6">
            import matplotlib.pyplot as plt<br/>
            x = [1, 2, 3, 4]<br/>
            y = [10, 20, 25, 30]<br/>
            <br/>
            plt.plot(x, y, label="Ventes")<br/>
            plt.title("Évolution des Ventes")<br/>
            plt.xlabel("Temps")<br/>
            plt.ylabel("CHF")<br/>
            plt.legend()<br/>
            plt.show()
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">11.3 Types de Graphiques Courants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">plt.bar()</h3>
              <p className="text-sm text-slate-600">Graphiques en barres pour comparer des catégories.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">plt.hist()</h3>
              <p className="text-sm text-slate-600">Histogrammes pour voir la distribution d'une variable.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">plt.scatter()</h3>
              <p className="text-sm text-slate-600">Nuages de points pour voir les corrélations.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">plt.pie()</h3>
              <p className="text-sm text-slate-600">Diagrammes circulaires pour les parts de marché.</p>
            </div>
          </div>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Personnalisation</p>
              <p className="text-sm text-slate-600 mb-4">Tracer y = x² en rouge avec des points (o).</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                import numpy as np<br/>
                x = np.linspace(0, 10, 20)<br/>
                plt.plot(x, x**2, 'ro-') <span className="text-slate-500"># 'r'ed, 'o' marker, '-' line</span><br/>
                plt.show()
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Histogramme</p>
              <p className="text-sm text-slate-600 mb-4">Afficher la distribution de 1000 nombres aléatoires.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                data = np.random.randn(1000)<br/>
                plt.hist(data, bins=30)<br/>
                plt.show()
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "Matplotlib est l'outil de base pour la visualisation.",
          "plt.plot() pour les lignes, plt.bar() pour les barres.",
          "N'oubliez pas les titres, labels et légendes pour la clarté.",
          "plt.show() est nécessaire pour afficher le graphique."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quelle fonction permet de tracer un nuage de points ?",
        options: ["plt.plot()", "plt.bar()", "plt.scatter()", "plt.hist()"],
        correctAnswer: "plt.scatter()",
        explanation: "scatter() est utilisé pour les nuages de points, idéal pour visualiser la corrélation entre deux variables."
      },
      {
        question: "Comment ajouter un titre à un graphique Matplotlib ?",
        options: ["plt.name()", "plt.title()", "plt.header()", "plt.label()"],
        correctAnswer: "plt.title()",
        explanation: "La fonction plt.title('Mon Titre') permet d'ajouter un titre principal en haut du graphique."
      },
      {
        question: "Que fait plt.show() ?",
        options: ["Elle enregistre le graphique dans un fichier", "Elle affiche le graphique à l'écran", "Elle efface le graphique actuel", "Elle change les couleurs du graphique"],
        correctAnswer: "Elle affiche le graphique à l'écran",
        explanation: "Même si vous avez tracé des données avec plot() ou bar(), le graphique ne sera visible que lorsque vous appellerez plt.show()."
      }
    ]
  },
  '12': {
    title: "Introduction à l'Algorithmique",
    duration: "2h 30 min",
    level: "Académique HEC",
    modules: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">12.1 Qu'est-ce qu'un algorithme ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Un algorithme est une suite finie et non ambiguë d'opérations permettant de résoudre un problème. En HEC, on s'intéresse particulièrement à l'efficacité (complexité) des algorithmes.
          </p>
          <KeyConcept title="Complexité Algorithmique">
            <p>On mesure souvent le temps d'exécution en fonction de la taille des données (n). Un bon algorithme doit rester rapide même si n devient très grand.</p>
          </KeyConcept>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">12.2 Algorithmes de Recherche</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Recherche Séquentielle</h3>
              <p className="text-sm text-slate-600 mb-4">On parcourt tous les éléments un par un. Simple mais lent (O(n)).</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs">
                for x in liste:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if x == cible: return True
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Recherche Dichotomique</h3>
              <p className="text-sm text-slate-600 mb-4">On divise la liste en deux à chaque étape. Très rapide (O(log n)) mais nécessite une liste <strong>triée</strong>.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">12.3 Algorithmes de Tri</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Le tri est une opération fondamentale. Python utilise le <strong>Timsort</strong> (très efficace), mais il est important de comprendre les bases comme le Tri à Bulles ou le Tri par Insertion.</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 font-mono text-sm mb-6">
            <span className="text-slate-500"># Exemple de Tri à Bulles (Bubble Sort)</span><br/>
            def bubble_sort(L):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;n = len(L)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;for i in range(n):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for j in range(0, n-i-1):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if L[j] &gt; L[j+1]:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L[j], L[j+1] = L[j+1], L[j]
          </div>
        </section>

        <section className="bg-brand-50 p-8 rounded-3xl border border-brand-100">
          <h3 className="text-xl font-bold text-brand-900 mb-6">Exercices Corrigés (Slides)</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 1 : Recherche de Maximum</p>
              <p className="text-sm text-slate-600 mb-4">Écrire un algorithme qui trouve le plus grand nombre d'une liste sans utiliser <code>max()</code>.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                def trouver_max(L):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;m = L[0]<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for x in L:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if x &gt; m: m = x<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return m
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800 mb-2">Exercice 2 : Suite de Fibonacci</p>
              <p className="text-sm text-slate-600 mb-4">Générer les n premiers termes de la suite de Fibonacci.</p>
              <div className="bg-slate-50 p-4 rounded-xl font-mono text-xs text-brand-700">
                def fibo(n):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;a, b = 0, 1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;res = []<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;for _ in range(n):<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.append(a)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a + b<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return res
              </div>
            </div>
          </div>
        </section>

        <SummarySheet items={[
          "Un algorithme est une suite d'étapes logiques.",
          "La complexité mesure l'efficacité de l'algorithme.",
          "La recherche dichotomique est beaucoup plus rapide que la séquentielle.",
          "Le tri est essentiel pour organiser les données."
        ]} />
      </div>
    ),
    quiz: [
      {
        question: "Quelle est la condition nécessaire pour effectuer une recherche dichotomique (binary search) ?",
        options: ["La liste doit être vide", "La liste doit être triée", "La liste doit contenir uniquement des nombres", "La liste doit être très courte"],
        correctAnswer: "La liste doit être triée",
        explanation: "La recherche dichotomique repose sur le fait de diviser l'espace de recherche par deux à chaque étape, ce qui n'est possible que si les éléments sont déjà ordonnés."
      },
      {
        question: "Qu'est-ce que la complexité temporelle d'un algorithme ?",
        options: ["Le temps exact en secondes qu'il met à s'exécuter", "Le nombre d'opérations élémentaires effectuées en fonction de la taille de l'entrée", "La quantité de mémoire vive utilisée", "Le nombre de lignes de code"],
        correctAnswer: "Le nombre d'opérations élémentaires effectuées en fonction de la taille de l'entrée",
        explanation: "La complexité (souvent notée O(n)) mesure comment le travail de l'algorithme augmente quand la quantité de données augmente."
      },
      {
        question: "Lequel de ces algorithmes est un algorithme de tri ?",
        options: ["Recherche Séquentielle", "Tri à Bulles (Bubble Sort)", "Recherche Dichotomique", "Algorithme de Dijkstra"],
        correctAnswer: "Tri à Bulles (Bubble Sort)",
        explanation: "Le tri à bulles est l'un des algorithmes de tri les plus simples à comprendre, même s'il n'est pas le plus efficace pour de grandes listes."
      }
    ]
  }
};
