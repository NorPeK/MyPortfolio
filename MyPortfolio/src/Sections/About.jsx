import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const [hasCopiedNumber, setHasCopiedNumber] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("norpekbusiness@hotmail.com");
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    }

    const handleCopy2 = () => {
        navigator.clipboard.writeText("+966 533 199 759");
        setHasCopiedNumber(true);
        setTimeout(() => setHasCopiedNumber(false), 2000);
    }

  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/norpek.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div> 
                        <p className="grid-headtext">Hi, I'm Nour-Allah</p>
                        <p className="grid-subtext" style={{ textAlign: "justify" }}>I am a passionate and dedicated professional with a background in Computer Science and a drive for innovation. From leading collaborative projects to crafting impactful solutions, I excel at combining creativity and technical expertise to tackle challenges and deliver value. One of my proudest achievements includes developing "Baserah" a smart stick designed to empower visually impaired individuals. I thrive in dynamic environments where I can contribute to meaningful projects and continuously grow through learning and experimentation. Let’s create something exceptional together!</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/norpekGroup.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext" >My Passion For Coding</p>
                        <p className="grid-subtext" style={{ textAlign: "justify" }}>
                            <p>Coding, for me, is more than just a skill, it's a creative outlet and a means to solve real-world problems. Each project I take on feels like piecing together a puzzle, where the challenges and complexities are part of the thrill. I love the process of turning an idea into something tangible, something functional, and knowing that what I build can make a difference.</p>
                            <p>I thrive on learning and growing through every challenge I face. Whether it's troubleshooting an issue, optimizing a solution, or exploring new concepts, every step adds to my journey.</p>
                            <p>Collaboration is another aspect of coding that excites me. I enjoy working alongside others, sharing ideas, and learning from different perspectives.</p>
                            <p>Ultimately, coding is my way of contributing to the world. It's how I channel my curiosity, creativity, and problem-solving into something meaningful. Each project feels like a step forward, not just for my skills but for the impact I can create through my work.</p>
                        </p>
                    </div>
               </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                            height={326}
                            width={326}
                            backgroundColor="rgba(0,0,0,0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 26.30506126517065, lng: 50.21354037832867,
                                text: "I'm Here!",
                                size: 1000,
                            }]} 
                            labelColor={() => "red"}
                            pointsData={[
                                {
                                  lat: 26.30506126517065,
                                  lng: 50.21354037832867,
                                  size: 0.25, // Size of the point
                                  color: "red", // Color of the point
                                },
                              ]}
                            pointColor="color" // Bind the color for points
                            //pointAltitude={() => 0.01} // Raise the point slightly above the globe
                            pointRadius="size" // Bind the size for points
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">I'm Available To Work Across Any Timezone.</p>
                        <p className="grid-subtext">I'm based in Saudi-Arabia with available work on-site anywhere in the Eastern Provinence, with remote work available anywhere in the world!</p>
                        <a href="#contact" className="w-full mt-10">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </a>

                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/techStack.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div >
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                            <p>
                                As a versatile developer and data enthusiast, I work across a wide range of technologies, enabling me to build robust applications and handle complex challenges in both software and hardware domains.
                            </p>

                            <h2><b>Frontend Development:</b></h2>
                            <p>
                                - React.js (including React 19) - Vite - Next.js (including Next.js 15) - TailwindCSS - Figma
                            </p>

                            <h2><b>Backend Development:</b></h2>
                            <p>
                                - Node.js (Express) - MongoDB - Firebase - Sanity - Expo - Appwrite
                            </p>

                            <h2><b>Mobile Development:</b></h2>
                            <p>
                                - Flutter - React-Native
                            </p>

                            <h2><b>Authentication and Deployment:</b></h2>
                            <p>
                                - NextAuth - Vercel - Render
                            </p>

                            <h2><b>Hardware and Embedded Systems:</b></h2>
                            <p>
                                - Arduino IDE (ESP32) - C++
                            </p>

                            <h2><b>Data Handling and Visualization:</b></h2>
                            <p>
                                - Pandas - Regex - Excel - Seaborn - Matplotlib
                            </p>

                            <h2><b>Version Control and Collaboration:</b></h2>
                            <p>
                                - GitHub - Git
                            </p>

                            <h2><b>Web Scraping:</b></h2>
                            <p>
                                - Selenium - BeautifulSoup4 - Google Chrome scraping extension
                            </p>

                            <h2><b>Document Processing:</b></h2>
                            <p>
                                - PyPDF - Tabula - Fitz
                            </p>

                            <h2><b>Programming Languages:</b></h2>
                            <p>
                                - Dart - JavaScript - Python - C++
                            </p>
                            <h2><b>Cloud & IT:</b></h2>
                            <p>
                                - HCCDA Tech Essentials - iVMS Camera Management
                            </p>
                        </p>
                    </div>
                </div>
            </div>                  

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me through my phone number or my email address.</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">norpekbusiness@hotmail.com</p>
                        </div>
                        <div className="copy-container" onClick={handleCopy2}>
                            <img src={hasCopiedNumber ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">+966 533 199 759</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About