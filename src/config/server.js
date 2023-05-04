require("dotenv").config({ path: "./database.env" });
const express = require("express");
const sql = require("mssql");

const app = express();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
};

app.get("/customers", (req, res) => {
  sql.connect(config, (err) => {
    if (err) {
      console.log(`Error de conexión: ${err}`);
      return;
    }

    const request = new sql.Request();

    request.query("SELECT * FROM Customers", (err, result) => {
      if (err) {
        console.log(`Error al ejecutar la consulta: ${err}`);
        return;
      }

      res.json(result.recordset);
      sql.close();
    });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
