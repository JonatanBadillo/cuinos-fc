export interface Player {
  id: number;
  name: string;
  position: string;
  goals: number;
  image: string;
  number: number;
  nationality: string;
}

export interface TeamStats {
  totalPlayers: number;
  totalGoals: number;
  topScorer: Player;
}