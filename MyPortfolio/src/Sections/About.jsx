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
                    <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div> 
                        <p className="grid-headtext">Hi, I'm Nour-Allah</p>
                        <p className="grid-subtext">With 12 years of experience, I have honed my skills in frontend and backend development with a focus on 3d development.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems</p>
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
                        <p className="grid-headtext">My Passion For Coding</p>
                        <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession, it is also my passion.</p>
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