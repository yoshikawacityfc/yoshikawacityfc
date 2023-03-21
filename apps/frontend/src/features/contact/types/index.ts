export type ContactType = "contact" | "school" | "jr-youth";

export interface ContactTemplate {
  type: ContactType;
  template: string;
}
