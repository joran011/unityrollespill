export default async function handler(req, res) {
    try {
        const response = await fetch("http://188.64.33.238:30124/dynamic.json");
        const data = await response.json();

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "Kunne ikke hente serverstatus"
        });
    }
}
