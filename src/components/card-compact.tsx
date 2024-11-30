import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

type CardCompactProps = {
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

const CardCompact = ({
  title,
  description,
  content,
  className,
  footer,
}: CardCompactProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription className="pl-6 pb-4">{description}</CardDescription>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export { CardCompact };
