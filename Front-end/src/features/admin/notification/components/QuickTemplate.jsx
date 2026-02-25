import BoxWrapper from "../../../../components/ui/BoxWrapper";
import QuickTemplates from "./Send/QuickTemplates";

export default function QuickTemplate({ handleSelectTemplate }) {
  return (
    <div className="mt-6">
      <BoxWrapper title="Template Cepat">
        <QuickTemplates handleSelectTemplate={handleSelectTemplate} />
      </BoxWrapper>
    </div>
  );
}
