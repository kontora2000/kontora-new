export interface ListItem {
  id: string | number;
  title: string | null;
  accent: string;
  isNew: boolean;
}

export type List = ListItem[];
