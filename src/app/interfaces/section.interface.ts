export interface SectionInterface {
  status: string;
  copyright: string;
  num_results: number;
  results: {
    section: string;
    display_name: string;
  }[];
}
