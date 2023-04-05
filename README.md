# Slack: UI Clone with React Native / Expo

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

<p align="center">
  <img src="screenshots/screenshare-3_v1.jpg?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Features](#features)
- [Linting](#linting)
- [Demo & Release Notes](#release-notes)

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

**Install:**

```bash
yarn
```

**Run Project Locally:**

```bash
yarn dev
```

## Features

- Expo SDK 48
- React Navigation v6
- PropTypes
- [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
- [Swiper Component](https://github.com/leecade/react-native-swiper)

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Release Notes

**version 0.4.0 (current)**

- upgraded to [Expo SDK 48](https://blog.expo.dev/expo-sdk-48-ccb8302e231)
- upgraded to [Expo SDK 47](https://blog.expo.dev/expo-sdk-47-a0f6f5c038af)
- upgraded to [Expo SDK 46](https://blog.expo.dev/expo-sdk-46-c2a1655f63f7)
- upgraded to [Expo SDK 45](https://blog.expo.dev/expo-sdk-45-f4e332954a68)
- upgraded to [Expo SDK 44](https://blog.expo.dev/expo-sdk-44-4c4b8306584a)
- upgraded to [Expo SDK 43](https://blog.expo.dev/expo-sdk-43-aa9b3c7d5541)
- upgraded to [React Navigation v6](https://reactnavigation.org/docs/getting-started)

**version 0.3.0**

- upgraded to [Expo SDK 42](https://blog.expo.io/expo-sdk-42-579aee2348b6)
- upgraded to [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
- upgraded to [React Navigation v5](https://reactnavigation.org/docs/5.x/getting-started)

**version 0.2.0**

- upgraded to [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://dev.to/expo/expo-sdk-39-is-now-available-1lm8)
- upgraded to [React Navigation v4](https://reactnavigation.org/docs/4.x/getting-started)
- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-ab6cd30ca2ee)

**version 0.1.0**

- upgraded to [Expo SDK 37](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- upgraded to [Expo SDK 36](https://blog.expo.io/expo-sdk-36-is-now-available-b91897b437fe)
- upgraded to [Expo SDK 35](https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4)
- started with [React Navigation v3](https://reactnavigation.org/docs/3.x/getting-started)
- initial navigation
  - chat
    - custom AccessoryBar
    - custom Message
    - custom Message Bubble
    - custom Send Button + different placement
  - drawers
    - left drawer using [createDrawerNavigator](https://reactnavigation.org/docs/3.x/drawer-based-navigation/)
    - custom right drawer
- 3rd party packages used:
  - [Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)
  - [Swiper Component](https://github.com/leecade/react-native-swiper)
