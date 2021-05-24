import screens from '../constants/screens';

export const GIVING_CARD_DATA = [
  {
    id: 1,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    image: require('../assets/images/rectangle2.png'),
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 2,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    image: require('../assets/images/rectangle2.png'),
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 3,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    image: require('../assets/images/rectangle2.png'),
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 4,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    image: require('../assets/images/rectangle2.png'),
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 5,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    image: require('../assets/images/rectangle2.png'),
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
];

export interface IAccountsListItem {
  id: number;
  title: string;
  subtitle: string;
  cash: {
    banknotes: string;
    cents: string;
  };
  icon?: boolean;
  navigateTo?: string;
  additionalInfo?: string;
  achievement?: string;
}

export const AccountsListItemData: IAccountsListItem = [
  {
    id: 1,
    title: 'Checking',
    subtitle: 'Main Account (...0353)',
    cash: {
      banknotes: '1,500',
      cents: '20',
    },
    navigateTo: screens.CHECKING,
    additionalInfo: 'Some text for another page',
  },
  {
    id: 2,
    title: 'Savings',
    subtitle: 'Buy a house (...4044)',
    cash: {
      banknotes: '5,000',
      cents: '20',
    },
    navigateTo: screens.SAVING,
    additionalInfo: 'Some text for another page',
    achievement: 'Savings is up 3% from last month',
  },
  {
    id: 3,
    title: 'Goodness',
    subtitle: 'Cash Rewards',
    cash: {
      banknotes: '500',
      cents: '40',
    },
    icon: true,
  },
];
