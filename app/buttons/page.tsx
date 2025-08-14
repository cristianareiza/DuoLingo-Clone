import { Button } from "@/components/ui/button";

export default function ButttonPage() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="primary-outline">primary outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondary-outline">secondary-outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-outline">Danger-outline</Button>
      <Button variant="super">super</Button>
      <Button variant="super-outline">super-outline</Button>
    </div>
  );
}
