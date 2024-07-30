const createResponse = ({ data = null, error = null, message = null }) => {
    const status = (data || message) ? true : false;
    const response = { status };
    if (data !== null) response.data = data;
    if (error !== null) response.error = error;
    if (message !== null) response.message = message;
    return response;
  };
  
  module.exports = { createResponse };