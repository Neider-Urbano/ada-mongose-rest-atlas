const express = require("express");
const {
  createTask,
  getTasks,
  getTaskId,
  deleteTaskId,
  updateTaskId,
} = require("./crudList");
const router = express.Router();

router.get("/", async (req, res) => {
  await getTasks()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  await getTaskId(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
});

router.post("/", async (req, res) => {
  const data = req.body;
  await createTask(data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
});

router.delete("/", async (req, res) => {
  const { id } = req.query;
  await deleteTaskId(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await updateTaskId(id, data)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
});

module.exports = router;
