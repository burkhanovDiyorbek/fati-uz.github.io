import PageTop from "../../components/PageTop/PageTop";

export const OrganizationStructure = () => {
  return (
    <section>
      <PageTop data={{ h2: "organization-structure" }} />
      <div className="container">
        <img src="./assets/structure.jpg" alt="img" style={{maxWidth:"100%"}}/>
      </div>
    </section>
  );
};
