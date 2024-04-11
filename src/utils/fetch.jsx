export async function fetchGET(url) {
  try {
    const response = await fetch("http://localhost:8000/" + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    if (!result["success"]) throw new Error("Internal Server Error");
    return result;
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error);
  }
}

export async function fetchPOST(url, body) {
  console.log(url);
  try {
    const response = await fetch("http://localhost:8000/" + url, {
      method: "POST",
      body: JSON.stringify({
        content: body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    console.log(result);
    if (!result["success"]) throw new Error("Internal Server Error");
    return result;
  } catch (error) {
    console.log("There was a problem with the fetch operation:", error);
  }
}
