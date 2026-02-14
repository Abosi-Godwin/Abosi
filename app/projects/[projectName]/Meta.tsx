function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <p className="text-gray-500">{label}</p> <p>{value}</p>
        </div>
    );
}
export default Meta