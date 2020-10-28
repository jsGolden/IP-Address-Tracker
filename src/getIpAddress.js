const fetch = require("node-fetch");

module.exports = async function getIPAddress(ip) {
  const URL = `https://ipwhois.app/json/${ip}`;
  let ipResponse = await fetch(URL, { method: "Get" });
  let ipObject = await ipResponse.json();

  return ipObject;
};
