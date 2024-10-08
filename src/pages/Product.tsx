import { useParams } from "react-router-dom";
import data from "../productData.json";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import NavBar from "../components/NavBar";
import GalleryWithPickerZoom from "../components/GalleryWithPickerZoom";
import Stars from "../components/Stars"; // Import the Stars component
import TrustedBrandsSlider from "../components/TrustedBrandsSlider";
import D3_Rotate from "../components/D3_Rotate";
import Slider_3d from "../components/Slider_3d";

export default function Product() {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const productId = parseInt(id!, 10);

  const product = data.find((p) => p.id === productId); // Find the product based on the ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavBar />

      <main className="max-w-7xl mx-auto p-6 flex-1 mt-6">
        <section className="flex flex-col md:flex-row place-items-start">
          <aside className="w-full md:w-[70%]">
            <GalleryWithPickerZoom images={product.additionalImages} mainImage={product.image} />
          </aside>

          <article className="w-full md:w-[40%] md:pl-6">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">{product.price}</p>
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-600 mr-2">Rating:</p>
                <Stars rating={product.rating} />
                <p className="text-sm text-gray-600 ml-2">{product.rating} / 5</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Reviews: {product.reviews}</p>
          </article>
        </section>

        <Slider_3d />

        <section className="mt-12">
          <TrustedBrandsSlider />
        </section>

        <section className="hidden md:block">
          <D3_Rotate />
        </section>

        <section className="  mt-8">
          <Accordion />
        </section>
      </main>

      <Footer />
    </div>
  );
}
