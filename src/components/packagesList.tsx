import AxiosIcon from '../assets/axios.png'
import ReactRouterDom from '../assets/react-router-dom.png'
import ReactNativeNavigation from '../assets/react-native-navigation.png'
import TailwindCss from '../assets/tailwindcss.png'

const packageList = [
  {
    title: 'Javascript packages',
    list: [
      {
        slug: 'axios',
        name: 'Axios',
        description: 'Promise based HTTP client for the browser and node.js',
        url: 'https://axios-http.com/docs/intro',
        icon: AxiosIcon,
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
    ],
  },
]

export default packageList
