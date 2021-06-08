import screens from '../constants/screens';

export interface IGivingCardData {
  id: number;
  avatar: string;
  title: string;
  place: string;
  timestamp: string;
  description: string;
}

export const GIVING_CARD_DATA = [
  {
    id: 1,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 2,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 3,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 4,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
  {
    id: 5,
    avatar: '../../assets/images/avatar.png',
    title: 'Your Giving Impact',
    place: 'St Jude',
    timestamp: '4 hrs ago',
    description:
      'Danny, Your donation helped 5 amazing kids get much needed cancer surgery, thanks for being amazing',
  },
];

export interface IAccountsListItem {
  id?: number;
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

export const AccountsListItemData: IAccountsListItem[] = [
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
    navigateTo: screens.SAVINGS,
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

export interface ICheckingDataItem {
  id: number;
  title: string;
  subtitle: string;
  funds: {
    banknotes: string;
    cents: string;
  };
  isSpecial: boolean;
}

export const CheckingData = {
  july11: [
    {
      id: 1,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isSpecial: false,
    },
    {
      id: 2,
      title: 'Facebook Inc',
      subtitle: 'Pay Day ! Yay !',
      funds: {
        banknotes: '1.200',
        cents: '95',
      },
      isSpecial: true,
    },
    {
      id: 3,
      title: 'Lencrafters',
      subtitle: 'Paramus NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isSpecial: false,
    },
    {
      id: 4,
      title: 'AplPay 7-Eleven',
      subtitle: 'Cresskill NJ | iPhone',
      funds: {
        banknotes: '17',
        cents: '75',
      },
      isSpecial: false,
    },
  ],
  july12: [
    {
      id: 1,
      title: 'Transfer from Savings',
      subtitle: 'Buy a house (...4044)',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isSpecial: false,
    },
    {
      id: 2,
      title: 'Starbucks',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isSpecial: false,
    },
    {
      id: 3,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isSpecial: false,
    },
    {
      id: 4,
      title: 'Target',
      subtitle: 'Closter NJ | Debit Card',
      funds: {
        banknotes: '63',
        cents: '95',
      },
      isSpecial: false,
    },
  ],
};
