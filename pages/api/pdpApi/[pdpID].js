const PDP_DATA = require(`../../../public/pdp.json`);

export default function categoryAPIHandler(req, res) {
  let { pdpID } = req.query;
  pdpID = pdpID.replace("_", "/");
  PDP_DATA.id === pdpID ? res.status(200).json(PDP_DATA) : res.status(404).json({error: "Not found"})
}
