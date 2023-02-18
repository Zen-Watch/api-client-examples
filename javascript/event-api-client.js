
async function makePostRequest() {
  const api_key = '<replace-example-api-key>';
  const fetch = await import('node-fetch').then(m => m.default);
  const url = 'https://api.zen.watch/analytics/event';

  const data = {
    environment_details: {
      "city": "San Fransisco",
      "country": "USA",
      "platform": "iOS"
    },
    event_type: "ethereum_mainnet_transaction",
    event_properties: {
      txn_hash: "0x662606534f28cb4b92d91e588929f4ce71f68bee7899e9a612d6295d9ff847a1",
      app_exchange_currency: "USD",
      app_txn_tag: "quote_id_123",
      app_charge_incl_txn_cost: 50,
      app_charge_excl_txn_cost: 5
    },
    wallet_address: "0x72e420c2d161c4f98ab1fcc9d232f3551173f00d"
  };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': api_key
    }
  });

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } else {
    console.log('Error:', response.status);
  }
}

makePostRequest();
