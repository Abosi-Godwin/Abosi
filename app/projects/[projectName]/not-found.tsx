import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 to-slate-100">
            {" "}
            <div className="text-center max-w-md">
                {" "}
                {/* Error Code */}{" "}
                <p className="text-sm font-semibold tracking-widest text-blue-600 mb-3">
                    {" "}
                    404 ERROR{" "}
                </p>
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                    Oops… Project Not Found
                </h1>
                {/* Description */}
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The project you’re looking for doesn’t exist or may have
                    been moved. Let’s get you back on track.
                </p>
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                    >
                        View Projects
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
