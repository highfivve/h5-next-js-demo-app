import { AdSlotClientSide } from "~/components/AdSlotClientSide";
import { Card } from "~/components/Card";

export const metadata = {
  title: "Server Side page",
  description: "page from the app directory",
};
const PrivacyPage: React.FC = () => {
  console.log("rendered!");
  return (
    <div className="flex gap-4">
      <Card>A static ad slot</Card>
      <Card>
        <AdSlotClientSide id="h5v_content_1" />
      </Card>
    </div>
  );
};

export default PrivacyPage;
