import { formatPrice } from "@/lib/format";

interface PriceTageProps {
  price: number;
  className?: string;
}
export default function PriceTag({ price, className }: PriceTageProps) {
  return <span className={"badge ${className}"}>{formatPrice(price)}</span>;
}
