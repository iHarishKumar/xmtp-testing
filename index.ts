// run `node index.js` in the terminal

import { Client, IdentifierKind } from "@xmtp/node-sdk";

async function testingXMTP() {
  const address = "0x83e894b586d183380e1fb6602cd8349520c03dfa";
  const canMessage = await Client.canMessage(
    [
      {
        identifier: address,
        identifierKind: IdentifierKind.Ethereum,
      },
    ],
    "production"
  );
  console.log("----", canMessage.get(address), canMessage);
}

await testingXMTP();
