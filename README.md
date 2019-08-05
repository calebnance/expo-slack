# Slack Clone with Expo

<p align="center">
  <img src="screenshots/screenshare-3_v1.jpg?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 34
- React Navigation v3
- PropTypes
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
- [Swiper Component](https://github.com/leecade/react-native-swiper)

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Release Notes

### version 0.0.1 (current)

- initial navigation (chat and drawer with swipeable screens)
- 3rd party packages used:
  - [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
  - [Swiper Component](https://github.com/leecade/react-native-swiper)
