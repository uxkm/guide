export default function PageIntro({ title, lead }) {
  return (
    <div className="page_intro">
      <h1>{title}</h1>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
