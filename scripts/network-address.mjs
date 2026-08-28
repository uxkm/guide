import { networkInterfaces } from 'node:os';

export function getNetworkAddress() {
  for (const interfaces of Object.values(networkInterfaces())) {
    for (const iface of interfaces ?? []) {
      const isIpv4 = iface.family === 'IPv4' || iface.family === 4;
      if (isIpv4 && !iface.internal) return iface.address;
    }
  }
  return null;
}

export function formatDevUrls(port, networkHost = getNetworkAddress()) {
  const localhost = `http://localhost:${port}`;
  if (!networkHost) return localhost;
  return `${localhost}  ·  http://${networkHost}:${port}`;
}
