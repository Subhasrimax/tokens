import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/tokens_backend";
import { AuthClient } from "Adfinity/auth-client";

function Faucet(props) {

  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Gimme Gimme");

  async function handleClick(event) {
    setDisable(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCansiter = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    const result = await token.payOut();
    setText(result);
    //setDisable(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to {props.userPrincipal}.</label>
      <p className="trade-buttons">
        <button id="btn-payout"
          onClick={handleClick}
          disabled={isDisabled}
        >

        </button>
      </p>
    </div>
  );
}

export default Faucet;
