import BlogSection from "@/components/blogSection";
import Section from "@/components/section";
import SubPageHeader from "@/components/subPageHeader";
import { getPosts } from "@/utils/getPosts";

const SubPage = async () => {
  const posts = await getPosts();
  return (
    <>
      <SubPageHeader
        title="Blog"
        claim="Co je nového v ANTIKORU"
        description="Vítejte v našem blogovém archivu. Sledujte, jak naše firma roste a vyvíjí se spolu s námi. Najdete zde novinky, aktuality a zajímavosti z našeho působení."
      />
      <Section adaptiveHeight>
        <BlogSection posts={posts} />
      </Section>
    </>
  );
};

export default SubPage;
