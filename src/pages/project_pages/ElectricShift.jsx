import MediaCarousel from "../../components/MediaCarousel";
import { EditorialGrid } from "../../components/EditorialGrid";
import { cld, cldVideo, cldThumb } from "../../lib/cloudinary";

/* ── Media ──────────────────────────────────────────────────────────────── */
const heroMedia = [
    { type: "image", src: cld("card_img_electric_shift", { quality: "original" }) },
    {
        type: "videoFile",
        src: cldVideo("electric_demo", { quality: "original" }),
        thumb: cldThumb("electric_demo"),
    },
    { type: "image", src: cld("concept", { quality: "original" }) },
];

/* Resistor rod screenshots */
const resistorImages = [
    cld("rod1", { quality: "original", width: 500 }),
    cld("rod2", { quality: "original", width: 500 }),
    cld("rod3", { quality: "original", width: 500 }),
];

/* ── Page ───────────────────────────────────────────────────────────────── */

export const ElectricShiftPage = () => (
    <div className="mx-auto max-w-8xl text-left text-foreground overflow-x-hidden">
        <MediaCarousel items={heroMedia} />

        <div className="container pt-6 max-w-5xl px-4 mx-auto">
            <span className="eyebrow">Gameplay · VR · Unity</span>
            <h1 className="t-hero text-7xl mt-2 mb-4">Electric Shift</h1>
            <p className="eyebrow text-foreground/70 mb-8 normal-case">
                Tools:
                <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
                    Unity
                </span>
                <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
                    C#
                </span>
                <span className="eyebrow normal-case text-foreground/70 border border-primary/20 rounded-sm px-2 py-1 ml-2">
                    XR Interaction Toolkit
                </span>
            </p>

            <p className="t-body text-foreground mb-8">
                A single-player VR escape room built in Unity for Meta Quest as part
                of Dr. Fatemeh Jamshidi's VR Lab. The game teaches electrical
                engineering concepts through hands-on puzzles centered around
                conductors and insulators, Ohm's Law, and logic gates.
                <br /><br />
                I designed and developed the Ohm's Law Conveyor Room, where players
                search the environment for resistor rods and build a working
                circuit to control the speed of a conveyor belt. Using Ohm's Law
                (V = I × R), players must find the correct resistance to keep the
                conveyor running smoothly and unlock the exit.
            </p>

            <a
                href="https://github.com/sarabdeen/CPP-VR-Project-Garage"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-14 eyebrow normal-case border border-primary/20 rounded-sm px-4 py-2 text-primary/70 hover:text-primary hover:border-primary/50 transition-colors inline-flex items-center gap-2"
            >
                View on GitHub
            </a>

            <div className="h-px bg-primary/10 mt-6 mb-14" />

            {/* ── 01. Teaching Ohm's Law Through Gameplay ── */}
            <section id="concept" className="mb-14 scroll-mt-8">
                <span className="eyebrow">01</span>
                <h2 className="t-h1 mt-2 mb-5">Teaching Ohm's Law Through Gameplay</h2>
                <p className="t-body mb-8">
                    Most people learn Ohm's Law from a textbook equation. I wanted to
                    turn it into something interactive. Instead of solving for a
                    number on paper, players experiment with real circuit components
                    and immediately see how changing resistance affects the conveyor.
                    Too little resistance sends packages flying, too much stalls the
                    system, and the correct balance unlocks the next room.
                </p>

                <span className="eyebrow block mb-3">Concept & References</span>
                <img
                    src={cld("Concept", { width: 1400 })}
                    className="w-full rounded-sm border border-primary/10 mt-3 mb-2"
                    alt="concept art"
                    loading="lazy"
                    decoding="async"
                />


                <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
                    Industrial and factory references used to ground the conveyor
                    room's visual direction.
                </p>

                <img
                    src={cld("card_img_electric_shift", { width: 1400 })}
                    className="w-full rounded-sm border border-primary/10 mt-3 mb-2"
                    alt="Conveyor room in-game"
                    loading="lazy"
                    decoding="async"
                />
                <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
                    The Ohm's Law Conveyor Room in-game, showing the live voltage,
                    current, and resistance readout.
                </p>
            </section>

            <hr className="border-primary/10 mb-14" />

            {/* ── 02. Finding the Resistor Rods ── */}
            <section id="finding-resistors" className="mb-14 scroll-mt-8">
                <span className="eyebrow">02</span>
                <h2 className="t-h1 mt-2 mb-5">Finding the Resistor Rods</h2>
                <p className="t-body mb-8">
                    Players explore the environment to search and collect resistor
                    rods with different resistance values before deciding which
                    combination of resistors belongs in the circuit.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    {resistorImages.map((src) => (
                        <img
                            key={src}
                            src={src}
                            className="w-full rounded-sm border border-primary/10"
                            alt="Resistor rod"
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
                <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
                    Resistor rods hidden throughout the level, each labeled with a
                    different resistance value.
                </p>
            </section>

            <hr className="border-primary/10 mb-14" />

            {/* ── 03. Placing Resistors in the Circuit ── */}
            <section id="placing-resistors" className="mb-14 scroll-mt-8">
                <span className="eyebrow">03</span>
                <h2 className="t-h1 mt-2 mb-5">Placing Resistors in the Circuit</h2>
                <p className="t-body mb-8">
                    Using Unity's XR Interaction Toolkit, players physically pick up
                    resistor rods and insert them into XR sockets connected to the
                    conveyor circuit. Because every resistor can be swapped at any
                    time, the puzzle encourages experimentation and lets players
                    discover the solution through hands-on interaction.
                </p>

                <div className="flex justify-center">
                    <video
                        src={cldVideo("placing_resistor", { quality: "original" })}
                        poster={cldThumb("placing_resistor")}
                        className="w-5xl rounded-sm border border-primary/10 mb-3"
                        controls
                        loading="lazy"
                    />
                </div>

                <p className="caption-text mt-3 normal-case text-foreground/40 mb-10">
                    Placing a resistor rod into an XR socket on the conveyor circuit.
                </p>
            </section>

            <hr className="border-primary/10 mb-14" />

            {/* ── 04. Circuit Calculation and Feedback ── */}
            <section id="feedback" className="mb-14 scroll-mt-8">
                <span className="eyebrow">04</span>
                <h2 className="t-h1 mt-2 mb-5">Circuit Calculation and Feedback</h2>
                <p className="t-body mb-10">
                    The conveyor continuously calculates the total circuit resistance
                    from the inserted resistor rods and adjusts its speed using Ohm's
                    Law (V = I × R). Instead of checking for a single predefined
                    answer, the puzzle responds dynamically to the player's circuit.
                    In-game computer monitors display the current resistance in real
                    time, allowing players to adjust their solution as they
                    experiment.
                </p>

                <div className="mb-10">
                    <h3 className="t-h2 mb-3">Too Fast</h3>
                    <p className="t-body mb-4">
                        Not enough resistance in the circuit, and the conveyor speeds up
                        until packages fly off the belt.
                    </p>
                    <video
                        src={cldVideo("fast", { quality: "original" })}
                        poster={cldThumb("fast")}
                        className="w-full rounded-sm border border-primary/10"
                        controls
                        loading="lazy"
                    />
                </div>

                <div className="mb-10">
                    <h3 className="t-h2 mb-3">Too Slow</h3>
                    <p className="t-body mb-4">
                        Too much resistance, and the system stalls out completely.
                    </p>
                    <video
                        src={cldVideo("slow", { quality: "original" })}
                        poster={cldThumb("slow")}
                        className="w-full rounded-sm border border-primary/10"
                        controls
                        loading="lazy"
                    />
                </div>

                <div className="mb-2">
                    <h3 className="t-h2 mb-3">Balanced</h3>
                    <p className="t-body mb-4">
                        The circuit lands in the right range, the conveyor runs
                        smoothly, packages get delivered, and the exit door unlocks.
                    </p>
                    <video
                        src={cldVideo("success", { quality: "original" })}
                        poster={cldThumb("success")}
                        className="w-full rounded-sm border border-primary/10"
                        controls
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    </div>
);