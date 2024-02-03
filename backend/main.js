const exspress = require("express");
const cors = require("cors");
const port = 5000;
const db = require("./database");
const app = exspress();

app.use(cors());
app.use(exspress.urlencoded());

app.get("/todo", (_, res) => {
  db.query("SELECT * FROM todo", (_, r) => {
    let html = "";
    r.map((data) => (html += `<li>${data.note}</li>`));
    res.send(html);
  });
});

app.post("/todo", (req, res) => {
  const note = req.body.note;
  db.query(`INSERT INTO todo (note) VALUES('${note}')`, (err, _) => {
    if (err) return res.send("gagalll");
    res.send("ssss");
  });
});

app.listen(port, () => {
  console.log("server running in port: " + port);
});
