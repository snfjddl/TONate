import { MemberInfo, TonateInfo } from "../types";
import { MemberInfoBox } from "./MemberInfoBox";
import { RankingList } from "./RankingList";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Button } from "./styled/styled";
import { useTonConnect } from "../hooks/useTonConnect";
import TonConnect from "@tonconnect/sdk";

import styles from "./TonatePage.module.css";
import { LoginBox } from "./LoginBox";

interface TonatePageProps {}

export function TonatePage<TonatePageProps>() {
  const connector = useTonConnect();

  console.log(connector);

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
  ];

  return (
    <div className={styles.tonatePage}>
      <span className={styles.title}>TONate</span>

      {connector.network ? (
        <MemberInfoBox memberInfo={memberInfo}></MemberInfoBox>
      ) : (
        <LoginBox></LoginBox>
      )}

      <RankingList tonateList={tonateList}></RankingList>
    </div>
  );
}
