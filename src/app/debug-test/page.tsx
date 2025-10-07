import { SimpleBento } from "@/components/sections/simple-bento";
import { services } from "@/lib/constants";

export default function DebugTestPage() {
  return (
    <div className="min-h-screen">
      <SimpleBento services={services} />
    </div>
  );
}
