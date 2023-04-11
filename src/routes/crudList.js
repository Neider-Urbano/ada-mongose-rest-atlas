const ListModel = require("../models/List");

const getTasks = async () => {
  try {
    let tasks = await ListModel.find();
    return tasks;
  } catch (error) {
    throw error;
  }
};

const getTaskId = async (id) => {
  try {
    let task = await ListModel.findById({ _id: id });
    return task;
  } catch (error) {
    throw error;
  }
};

const createTask = async (data) => {
  try {
    let newTask = new ListModel(data);
    return await newTask.save();
  } catch (error) {
    throw error;
  }
};

const deleteTaskId = async (id) => {
  try {
    let task = await ListModel.findByIdAndDelete({ _id: id });
    return task;
  } catch (error) {
    throw error;
  }
};

const updateTaskId = async (id, data) => {
  try {
    await ListModel.findByIdAndUpdate({ _id: id }, { $set: data });
    return await getTasks();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskId,
  deleteTaskId,
  updateTaskId,
};
