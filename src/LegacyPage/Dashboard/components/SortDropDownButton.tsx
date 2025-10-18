import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SortCategoryType } from "@/type/PostList";

export interface SortDropDownButtonProps {
    categories: SortCategoryType[];
    selectedCategory: SortCategoryType;
    setSelectedCategory: (category: SortCategoryType) => void;
}

export default function SortDropDownButton({ categories, selectedCategory, setSelectedCategory }: SortDropDownButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <span>Sort by:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{selectedCategory.label}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {categories.map((category) => (
            <DropdownMenuItem
              key={category.value}
              onClick={() => setSelectedCategory(category)}
            >
              {category.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
