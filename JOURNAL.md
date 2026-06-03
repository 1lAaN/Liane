# Journal de bord — Liane

> Journal mis à jour à chaque session de travail.
> Plus récent en haut.

---

## 2026-06-03 — Phase 1 : Setup monorepo + Docker + NestJS

### Ce qu'on a fait
- Création de `pnpm-workspace.yaml` et `package.json` racine (monorepo pnpm)
- Création de `docker-compose.yml` avec PostgreSQL 16 + PostGIS 3.4
- Vérification que la BDD tourne (`docker compose up -d`, test via `psql`)
- Création de `.env` et `.env.example` avec la `DATABASE_URL`
- Init NestJS dans `apps/api` via `pnpm dlx @nestjs/cli`
- Résolution des problèmes pnpm : `pnpm setup`, `pnpm approve-builds`, `allowBuilds` dans `pnpm-workspace.yaml`
- Premier démarrage de NestJS (`pnpm run start:dev`) → `Hello World!` sur `localhost:3000`
- Lecture et explication des 4 fichiers générés par le CLI NestJS

### Décisions prises
- Utilisation de `pnpm dlx` pour lancer le CLI NestJS (évite les problèmes de dépendances globales)
- `allowBuilds: true` pour `@nestjs/core` et `unrs-resolver` dans `pnpm-workspace.yaml`

### Concepts appris (côté Ihlane)
- Monorepo vs polyrepo — pourquoi pnpm workspaces pour partager `packages/types`
- `"private": true` dans `package.json` — protection contre publication accidentelle sur npm
- `pnpm dlx` — équivalent de `npx`, exécution temporaire sans installation globale
- Structure NestJS : Module / Controller / Service (analogie avec Symfony Bundles)
- Décorateurs TypeScript : `@Module`, `@Controller`, `@Get`, `@Injectable`
- Flux d'une requête NestJS : requête → controller → service → réponse

### Problèmes rencontrés et solutions
- `@nestjs/schematics` non résolu avec install globale → résolu avec `pnpm dlx`
- `pnpm approve-builds` mis à `false` par erreur → corrigé manuellement dans `pnpm-workspace.yaml`

### Prochaine étape
- Installer et configurer **Prisma** dans `apps/api`
- Écrire le premier schéma Prisma (tables `cabinets` et `infirmiers` pour commencer)
- Lancer la première migration vers la BDD PostgreSQL

### État du projet
- Phase en cours : **Phase 1 — Fondations**
- Ce qui marche : monorepo pnpm ✅, Docker Postgres+PostGIS ✅, NestJS démarre ✅
- Ce qui reste dans la phase : Prisma, schéma BDD, première migration

---

## 2026-06-02 — Phase 0 : Cadrage du projet (session Claude.ai)

### Ce qu'on a fait
- Idée initiale validée avec ma mère (infirmière libérale, frustrée par AgatheYou)
- Choix du nom : **Liane** (jeu de mot : Lien + IDEL, évoque la connexion entre patients/soignants)
- Stack technique définie : NestJS, Nuxt 3, React Native+Expo, PostgreSQL+PostGIS, Python+FastAPI+OR-Tools, OSRM
- Structure monorepo pnpm validée
- README rédigé et poussé sur GitHub
- Schéma BDD finalisé après questions métier à ma mère
- Repo `liane` créé sur mon GitHub

### Décisions prises
- **Mode portfolio** : repo public, soin particulier sur la doc et la présentation
- **Aucune donnée patient réelle** dans le repo, même en dev → données fictives via Faker.js
- **Cotations NGAP obligatoires** dès le MVP (ma mère a confirmé que la facturation en dépend)
- **Architecture multi-cabinet / multi-infirmières** dès le départ (anticipation refactor)
- **Approche MVP par phases** : livrables testables à chaque fin de phase
- **Conformité HDS** repoussée à plus tard (au cas où commercialisation)

### Concepts appris (côté Ihlane)
- MVP (Minimum Viable Product)
- Refactor
- FK (Foreign Key) / PK (Primary Key)
- NGAP (Nomenclature Générale des Actes Professionnels)
- VRPTW (Vehicle Routing Problem with Time Windows)
- HDS (Hébergeur de Données de Santé)

### Réponses métier de ma mère
1. **Une ordonnance peut contenir plusieurs soins** ✅
2. **Fréquences variées selon les soins** :
   - Horaires fixes (ex: insuline à 7h)
   - Fenêtres horaires (ex: insuline avant repas)
   - N fois / 24h sans contrainte précise (ex: perfusion 3x/jour)
   - Libre (ex: pansement)
3. **Cotations NGAP : à gérer dès le MVP** (sinon facturation fausse)
4. **Multi-infirmières possible** (cabinets, remplacements)
5. **Soins ponctuels** possibles, mais toujours via ordonnance

### Schéma BDD validé
Tables : `cabinets`, `infirmiers`, `patients` (avec coords PostGIS), `ordonnances`, `soins` (avec `type_frequence` enum), `cotations_ngap` (table de référence), `tournees`, `visites`, `actes_factures`.

### Questions encore ouvertes
- Combien de codes NGAP utilisés au quotidien par ma mère
- Logiciel de facturation actuel (pour comprendre l'écosystème)
- Usage du BSI
- Gestion des soins multi-fois/jour par infirmières différentes
- Week-ends et remplacements

### Prochaine étape
- Phase 1 : setup du monorepo, Docker Compose (Postgres + PostGIS), init NestJS, init Prisma, premier schéma, première migration

### État du projet
- Phase en cours : **passage Phase 0 → Phase 1**
- Ce qui marche : rien encore côté code, mais le cadrage est solide
- Ce qui reste : tout le développement
