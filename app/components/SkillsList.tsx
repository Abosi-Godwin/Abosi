interface SkillItem {
    title: string;
    icon: React.ElementType;
}

interface SkillsListProps {
    title: string;
    items: SkillItem[];
}

const SkillsList = ({ title, items }: SkillsListProps) => {
    return (
        <div className="py-2">
            <h2 className="text-xl font-bold pb-2 border-b border-gray-100">
                {title}
            </h2>
            <ul className="pt-2 flex flex-col gap-1">
                {items.map(item => {
                    const Icon = item.icon;
                    return (
                        <li
                            key={item.title}
                            className="flex gap-3 items-center uppercase p-2 
                                       rounded-md odd:bg-gray-50 hover:bg-gray-100 
                                       transition-colors duration-200"
                        >
                      
                            <Icon className="text-secondary text-lg" />
                            <span className="text-sm font-medium tracking-wide">
                                {item.title}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SkillsList;
