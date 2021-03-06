const httpCode = require('http-status-codes');
const User = require("../models/user.model");
const mongoose = require("mongoose");

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const create = async (req, res) => {
  let responseObj = {
    status: httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
    message: httpCode.getReasonPhrase(httpCode.StatusCodes.INTERNAL_SERVER_ERROR),
    data: {}
  };
  try {
    let data = {...req.body};
    if(isObjectEmpty(data)) {
      throw "Data is empty";
    }
    let newUser = await User.create(data);
    if (newUser) {
      responseObj = {
        status: httpCode.StatusCodes.OK,
        message: httpCode.getReasonPhrase(httpCode.StatusCodes.OK),
        data: newUser
      };
    }
  } catch (err) {
    console.log(err)
  }
  return res.status(responseObj.status).send(responseObj);
};

const retrieve = async (req, res) => {
  let responseObj = {
    status: httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
    message: httpCode.getReasonPhrase(httpCode.StatusCodes.INTERNAL_SERVER_ERROR),
    data: {}
  };
  try {
    let data = {...req.query};
    console.log(data)
    if(isObjectEmpty(data)) {
      throw "Data is empty";
    }
    let match = {};
    if (data.id) {
      match._id = mongoose.Types.ObjectId(data.id);
    }
    if (data.search) {
      match.$or = [
        {
          email: {
            $regex: ".*" + data.search + ".*",
            $options: "i",
          },
        },
        {
          name: {
            $regex: ".*" + data.search + ".*",
            $options: "i",
          },
        }
      ];
    }
    let aggregate = [
      {
        $match: match,
      },
    ]
    if (data.pageSize && data.pageNum) {
      let page = Number.parseInt(data.pageNum) - 1;
      let resultsPerPage = Number.parseInt(data.pageSize);
      aggregate.push({ $skip: resultsPerPage * page });
      aggregate.push({ $limit: resultsPerPage });
    }
    let user = await User.aggregate(aggregate);
    if (data.id) {
      user = user[0]
    }
    if (user) {
      responseObj = {
        status: httpCode.StatusCodes.OK,
        message: httpCode.getReasonPhrase(httpCode.StatusCodes.OK),
        data: user
      };
      if(data.pageSize && data.pageNum) {
        const total = await User.aggregate(aggregate.slice(0, 1));
        responseObj.total = total.length
      }
    }
  } catch (err) {
    console.log(err)
  }
  return res.status(responseObj.status).send(responseObj);
};

const update = async (req, res) => {
  let responseObj = {
    status: httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
    message: httpCode.getReasonPhrase(httpCode.StatusCodes.INTERNAL_SERVER_ERROR),
    data: {}
  };
  try {
    let data = {...req.body};
    let { _id } = {...req.body};
    if(!_id) {
      throw "ID is not defined";
    }
    let removeUser = await User.findOneAndUpdate({_id}, {$set:data}, {new: true,});
    if (removeUser) {
      responseObj = {
        status: httpCode.StatusCodes.OK,
        message: httpCode.getReasonPhrase(httpCode.StatusCodes.OK),
        data: removeUser
      };
    }
  } catch (err) {
    console.log(err)
  }
  return res.status(responseObj.status).send(responseObj);
};


const remove = async (req, res) => {
  let responseObj = {
    status: httpCode.StatusCodes.INTERNAL_SERVER_ERROR,
    message: httpCode.getReasonPhrase(httpCode.StatusCodes.INTERNAL_SERVER_ERROR),
    data: {}
  };
  try {
    let { _id } = {...req.query};
    if(!_id) {
      throw "ID is not defined";
    }
    let removeUser = await User.findOneAndRemove({_id});
    if (removeUser) {
      responseObj = {
        status: httpCode.StatusCodes.OK,
        message: httpCode.getReasonPhrase(httpCode.StatusCodes.OK),
        data: removeUser
      };
    }
  } catch (err) {
    console.log(err)
  }
  return res.status(responseObj.status).send(responseObj);
};

module.exports = {
  create,
  retrieve,
  update,
  remove
};
