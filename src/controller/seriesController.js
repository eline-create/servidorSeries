const series = require("../models/series.json");
const fs = require("fs");

const newSerie = (req, res) => {
  console.log(req.body);
  const { id, name, genre, synopsis, liked, seasons } = req.body;
  series.push({
    id,
    name,
    genre,
    synopsis,
    liked,
    seasons,
  });

  fs.writeFile(
    "./src/models/series.json",
    JSON.stringify(series),
    "utf-8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Série Atualizada!");
    }
  );
  res.status(201).send(series);
};
    

const getSeries = (req, res) => {
  console.log(req.url); // mostrará o endpoint para a postagem
  res.status(200).send(series);
};

const serieById = (req, res) => {
  const serieId = req.params.id;
  const serieFound = series.find((serie) => serie.id == serieId);

  if (serieFound) {
    res.status(200).send(serieFound);
  } else {
    res.status(404).send({ message: "Ops! Série não encontrada!" });
  }
};

const updateSerie = (req, res) => {
  const serieId = req.params.id;
  const serieToUpdate = req.body;

  const serieFound = series.find((serie) => serie.id == serieId);
  const serieIndex = series.indexOf(serieFound);

  if (serieIndex >= 0) {
    series.splice(serieIndex, 1, serieToUpdate);
    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(series),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Série atualizada com sucesso!");
          const serieUpdated = series.find((serie) => serie.id == serieId);
          res.status(200).send(serieUpdated);
        }
      }
    );
  } else {
    res.status(404).send({ message: "Série não encontrada para atualização!" });
  }
};

const deleteSerie = (req, res) => {
  const serieId = req.params.id;
  const serieFound = series.filter((serie) => serie.id == serieId);
  if (serieFound && serieFound.length > 0) {
    serieFound.forEach((serie) => {
      const serieIndex = series.indexOf(serie);
      series.splice(serieIndex, 1);
    });
    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(series),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          console.log("Série deletada do arquivo!");
          res.sendStatus(204);
        }
      }
    );
  } else {
    res
      .status(400)
      .send({ message: "Série buscada para deletar, não foi encontrada!" });
  }
};

const likedSerie = (req, res) => {
  const serieId = req.params.id;
  const newLiked = req.body.liked;

  const serieToUpdate = series.find((serie) => serie.id == serieId);
  const serieIndex = series.indexOf(serieToUpdate);

  if (serieIndex >= 0) {
    serieToUpdate.liked = newLiked;
    series.splice(serieIndex, 1, serieToUpdate);
    fs.writeFile(
      "./src/models/series.json",
      JSON.stringify(series),
      "utf-8",
      function (err) {
        if (err) {
          res.status(500).send(err);
        } else {
          console.log("Status atualizado!");
          const serieUpdated = series.find((serie) => serie.id == serieId);
          res.status(200).send(serieUpdated);
        }
      }
    );
  } else {
    res
      .status(400)
      .send({
        message: "Série buscada para atualizar status, não foi encontrada!",
      });
  }
};

// const newSeason = (req, res) => {
//     const seasonId = req.params.id
    


//     const { id, code, episodes } = req.body;

//     series.seasons.push({
//       id,
//       code,
//       episodes
//     });



  
//     fs.writeFile(
//       "./src/models/series.json",
//       JSON.stringify(series),
//       "utf-8",
//       function (err) {
//         if (err) {
//           return res.status(424).send({ message: err });
//         }
//         console.log("Série Atualizada!");
//       }
//     );
//     res.status(201).send(series);
//   };



module.exports = {
  newSerie,
  getSeries,
  serieById,
  updateSerie,
  deleteSerie,
  likedSerie,
  newSeason,
}
