import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import { useFormStore } from "@/store/formStore";

export default function AddPostForm() {
    const { stepVisible } = useFormStore();

    const steps = [
        <Step1 key={1} />,
        <Step2 key={2} />,  
        <Step3 key={3} />,
        <Step4 key={4} />,
    ];
    return (
        <div className="h-fit bg-white m-4 rounded-lg p-4 ">
            {steps[stepVisible - 1]}
        </div>
    );
}