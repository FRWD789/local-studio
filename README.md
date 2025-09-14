# Labo Front-End – Landing Page Animée avec React & GSAP

## Description
Ce projet est un **labo front-end** dont l’objectif est d’explorer l’intégration de la librairie **GSAP** dans une application **React**.  
Il consiste à concevoir une **landing page animée** en mettant l’accent sur :
- La fluidité des transitions
- La performance des animations
- L’organisation du code pour éviter les fuites mémoire et garder la structure claire

L’approche adoptée utilise principalement :
- `useRef` et `useLayoutEffect` pour cibler et animer les éléments du DOM
- `gsap.context()` pour encapsuler les animations et assurer un **cleanup automatique**
- Des hooks personnalisés pour réutiliser certains effets d’animation