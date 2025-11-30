interface SkillItem {
  title: string,
  icon: React.ElemetType
}


interface SkillsListProps {
  title: string;
  datas: SkillItem[]
};

const SkillsList = ({ title, datas } : SkillsListProps) => {
  return (
    <div className="py-2">
      <h1 className="text-2xl font-bold pb-2">{title}</h1>
      <ul>
        {datas.map(data => {
          const Icon = data.icon;
          return (
            <li
              key={data.title}
              className="flex gap-2 items-center uppercase p-1.5
                  rounded-md odd:bg-gray-100"
            >
              <Icon />
              {data.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
