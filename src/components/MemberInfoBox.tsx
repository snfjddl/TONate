import { FC } from "react";
import { MemberInfo } from "../types";
import { TonateHistoryBox } from "./TonateHistoryBox";

import styles from "./MemberInfoBox.module.css";

interface MemberInfoBoxProps {
  memberInfo: MemberInfo;
}

export const MemberInfoBox: FC<MemberInfoBoxProps> = ({ memberInfo }) => {
  const { totalBalance, dollar, tonateHistoryList } = memberInfo;

  console.log(tonateHistoryList);

  return (
    <div className={styles.memberInfoBox}>
      <div className={styles.memberInfo}>
        <div>
          <span>Total balance</span>
          <span>{`${totalBalance}TON`}</span>
          <span>{`$${dollar}`}</span>
        </div>
        <div className={styles.profileImage}></div>
      </div>

      <div className={styles.memberTonateHistory}>
        <div>
          <span>TONate History</span>
          <span>
            <a>{"More>"}</a>
          </span>
        </div>
        <div>
          {tonateHistoryList.map((tonateHistory: unknown) => {
            return (
              <TonateHistoryBox
                key={tonateHistory}
                tonateHistory={tonateHistory}
              ></TonateHistoryBox>
            );
          })}
        </div>
      </div>
    </div>
  );
};
