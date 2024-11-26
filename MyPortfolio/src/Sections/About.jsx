import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("norpekbusiness@hotmail.com");
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
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
                    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                                       yay
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
                        <p className="grid-headtext">I work remotely across most timezones.</p>
                        <p className="grid-subtext">I'm based in Saudi-Arabia, with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div >
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">
                            <p>
                                As a versatile developer and data enthusiast, I work across a wide range of technologies, enabling me to build robust applications and handle complex challenges in both software and hardware domains.
                            </p>

                            <h2>Frontend Development</h2>
                            <ul>
                                <li>React.js (including React 19)</li>
                                <li>Vite</li>
                                <li>Next.js (including Next.js 15)</li>
                                <li>TailwindCSS</li>
                                <li>Figma</li>
                            </ul>

                            <h2>Backend Development</h2>
                            <ul>
                                <li>Node.js (Express, Nodemon)</li>
                                <li>MongoDB</li>
                                <li>Firebase</li>
                            </ul>

                            <h2>Mobile Development</h2>
                            <ul>
                                <li>Flutter</li>
                            </ul>

                            <h2>Authentication</h2>
                            <ul>
                                <li>NextAuth</li>
                            </ul>

                            <h2>Hardware and Embedded Systems</h2>
                            <ul>
                                <li>Arduino IDE (ESP32)</li>
                                <li>C++</li>
                            </ul>

                            <h2>Data Handling and Visualization</h2>
                            <ul>
                                <li>Pandas</li>
                                <li>Regex</li>
                                <li>Excel</li>
                                <li>Seaborn</li>
                                <li>Matplotlib</li>
                            </ul>

                            <h2>Version Control and Collaboration</h2>
                            <ul>
                                <li>GitHub</li>
                            </ul>

                            <h2>Web Scraping</h2>
                            <ul>
                                <li>Selenium</li>
                                <li>BeautifulSoup4</li>
                                <li>Google Chrome scraping extension</li>
                            </ul>

                            <h2>Document Processing</h2>
                            <ul>
                                <li>PyPDF</li>
                                <li>Tabula</li>
                                <li>Fitz</li>
                            </ul>

                            <h2>Programming Languages</h2>
                            <ul>
                                <li>Dart</li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>C++</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>                  

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">norpekbusiness@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About