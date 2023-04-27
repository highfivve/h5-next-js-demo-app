import { AdSlotClientSide } from "~/components/AdSlotClientSide";
import { Card } from "~/components/Card";

export const metadata = {
  title: "Server Side page",
  description: "page from the app directory",
};
const PrivacyPage: React.FC = () => {
  console.log("rendered!");
  return (
    <div className="flex flex-wrap gap-4">
      <Card title="static div">
        <div id="h5v_content_2"></div>
      </Card>
      <Card title="AdSlotClientSide component">
        <AdSlotClientSide id="h5v_content_1" />
      </Card>
    </div>
  );
};

export default PrivacyPage;
