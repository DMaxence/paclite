import Axios from '../assets/axios.png'
import Ethers from '../assets/ethers.png'
import I18Next from '../assets/i18next.png'
import Moment from '../assets/moment.png'
import Pinia from '../assets/pinia.png'
import Prettier from '../assets/prettier.png'
import ReactNativeNavigation from '../assets/react-native-navigation.png'
import ReactRouterDom from '../assets/react-router-dom.png'
import ReactToastify from '../assets/react-toastify.png'
import Sass from '../assets/sass.png'
import Splitbee from '../assets/splitbee.png'
import TailwindCss from '../assets/tailwindcss.png'
import Uuid from '../assets/uuid.png'
import Vue from '../assets/vue.png'
import Web3Modal from '../assets/web3modal.png'

const packageList = [
  {
    title: 'Javascript packages',
    list: [
      {
        slug: 'axios',
        name: 'Axios',
        description: 'Promise based HTTP client for the browser and node.js',
        url: 'https://axios-http.com/docs/intro',
        icon: Axios,
        command: 'axios',
        isToggled: false,
      },
      {
        slug: 'tailwindcss',
        name: 'Tailwind CSS',
        description:
          'A utility-first CSS framework for rapidly building custom designs.',
        url: 'https://tailwindcss.com/docs/installation/using-postcss',
        icon: TailwindCss,
        command: 'tailwindcss postcss autoprefixer',
        isToggled: false,
      },
      {
        slug: 'i18next',
        name: 'I18next',
        description: 'Internationalization for web and mobile',
        url: 'https://www.i18next.com/overview/getting-started',
        icon: I18Next,
        command: 'i18next',
        isToggled: false,
      },
      {
        slug: 'svelte-i18next',
        name: 'Svelte I18next',
        description: 'Internationalization for Svelte',
        url: 'https://github.com/NishuGoel/svelte-i18next',
        icon: I18Next,
        command: 'svelte-i18next i18next',
        isToggled: false,
      },
      {
        slug: 'next-i18next',
        name: 'Next I18next',
        description: 'Internationalization for Next',
        url: 'https://github.com/i18next/next-i18next',
        icon: I18Next,
        command: 'next-i18next next react react-dom',
        isToggled: false,
      },
      {
        slug: 'remix-i18next',
        name: 'Remix I18next',
        description: 'Internationalization for Remix',
        url: 'https://github.com/sergiodxa/remix-i18next',
        icon: I18Next,
        command:
          'remix-i18next i18next react-i18next i18next-http-backend i18next-fs-backend i18next-browser-languagedetector',
        isToggled: false,
      },
      {
        slug: 'sass',
        name: 'Sass',
        description: 'CSS with superpowers',
        url: 'https://sass-lang.com/install',
        icon: Sass,
        command: 'sass',
        isToggled: false,
      },
      {
        slug: 'splitbee-web',
        name: 'Splitbee Web',
        description: 'Analytics for web',
        url: 'https://splitbee.io/docs/javascript-library',
        icon: Splitbee,
        command: '@splitbee/web',
        isToggled: false,
      },
      {
        slug: 'moment',
        name: 'Moment',
        description: 'Parse, validate, manipulate, and display dates and times',
        url: 'https://momentjs.com/docs/#/use-it/',
        icon: Moment,
        command: 'moment',
        isToggled: false,
      },
      {
        slug: 'uuid',
        name: 'Uuid',
        description: 'Generate RFC-compliant UUIDs in JavaScript',
        url: 'https://github.com/uuidjs/uuid',
        icon: Uuid,
        command: 'uuid',
        isToggled: false,
      },
      {
        slug: 'prettier',
        name: 'Prettier',
        description: 'An opinionated code formatter',
        url: 'https://prettier.io/docs/en/index.html',
        icon: Prettier,
        command: 'prettier',
        isToggled: false,
      },
    ],
  },
  {
    title: 'React packages',
    list: [
      {
        slug: 'react-router-dom',
        name: 'React Router v6',
        description: 'Declarative routing for React',
        url: 'https://reactrouter.com/en/v6.3.0/getting-started/installation',
        icon: ReactRouterDom,
        command: 'react-router-dom@6',
        isToggled: false,
      },
      {
        slug: 'react-i18next',
        name: 'React I18next',
        description: 'Internationalization for React',
        url: 'https://react.i18next.com/getting-started',
        icon: I18Next,
        command: 'react-i18next i18next',
        isToggled: false,
      },
      {
        slug: 'react-toastify',
        name: 'React Toastify',
        description: 'React notification made easy',
        url: 'https://fkhadra.github.io/react-toastify/introduction/',
        icon: ReactToastify,
        command: 'react-toastify',
        isToggled: false,
      },
    ],
  },
  {
    title: 'Vue packages',
    list: [
      {
        slug: 'react-router-dom',
        name: 'Vue Router v4',
        description: 'The official router for Vue.js',
        url: 'https://router.vuejs.org/installation.html',
        icon: Vue,
        command: 'vue-router@4',
        isToggled: false,
      },
      {
        slug: 'vue-i18next',
        name: 'Vue I18next',
        description: 'Internationalization for Vue',
        url: 'https://github.com/i18next/i18next-vue',
        icon: I18Next,
        command: 'i18next-vue',
        isToggled: false,
      },
      {
        slug: 'pinia',
        name: 'Pinia',
        description: 'A store for Vue',
        url: 'https://pinia.vuejs.org/getting-started.html',
        icon: Pinia,
        command: 'pinia',
        isToggled: false,
      },
    ],
  },
  {
    title: 'React-Native packages',
    list: [
      {
        slug: 'react-native-navigation',
        name: 'React Native Navigation',
        description: 'Declarative routing for React Native',
        url: 'https://reactnavigation.org/docs/getting-started',
        icon: ReactNativeNavigation,
        command:
          '@react-navigation/native react-native-screens react-native-safe-area-context',
        isToggled: false,
      },
      {
        slug: 'splitbee-react-native',
        name: 'Splitbee React Native',
        description: 'Analytics for React Native',
        url: 'https://splitbee.io/docs/react-native-expo-analytics',
        icon: Splitbee,
        command:
          '@splitbee/react-native react-native-device-info @react-native-async-storage/async-storage',
        isToggled: false,
      },
    ],
  },
  {
    title: 'Web3 packages',
    list: [
      {
        slug: 'ethers',
        name: 'Ethers',
        description: 'Ethereum JavaScript API',
        url: 'https://docs.ethers.io/v5/getting-started/#installing',
        icon: Ethers,
        command: 'ethers',
        isToggled: false,
      },
      {
        slug: 'web3modal',
        name: 'Web3Modal - React',
        description: 'Web3 modal provider',
        url: 'https://github.com/WalletConnect/web3modal/tree/V2/packages/react',
        icon: Web3Modal,
        command: '@web3modal/react @web3modal/ethereum ethers',
        isToggled: false,
      },
    ],
  },
]

export default packageList
