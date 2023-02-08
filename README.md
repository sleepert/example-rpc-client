## Exmple RPC Client
Rest server using `Express` with the path `/GetData` that queries the latest block for the supplied `RPC_ENDPOINT`

Build/Run server:
```
docker build . -t rpc-client:latest
docker run -e RPC_ENDPOINT=<infura endpoint> -e LISTEN_PORT=5001 -p 5001:5001 rpc-client:latest
```