export interface AdvisorProfile {
  position: string;
  name: string;
  id: any;
  description: string;
  assets?: {
    src: string;
    file_name: string;
  } | null;
}
