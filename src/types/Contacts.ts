export interface Link {
  id: string | number;
  title: string;
  link: string;
}

export interface Contact {
  id: string | number;
  header: string;
  content: Array<Link>;
}

export type ContactBlock = Contact[];
