export interface ContactLink {
  id: string | number;
  title: string;
  link: string;
}

export interface Contact {
  id: string | number;
  header: string;
  content: Array<ContactLink>;
}

export type Contacts = Contact[];
