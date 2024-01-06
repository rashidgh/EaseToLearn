import sha256 from "crypto-js/sha256";

export async function login(email, password) {
  const hashedPassword = sha256(password).toString();

  const payload = {
    username: email,
    password: hashedPassword,
    grant_type: "password",
  };

  try {
    const response = await fetch(
      "https://apiv2stg.promilo.com/user/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Invalid credentials or failed to log in");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to connect to the server");
  }
}
