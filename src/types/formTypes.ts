export const EditEntryType = {
  Text: "Text",
  TextList: "TextList",
  DoubleTextList: "DoubleTextList",
  TextArea: "TextArea",
  File: "File",
  Address: "Address",
  Photo: "Photo",
  ProfilePhoto: "ProfilePhoto",
  FilePhoto: "FilePhoto",
  Radio: "Radio",
  Checkbox: "Checkbox",
  Article: "Article",
  Date: "Date",
  Select: "Select",
  Showcase: "Showcase",
  PillList: "PillList",
};

export const ValidationType = {
  Email: "Email",
  PhoneNumber: "PhoneNumber",
  UserName: "UserName",
  CheckboxChecked: "CheckboxChecked",
  RequiredField: "RequiredField",
  TextLengthBelow30: "TextLengthBelow30",
  TextLengthBelow50: "TextLengthBelow50",
  TextLengthBelow100: "TextLengthBelow100",
  TextLengthBelow200: "TextLengthBelow200",
  TextLengthBelow300: "TextLengthBelow300",
  TextLengthBelow400: "TextLengthBelow400",
  Number: "Number",
  Price: "Price",
  PillList: "PillList",
};

export interface EditEntry {
  attribute: string;
  attributeName: string;
  type: (typeof EditEntryType)[keyof typeof EditEntryType];
  isRequired: boolean;
  validations?: Array<(typeof ValidationType)[keyof typeof ValidationType]>;
  extraParam?: unknown;
  condition?: boolean;
  subName?: string;
  info?: string;
  options?: string[];
  characterCount?: number;
}

export interface EditFormProps {
  title: string;
  description: string;
  editEntries: EditEntry[];
  entityObj: unknown;
  onSubmitSuccess: (entity: unknown) => void;
  buttonText?: string;
}
