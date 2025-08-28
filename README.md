# Dimitri Portfolio

Un portfolio moderne et élégant développé avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure maintenabilité
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Radix UI** - Composants d'interface utilisateur accessibles
- **Lucide React** - Icônes modernes et légères
- **Turbopack** - Bundler ultra-rapide pour le développement

## 📁 Structure du projet

```
dimitri-portfolio/
├── app/                    # App Router (Next.js 13+)
│   ├── about/             # Page À propos
│   ├── works/             # Page Projets
│   │   └── [slug]/        # Pages dynamiques pour chaque projet
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI de base
│   └── CopyToClipboard.tsx
├── lib/                  # Utilitaires et configurations
├── public/               # Assets statiques
└── package.json
```

## 🛠️ Installation et démarrage

1. **Cloner le repository**

   ```bash
   git clone [https://github.com/dimitrimabom/dimitri-portfolio.git]
   cd dimitri-portfolio
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   Naviguez vers [http://localhost:3000](http://localhost:3000)

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement avec Turbopack
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Exécute ESLint pour vérifier le code

## 🎨 Fonctionnalités

- **Design responsive** - Optimisé pour tous les appareils
- **Pages dynamiques** - Système de routing dynamique pour les projets
- **Composants réutilisables** - Architecture modulaire
- **Performance optimisée** - Utilisation de Turbopack et optimisations Next.js
- **Accessibilité** - Composants Radix UI pour une meilleure accessibilité

## 🔧 Configuration

Le projet utilise :

- **Tailwind CSS 4** pour le styling
- **TypeScript** pour le typage
- **ESLint** pour la qualité du code
- **PostCSS** pour le traitement CSS

## 📱 Pages disponibles

- **/** - Page d'accueil
- **/about** - Page À propos
- **/works** - Liste des projets
- **/works/[slug]** - Détails d'un projet spécifique

## 🚀 Déploiement

Le projet peut être déployé sur :

- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **Railway**
- Tout autre service supportant Node.js

## 📄 Licence

Ce projet est privé et destiné à un usage personnel.

---

Développé par Dimitri
