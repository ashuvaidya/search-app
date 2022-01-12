export const search = async (searchString, setIsLoading) => {
  try {
    setIsLoading(true);
    const req = await fetch("http://localhost:8080/api/search", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        searchTerm: searchString,
      }),
    });
    const response = await req.json();
    if (response.error) {
      throw response.error;
    }
    setIsLoading(false);
    return response;
  } catch (error) {
    setIsLoading(false);
    console.error(error);
  }
};
