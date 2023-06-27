export type Option = {
  label: string;
  value: string;
};

export type GrandPrix = {
  grand_prix: string;
};

export type Driver = {
  driver: string;
};

export type Team = {
  team: string;
};

export type Ranking = {
  grand_prix: string;
  racing_date: string;
  driver: string;
  team: string;
  laps: number;
  time_retire: string;
};

export type RankingGrandPrix = {
  position: string;
  license_plate: string;
  driver: string;
  team: string;
  laps: number;
  time_retire: string;
  points: string;
};

export type DriverStanding = {
  driver: string;
  nationality: string;
  team: string;
  points: string;
};

export type DriverStandingDetail = {
  grand_prix: string;
  racing_date: string;
  team: string;
  position: string;
  points: string;
};

export type TeamStanding = {
  team: string;
  points: string;
};

export type TeamStandingDetail = {
  grand_prix: string;
  racing_date: string;
  points: string;
};
