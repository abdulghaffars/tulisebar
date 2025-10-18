import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function CustomInput({label, type, id, placeholder, value, onChange}: {label: string, type: string, id: string, placeholder: string, value: string, onChange: (value: string) => void}) {
    return (
        <div className={cn("grid w-full items-center gap-3")}>
          <Label htmlFor={id}>{label}</Label>
          <Input type={type} id={id} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}