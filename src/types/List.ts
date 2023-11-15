export interface ListItem {
  id: string | number;
  title: string;
  isNew: boolean;
}

export type List = ListItem[];
