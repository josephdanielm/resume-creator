import EditableText from "./EditableText";

export default function GeneralSection() {
  return (
    <section className="general">
      <EditableText
        label="Name:"
        initialText="John Doe"
        textClass="resume-name"
        component="h2"
      />
      <div className="general-info-line">
        <EditableText
          label="Phone:"
          initialText="(123) 456-7890"
          textClass="phone"
          component="p"
        />
        <span className="bullet">•</span>
        <EditableText
          label="Email:"
          initialText="johndoe@example.com"
          textClass="email"
          component="p"
        />
        <span className="bullet">•</span>
        <EditableText
          label="Location:"
          initialText="Lafayette, Louisiana"
          textClass="location"
          component="p"
        />
      </div>
    </section>
  );
}
