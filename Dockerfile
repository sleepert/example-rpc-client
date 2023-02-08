FROM node:17.0.1 as builder

COPY . .

RUN npm ci

FROM node:17.0.1

ENV LISTEN_PORT 5000
ENV RPC_ENDPOINT=https://mainnet.infura.io/v3/abc

COPY --from=builder ./node_modules/ /opt/rpc-client/node_modules/
COPY --from=builder ./src/ /opt/rpc-client/src/
COPY --from=builder .env /opt/rpc-client/

WORKDIR /opt/rpc-client

ENTRYPOINT [ "node", "src/index.js" ]