const getIPAddress = require("./getIPAddress");

module.exports = {
  async index(req, res) {
    const ip = req.query.ip;
    if (!ip) return res.render("index");
    if (!validateIPAddress(ip)) return res.render("index", { error: true });
    let ipAddress = await getIPAddress(ip);
    if (!ipAddress.success) return res.render("index", { error: true });
    return res.render("tracked-ip", { ipAddress });
  },
};

function validateIPAddress(ipAddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipAddress
    )
  ) {
    return true;
  }
  return false;
}
