import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const images = [
  { src: "/gallery/product-1.jpg", alt: "Produtos de embalagem e descartáveis" },
  { src: "/gallery/product-2.jpg", alt: "Produtos de limpeza e higiene" },
  { src: "/gallery/product-3.jpg", alt: "Papel higiênico e toalhas" },
  { src: "/gallery/product-4.jpg", alt: "Variedade de produtos" },
  { src: "/gallery/product-5.jpg", alt: "Produtos de limpeza profissional" },
  { src: "/gallery/product-6.jpg", alt: "Detergentes e produtos de limpeza" },
  { src: "/gallery/product-7.jpg", alt: "Estoque de embalagens" },
  { src: "/gallery/product-8.jpg", alt: "Variedade completa de produtos" },
  { src: "/gallery/product-9.jpg", alt: "Loja Alternativa Embalagens" },
];

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa variedade de produtos para o seu negócio
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] max-h-[95vh] sm:max-w-6xl p-2 sm:p-4 overflow-auto">
                      <div className="flex items-center justify-center">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
