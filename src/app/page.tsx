import PrimaryButton from "@/components/atoms/button/PrimaryButton";
import H1TextField from "@/components/atoms/textField/H1Text";
import { IconReplaceFilled } from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <H1TextField text="Dealls Technical Test" alignText="center" />
      <PrimaryButton
        title="Login"
        href="/superadmin"
        icon={<IconReplaceFilled />}
        focus={false}
      />
    </div>
  );
};

export default Home;
