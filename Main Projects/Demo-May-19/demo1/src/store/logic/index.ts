import { transactionsAddLogic } from "./add-transactions-logic";
import { usersAddLogic } from "./add-usersdata";
import { transactionsFetchLogic } from "./all-transaction-history-logic";
import { usersFetchLogic } from "./all-users-logic";
import { userdataUpdateLogic } from "./update-userdata";

export const allLogic: any = [
  usersFetchLogic,
  usersAddLogic,
  transactionsFetchLogic,
  transactionsAddLogic,
  userdataUpdateLogic
];
