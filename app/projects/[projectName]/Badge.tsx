function Badge({
    children,
    color
}: {
    children: React.ReactNode;
    color: "red" | "green";
}) {
    const styles = {
        red: "text-red-500",
        green: "text-green-600"
    };

    return (
        <h3
            className={`font-bold uppercase tracking-wide text-sm ${styles[color]}`}
        >
            {children}
        </h3>
    );
}

export default Badge
