import EditableText from "./EditableText";

export default function JobExperience() {
  return (
    <>
      <span className="company-and-years-line">
        <EditableText
          label="Company Name:"
          initialText="Company Name"
          textClass="company-name"
          component="p"
        />
        <EditableText
          label="Years worked:"
          initialText="2018-2024"
          textClass="years-worked"
          component="p"
        />
      </span>
      <EditableText
        label="Position:"
        initialText="Frontend Developer"
        textClass="position"
        component="p"
      />
      <ul className="responsibilities">
        <EditableText
          label="Responsibility:"
          initialText="Developed web applications using JavaScript, React, and Node.js."
          textClass="responsibility-item"
          component="li"
        />
        <EditableText
          label="Responsibility:"
          initialText="Collaborated with cross-functional teams to define project
            requirements and deliverables."
          textClass="responsibility-item"
          component="li"
        />
        <EditableText
          label="Responsibility:"
          initialText="Implemented responsive design and ensured cross-browser
            compatibility."
          textClass="responsibility-item"
          component="li"
        />
      </ul>
    </>
  );
}
