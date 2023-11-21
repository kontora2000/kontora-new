export interface Step {
  id: string | number;
  header: string;
  description: string;
  divider: {
    bottom: boolean;
    right: boolean;
    tabletHidden: boolean;
  };
}

export type Steps = Step[];
