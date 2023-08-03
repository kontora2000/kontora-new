export interface Chip {
  id: string | number;
  double: boolean;
  title: {
    top: string;
    bottom?: string;
  };
  accent: {
    top?: string | null;
    bottom?: string | null;
  };
  classes: {
    top: string;
    bottom?: string;
  };
}

export type Chips = Chip[];
