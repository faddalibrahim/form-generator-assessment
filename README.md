# Dynamic Form Generator

This is a dynamic form generator system designed to create flexible, customizable forms with various field types and validations without writing additional code.

The main component is `EditForm` where you define the form structure declaratively and it handles the rendering validation and data collection. You can create entirely differenr forms just by changeing the configuration object (passed as props to the component)

A versatile form renderer that can display different types of input fields based on configuration.

## Features

- **Declarative Configuration**: Define your entire form structure in a single configuration object and pass it as props to the `EditForm` component
- **Multiple Field Types**: Support for over 10 different input types
- **Built-in Validation**: Comprehensive validation system with error handling
- **Dynamic Lists**: Add or remove items in list fields
- **Responsive Design**: Forms look great on all device sizes
- **Extensible**: Easy to extend with new field types and validations

## Field Types

The system supports numerous input types including:

| Field Type     | Description                        |
| -------------- | ---------------------------------- |
| Text           | Standard text input                |
| TextArea       | Multi-line text input              |
| Select         | Dropdown selection                 |
| Date           | Date picker                        |
| Radio          | Radio button group                 |
| Checkbox       | Single checkbox                    |
| TextList       | Dynamic list of text inputs        |
| DoubleTextList | Dynamic list of paired inputs      |
| Address        | Complete address form              |
| File           | File upload                        |
| Photo          | Image upload with preview          |
| ProfilePhoto   | Profile image upload with cropping |
| FilePhoto      | Multiple image uploads             |
| Article        | Rich text editor                   |
| Showcase       | Portfolio showcase                 |

## Example

In the example below we are creating a user registration form featuring `firstname`, `email`, `bio`, `terms acceptance` with their appropriate types and validation requirements.

Also adding a `title`, `description` to the form

`editEntries` defines the components
`entityObj` defines the initial values for the form

```ts
import { EditEntryType, ValidationType } from "../types/formTypes";

export const registrationFormConfig = {
  title: "User Registration",
  description: "Please fill out the form below to create your account",
  editEntries: [
    {
      attribute: "firstName",
      attributeName: "First Name",
      type: EditEntryType.Text,
      isRequired: true,
      validations: [
        ValidationType.RequiredField,
        ValidationType.TextLengthBelow50,
      ],
    },
    {
      attribute: "email",
      attributeName: "Email Address",
      type: EditEntryType.Text,
      isRequired: true,
      validations: [ValidationType.RequiredField, ValidationType.Email],
    },
    {
      attribute: "bio",
      attributeName: "About You",
      subName: "Tell us a little about yourself",
      type: EditEntryType.TextArea,
      isRequired: false,
      validations: [ValidationType.TextLengthBelow300],
    },
    {
      attribute: "termsAccepted",
      attributeName: "Terms and Conditions",
      subName: "I agree to the terms and conditions",
      type: EditEntryType.Checkbox,
      isRequired: true,
      validations: [ValidationType.CheckboxChecked],
    },
  ],
  entityObj: {
    firstName: "",
    email: "",
    bio: "",
    termsAccepted: false,
  },
};
```

```ts
import { EditForm } from "./components/EditForm";
import { registrationFormConfig } from "./config/formConfig";

function App() {
  return (
    <EditForm
      {...registrationFormConfig}
      onSubmitSuccess={(entity) => {
        console.log("Form submitted:", entity);
      }}
    />
  );
}
```
