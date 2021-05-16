



useEffect(() => {
  fetch('https://www.balldontlie.io/api/v1/teams')
    .then(response => {
      if (response.ok) {
      return response.ok;
      }
      throw response; 
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("error fetching data", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
  })
}, [])




