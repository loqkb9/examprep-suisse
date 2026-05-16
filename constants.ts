import { CourseId, CourseData } from './types';

export const COURSES: Record<CourseId, CourseData> = {
  [CourseId.PYTHON]: {
    id: CourseId.PYTHON,
    title: "Programmation – Exam Prep",
    subtitle: "Introduction à la programmation pour HEC",
    description: "Une session intensive conçue spécifiquement pour les étudiants en 1ère année HEC Lausanne pour maîtriser les bases de la programmation avant l'examen.",
    content: [
      "Variables, Types & Opérateurs",
      "Logique de Contrôle (if/elif/else)",
      "Structures de Données (Listes & Tuples)",
      "Boucles Iteratives (for & while)",
      "Fonctions & Modularité",
      "Dictionnaires & Ensembles (Sets)",
      "Gestion des Fichiers (I/O)",
      "Modules & Bibliothèques (math, random)",
      "NumPy & Analyse Vectorielle",
      "Pandas & DataFrames",
      "Visualisation Matplotlib",
      "Introduction à l'Algorithmique"
    ],
    format: "Groupe Réunion Teams (nombre d'étudiants limité)",
    duration: "4 heures (9h-13h le 20.06.2026)",
    level: "1ère année HEC Lausanne",
    price: "80 CHF",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
};

export const AVAILABLE_DATES = [
  "Samedi 20 Juin - 09h00 à 13h00",
];