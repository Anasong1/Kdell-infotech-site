exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const enteredPassword = body.password;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (enteredPassword && enteredPassword === adminPassword) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ success: false })
  };
};
