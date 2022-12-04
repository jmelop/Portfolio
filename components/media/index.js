import media1 from '../../public/assets/projects/crypto.png'
import media2 from '../../public/assets/projects/quizz.png'
import media3 from '../../public/assets/projects/raptor.png'

export const projects = [
  {
    title: 'CryptoKeeper',
    slug: 'cryptokeeper',
    banner: media1,
    website: 'https://github.com/jmelop/CryptoKeeperFront',
    description:
      'Open source app that allow you to save your crypto data and check the market in real live. The app has multiple charts to check your monthly purchases or the value of your portfolio.',
    shortDescription:
      'Open source app that allow to save your crypto data and check the market in real live.',
    repository: 'https://github.com/jmelop/CryptoKeeperFront',
    screenshots: [
      media1
    ],
    deployment: {
      web: 'https://github.com/jmelop/CryptoKeeperFront',
    },
    subProjects: [],
  },
  {
    title: 'Quizz',
    slug: 'quizz',
    banner: media2,
    website: 'https://github.com/jmelop/Quizz',
    description:
      'Quizz will help you to learn new languages. Save your vocabulary and play to learn new words.',
    shortDescription:
      'Quizz will help you to learn new languages. Save your vocabulary and play to learn new words.',
    repository: 'https://github.com/jmelop/Quizz',
    screenshots: [
      media2
    ],
    deployment: {
      web: 'https://github.com/jmelop/Quizz',
    },
    subProjects: [],
  },
  {
    title: 'Raptor',
    slug: 'raptor',
    banner: media3,
    website: 'https://github.com/jmelop/Raptor',
    description:
      'Raptor is a ecommerce where you can buy the last drones of the market.',
    shortDescription:
      'Raptor is a ecommerce where you can buy the last drones of the market.',
    repository: 'https://github.com/jmelop/Raptor',
    screenshots: [
      media3
    ],
    deployment: {
      web: 'https://github.com/jmelop/Raptor',
    },
    subProjects: [],
  }
];