import { CarouselItem, CarouselItemType } from "./CarouselItem";
interface Props {
  items: CarouselItemType[];
}

function Carousel({ items }: Props) {
  return (
    <>
      <div className="w-100 h-96 border-2 border-[var(--primary_colour)]">
        {items.map((item: CarouselItemType) => {
          return <CarouselItem item={item} />;
        })}
      </div>
    </>
  );
}

export default Carousel;
