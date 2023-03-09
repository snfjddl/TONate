import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import { TonatePage } from "./components/TonatePage";

function App() {
  const { network } = useTonConnect();

  return (
    <div className="app">
      <TonatePage></TonatePage>
    </div>
    // <StyledApp>
    //   <AppContainer>
    //     <FlexBoxCol>
    //       <h1>TONate 테스트 WebApp</h1>
    //       <FlexBoxRow>
    //         <TonConnectButton />
    //         <Button>
    //           {network
    //             ? network === CHAIN.MAINNET
    //               ? "mainnet"
    //               : "testnet"
    //             : "N/A"}
    //         </Button>
    //       </FlexBoxRow>
    //       <Counter />
    //       <TransferTon />
    //       <Jetton />
    //     </FlexBoxCol>
    //   </AppContainer>
    // </StyledApp>
  );
}

export default App;
