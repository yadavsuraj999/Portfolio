import Navdetail from "./Navdetail";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Certificate = () => {
    const certificates = [
        { certificateImg: "/images/tech-war.png" },
        { certificateImg: "/images/css-certificate.png" },
        { certificateImg: "/images/certificate.jfif" },
        { certificateImg: "/images/certificate.jfif" },
    ];

    return (
        <div className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60">
            <section id="certifications">
                <div className="container mx-auto px-8">
                    <div className="mb-10 relative">
                        <Navdetail
                            title="Certifications"
                            des="Passionate developer building innovative solutions and solving real-world problems."
                        />
                    </div>

                    <div className="py-12 px-4">
                        <div className="max-w-7xl mx-auto">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                effect="coverflow"
                                // pagination={{ clickable: true }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                modules={[Autoplay, EffectCoverflow, Pagination]}
                            >
                                {certificates.map((cert, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-[#8750f7] rounded-2xl p-4 shadow-lg h-full flex flex-col justify-between">
                                            <div className="w-full h-60 sm:h-72 md:h-72 lg:h-80 overflow-hidden rounded-xl">
                                                <a
                                                    href={cert.certificateImg}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src={cert.certificateImg}
                                                        alt={`Certificate ${idx + 1}`}
                                                        className="object-cover w-full h-full rounded-xl"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Certificate;
