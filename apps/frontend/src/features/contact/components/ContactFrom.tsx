import { Button } from "@/components/Elements";

export const ContactForm = (): JSX.Element => {
  return (
    <form>
      <div className="w-3/5 m-auto">
        <Button label="送信" color="primary" fullWidth />
      </div>
    </form>
  );
};
