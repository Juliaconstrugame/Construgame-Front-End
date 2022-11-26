import Image from "next/image";
import Template from "../../src/components/Elements/Template";
import Layout from "../../src/components/Layout";

export const getServerSideProps = async ({ query }) => ({
  props: { id: query.id, name: query.name, company: query.company },
});

export default function Awards({ name, id, company }) {
  console.log(name, id, company);
  return (
    <Layout title="Prêmios">
      <Template name={name} id={id} company={company}>
        <Image
          src="/images/awards.png"
          width="1417"
          height="1317"
          quality="100"
          // alt="Welcome Image"
        />
      </Template>
    </Layout>
  );
}
