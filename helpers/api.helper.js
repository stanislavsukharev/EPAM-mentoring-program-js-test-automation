const axios = require("axios");
const { TEST_URL } = require("../config/endpoints")

const sendRequest = async (url, data = null, method = "get") => {
  try {
    const response = await axios({
      method,
      url: `${TEST_URL}/${url}`,
      headers: {},
      data
    });
    return {
      status: response.status,
      data: response.data,
      statusText: response.statusText
    };
  } catch (error) {
    return {
      status: error.response.status,
      statusText: error.response.statusText,
      response: error.response
    };
  }
};

module.exports = {
  sendRequest
};

