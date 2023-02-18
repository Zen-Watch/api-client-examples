# Zen.watch API Client Examples
Examples to invoke Zen.Watch APIs

## Curl
Execute the following curl from your command line, replacing the example-api-key your api key.
```
curl --header "Content-Type: application/json" --header "x-api-key: <replace-example-api-key>" \
     --request POST \
     --data '{"environment_details":{"city":"San Fransisco","country":"USA","platform":"iOS"},"event_type":"ethereum_mainnet_transaction","event_properties":{"txn_hash":"0x662606534f28cb4b92d91e588929f4ce71f68bee7899e9a612d6295d9ff847a1","app_exchange_currency":"USD","app_txn_tag":"quote_id_123","app_charge_incl_txn_cost":50,"app_charge_excl_txn_cost":5},"wallet_address":"0x72e420c2d161c4f98ab1fcc9d232f3551173f00d"}' \
       https://api.zen.watch/analytics/event
```
You will get a `{"status":200,"message":"OK"}` if all goes well, else please contact **<u>support@zen.watch</u>**.

## Local execution of the examples

To run the javascript examples, please have npm and node installed in your machine. Then run the following commands
```
cd javascript
npm install
node event-api-client.js
```
You will get a `{"status":200,"message":"OK"}` if all goes well, else please contact **<u>support@zen.watch</u>**.

