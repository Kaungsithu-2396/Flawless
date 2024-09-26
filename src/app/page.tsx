import dynamic from "next/dynamic";
import Image from "next/image";
import Carousel from "../../components/pages/Home/Carousel";
import Nav from "../../components/Nav";
export default function Home() {
    return (
        <>
            <Carousel />
            <section className="my-5 h-screen ">
                <h1 className="text-center  text-xl mt-3 mb-5 md:text-3xl font-bold">
                    Our <br /> <span>Collections</span>
                </h1>
                <div className="  md:w-4/5 m-auto">
                    <div className="flex flex-col gap-4 justify-center items-center bg-[#f5f4f4] ">
                        <Image
                            src={"/category.png"}
                            width={150}
                            height={100}
                            alt="Image for product"
                        />
                        <p className="font-bold text-xl">Rings</p>
                        <p className="font-bold text-xl underline underline-offset-2">
                            Explore More
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
