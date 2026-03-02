export const HeroSection = () => {
    return (
    <section id="hero" 
        className="relative w-full overflow-hidden"
    >
        <video autoPlay muted loop playsInline 
            className="w-full block">
            <source src="src/assets/HeroVideo.mp4" type="video/mp4" />
        </video>
    </section>)
}