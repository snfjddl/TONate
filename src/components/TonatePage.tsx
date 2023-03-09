import { MemberInfo, TonateInfo } from "../types";
import { MemberInfoBox } from "./MemberInfoBox";
import { RankingList } from "./RankingList";
import styles from "./TonatePage.module.css";

interface TonatePageProps {}

export function TonatePage<TonatePageProps>() {
  const memberInfo: MemberInfo = {
    totalBalance: 123.1,
    dollar: 369.3,
    tonateHistoryList: [1, 2],
  };
  const tonateList: TonateInfo[] = [
    {
      address: "address1",
      amount: 1000,
    },
    {
      address: "address2",
      amount: 2000,
    },
  ];

  return (
    <div className={styles.tonatePage}>
      <span className={styles.title}>TONate</span>

      <MemberInfoBox memberInfo={memberInfo}></MemberInfoBox>
      <RankingList></RankingList>
    </div>
  );
}
