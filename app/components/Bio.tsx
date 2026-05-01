 import Heading from "./Heading";

const Bio = () => {
    return (
        <section className="max-w-3xl py-10 px-2.5 md:px-5">
            <Heading text="About me" />

            <h2 className="text-lg md:text-xl tracking-tight font-medium text-secondary pb-6">
                Full-Stack Developer based in Nigeria.
            </h2>

            <div className="leading-relaxed text-gray-700 space-y-5 text-base md:text-lg">
                <p>
                    Abosi Godwin is a self-taught Full-Stack Developer from
                    Asaba, Nigeria — building modern web products end to end,
                    from pixel-perfect interfaces to production-ready backends.
                </p>
                <p>
                    I specialize in{" "}
                    <strong>React, Next.js, and TypeScript</strong> on the
                    frontend, and <strong>Supabase</strong> on the backend —
                    shipping complete, scalable applications that solve real
                    problems for real users.
                </p>
                <p>
                    Beyond client work, I build my own products. Trexpenser —
                    a full-stack personal finance SaaS — is the clearest
                    example of how I think: not just as a developer writing
                    code, but as a builder who cares about the whole product
                    experience.
                </p>
                <p>
                    My focus is always on clarity, performance, and
                    maintainability — code that holds up in production, and
                    interfaces that users actually enjoy.
                </p>
            </div>
        </section>
    );
};

export default Bio;