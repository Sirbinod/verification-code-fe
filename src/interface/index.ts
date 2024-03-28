export interface FormInput {
  type?: string;
  name?: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
}
