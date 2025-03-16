import "./App.css";
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

export default App;
