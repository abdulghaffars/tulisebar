import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStore } from "@/store/formStore";
import useSidebarStore from "@/store/sidebarStore";
import { X } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  status: "completed" | "active" | "pending";
}

export default function AddPostSidebar() {
  const { setStepVisible, currentStep } = useFormStore();

  const { isSidebarMenuOpen, toggleSidebarMenu } = useSidebarStore();

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      setStepVisible(step);
    }
  };

  const steps: Step[] = [
    {
      id: 1,
      title: "Step 1",
      description: "Blog Title",
      status:
        currentStep === 1
          ? "active"
          : currentStep > 1
          ? "completed"
          : "pending",
    },
    {
      id: 2,
      title: "Step 2",
      description: "Blog Summary & Category",
      status:
        currentStep === 2
          ? "active"
          : currentStep > 2
          ? "completed"
          : "pending",
    },
    {
      id: 3,
      title: "Step 3",
      description: "Blog Content",
      status:
        currentStep === 3
          ? "active"
          : currentStep > 3
          ? "completed"
          : "pending",
    },
    {
      id: 4,
      title: "Step 4",
      description: "Review & Submit",
      status: currentStep === 4 ? "active" : "pending",
    },
  ];

  return (
    <div
      className={cn(
        "w-[280px] h-full bg-white border-r border-gray-200 flex-shrink-0",
        "md:relative md:translate-x-0 transition-transform duration-300",
        isSidebarMenuOpen
          ? "fixed top-0 left-0 z-50 translate-x-0"
          : "fixed top-0 left-0 z-50 -translate-x-full md:translate-x-0"
      )}
    >
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Progress Steps
          </h3>
          <Button variant="ghost" size="icon" onClick={toggleSidebarMenu}>
            <X size={20} />
          </Button>
        </div>

        {steps.map((step) => (
          <StepCard
            key={step.id}
            step={step}
            onClick={() => handleStepClick(step.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface StepCardProps {
  step: Step;
  onClick?: () => void;
}

export const StepCard = ({ step, onClick }: StepCardProps) => {
  const { title, description, status } = step;

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full h-auto p-4 flex items-start gap-3 rounded-lg transition-all duration-200",
        "hover:bg-gray-50 focus:bg-gray-50",
        status === "active" &&
          "bg-blue-50 border border-blue-200 hover:bg-blue-100",
        status === "completed" &&
          "bg-green-50 border border-green-200 hover:bg-green-100",
        status === "pending" &&
          "border border-transparent hover:border-gray-200"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
          status === "active" && "bg-blue-600 text-white",
          status === "completed" && "bg-green-600 text-white",
          status === "pending" && "bg-gray-200 text-gray-600"
        )}
      >
        {status === "completed" ? "✓" : step.id}
      </div>

      <div className="flex-1 text-left">
        <h4
          className={cn(
            "text-sm font-semibold",
            status === "active" && "text-blue-900",
            status === "completed" && "text-green-900",
            status === "pending" && "text-gray-700"
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            "text-xs mt-1",
            status === "active" && "text-blue-700",
            status === "completed" && "text-green-700",
            status === "pending" && "text-gray-500"
          )}
        >
          {description}
        </p>
      </div>
    </Button>
  );
};
