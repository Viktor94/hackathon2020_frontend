export default function authHeader() {
  const userData = JSON.parse(JSON.stringify(localStorage));

  if (userData && userData.token) {
    return { Authorization: 'Bearer ' + userData.token.slice(1, -1) };
  } else {
    return {};
  }
}