export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

export interface LangaugeOption {
  readonly value: string;
  readonly label: string;
}

export const languageOptions: readonly LangaugeOption[] = [
  {label:"Typescript",value:"Typescript" },
  {label:"PHP",value:"PHP" },
  {label:"Rust",value:"Rust" },
  {label:"Java",value:"Java" },
  {label:"Csharp",value:"C#" },
  {label:"CPlusPlus",value:"C++" },
  {label:"Kotlin",value:"Kotlin" },
  {label:"Dart",value:"Dart" },
  {label:"Python",value:"Python" },
  {label:"Go",value:"Go" },
  {label:"Swift",value:"Swift" },
  {label:"ObjectiveC",value:"Objective-C" },
  {label:"C",value:"C" },
  {label:"Scala",value:"Scala" },
  {label:"Ruby",value:"Ruby" },
];
