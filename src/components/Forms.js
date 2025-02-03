import { useParams } from "react-router-dom";

const Forms = () => {
  const { form_title } = useParams();
  const projectId = process.env.REACT_APP_PROJECT_ID;
  return (
    <div className=" overflow-hidden w-screen h-screen">
      {/* {form_title} */}
      <iframe
        className=" w-full h-full overflow-hidden"
        src={`https:/form.ricoz.in/projects/${projectId}/form/by-title/${form_title}`}
      ></iframe>
    </div>
  );
};

export default Forms;