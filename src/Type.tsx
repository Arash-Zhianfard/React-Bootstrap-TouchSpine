export interface TouchSpinProps {
  signAlignment?: Alignment;
  sign?:string;
  initValue?:number;
  step?:number
  min?:number;
  max?:number;
  size?:BsSize;
  decimals?: number;
  counterHandler: (e:  number) => void;
}
export enum Alignment {
  Right = 1,
  Left,
}
export enum BsSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",  
}
