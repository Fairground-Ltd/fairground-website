# Fairground Website
Codebase for the Fairground Website.

## Project Overview
Fairground aims to enhance music discovery and engagement by connecting users with their favourite artists, labels, and music scenes. It addresses the challenges of finding curated music, fostering community connections, and simplifying ticketing for live events.

## Installation Instructions
### TODO: Add content

## Branching Strategy
We follow a Git Flow branching model to maintain production-ready code in `main` while managing development and feature changes in separate branches.

### Branches:
- **main:** Production-ready code. Only merged from `dev` or `hotfix`.
- **dev:** Staging environment for features and fixes. Precedes deployment to `main`.
- **feature/*:** New feature development. Branch from `dev` and merge back into `dev`.
- **fix/*:** Hotfixes for the current `dev`. Merge back into `dev` upon completion.
- **release/*:** Prepares new production releases from `dev`. Allows final bug fixes before merging into `main` and `dev`.
- **hotfix/*:** Critical fixes applied to production from `main`. Merge into both `main` and `dev` once resolved.

## Contact Information
Lead Developer: Michael Butler

Email: support@fairground.music

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).
