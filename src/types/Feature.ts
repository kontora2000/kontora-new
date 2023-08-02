export type Feature = {
  header?: string | null;
  caption: string;
  classes: {
    feature?: string;
    header?: string;
    caption: string;
  };
};

export type Features = Feature[];
