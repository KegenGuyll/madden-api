export type Teams = {
  _id: string;
  abbrName: string;
  cityName: string;
  defScheme: number;
  displayName: string;
  divName: string;
  injuryCount: number;
  logoId: number;
  nickName: string;
  offScheme: number;
  ovrRating: number;
  primaryColor: number;
  secondaryColor: number;
  teamId: number;
  userName: string;
};

export interface ITeamResponse {
  body: Teams;
  success: boolean;
}

export interface IGetTeamQuery {
  include_players?: boolean;
  include_standings?: boolean;
  include_stats?: boolean;
}

export interface IGetLastGameQuery {
  include_player_stats?: boolean;
  include_teams?: boolean;
}

export type DataType =
  | "passing"
  | "rushing"
  | "kicking"
  | "punting"
  | "defense"
  | "receiving";

export interface IGetTeamLeaders {
  include_teams?: boolean;
  seasonIndex: number;
  season_type?: "reg" | "pre";
  sort_by?: string;
}
