export const fetchData = async (api, setLoading, setData) => {
  const res = await fetch(api);
  const data = await res.json();
  setData(data);
  setLoading(false);
};
