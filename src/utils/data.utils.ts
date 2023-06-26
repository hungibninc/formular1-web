//  we're essentially saying, getData is going to receive some type T, this type T is what you're going to return from this function inside of a promise.

const URL_API = 'http://localhost:3000/';
export const now = new Date();

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(URL_API + url);
  return await response.json();
};

export const getGrandPrix = async <T>(
  year = now.getFullYear(),
  name: string
): Promise<T> => {
  const url = URL_API + '?year=' + year;
  const response = await fetch(url);
  return await response.json();
};

export const getRanking = async <T>(
  year = now.getFullYear(),
  name?: string
): Promise<T> => {
  const url =
    URL_API +
    (name
      ? 'standings/ranking?year=' + year + '&grand_name=' + name
      : 'standings?year=' + year);

  console.log(url);
  const response = await fetch(url);
  return await response.json();
};
