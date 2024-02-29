  const response = await fetch("http://localhost:8000/" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });