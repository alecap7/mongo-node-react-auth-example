const GET = "GET";

const POST = "POST";

const PUT = "PUT";

const DELETE = "DELETE";

const handleResponseStatus = response => {
  if (!response.status) {
    throw Error(
      JSON.stringify({
        status: response.code,
        statusText: response.message
      })
    );
  }

  if (!response.ok) {
    throw Error(
      JSON.stringify({
        status: response.status,
        statusText: JSON.parse(response.statusText)
      })
    );
  }

  return response;
};

const handleResponsePayload = response => {
  return response.json().then(data => {
    const { status, statusText } = response;
    return { ok: status === 200, errors: statusText, data };
  });
};

const handleResponseError = error => {
  error = JSON.parse(error.message);
  return { ok: error.status === 200, errors: error.statusText };
};

const httpService = ({ url, method, body, token }) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  if (token) headers.Authorization = "Bearer " + token;

  return (
    fetch(url, {
      headers,
      method,
      body
    })
      .then(handleResponseStatus)
      // use response of network on fetch Promise resolve
      .then(handleResponsePayload)
      // handle fetch Promise error
      .catch(handleResponseError)
  );
};

module.exports = { GET, POST, PUT, DELETE, httpService };
