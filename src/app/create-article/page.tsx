import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import ArticleForm from "./_components/ArticleForm";

type Props = {};
const Page = (props: Props) => {
  return (
    <div className="flex min-h-screen flex-col px-10 xl:px-20">
      <Navbar className="w-full " variant="secondary" />

      <div className="mt-12 grow">
        <h1 className="text-balance text-left text-5xl font-extrabold lg:text-6xl">
          Create a new article
        </h1>

        <ArticleForm className="mt-8" />
      </div>
    </div>
  );
};
export default Page;
