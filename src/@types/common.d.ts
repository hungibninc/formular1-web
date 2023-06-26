export type GrandPrix = {
  grand_prix: string;
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

export type Option = {
  label: string;
  value: string;
};
