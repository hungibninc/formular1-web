//  we're essentially saying, getData is going to receive some type T, this type T is what you're going to return from this function inside of a promise.

const URL_API = 'https://formula1-api-production.up.railway.app/';
export const now = new Date();

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(URL_API + url);
  return await response.json();
};

export const getGrandPrix = async <T>(year = now.getFullYear()): Promise<T> => {
  const url = URL_API + '?year=' + year;
  const response = await fetch(url);
  return await response.json();
};

export const getDriver = async <T>(year = now.getFullYear()): Promise<T> => {
  const url = URL_API + 'driver?year=' + year;
  const response = await fetch(url);
  return await response.json();
};

export const getTeam = async <T>(year = now.getFullYear()): Promise<T> => {
  const url = URL_API + 'team?year=' + year;
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

  const response = await fetch(url);
  return await response.json();
};

export const getDriverStanding = async <T>(
  year = now.getFullYear(),
  name?: string
): Promise<T> => {
  const url =
    URL_API +
    (name
      ? 'standings/driver?year=' + year + '&driver_name=' + name
      : 'standings/ranking?year=' + year);
  const response = await fetch(url);
  return await response.json();
};

export const getTeamStanding = async <T>(
  year = now.getFullYear(),
  name?: string
): Promise<T> => {
  const url =
    URL_API +
    (name
      ? 'standings/team?year=' + year + '&team=' + name
      : 'standings/team?year=' + year);
  const response = await fetch(url);
  return await response.json();
};
