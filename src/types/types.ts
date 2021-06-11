export type RootStackParamList = {
  Home: undefined;
  Accounts: { name: string };
  Cards: { name: string };
  Giving: { name: string };
  Payments: { name: string };
  Checking: { name: string; subtitle: string };
  Savings: { name: string; subtitle: string };
  getTabBar: { name: string };
  Profile: { name: string };
};
