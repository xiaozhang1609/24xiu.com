import { ChevronRight } from '@mui/icons-material';

interface ServiceCategoryProps {
  title: string;
  items: string[];
  highlight?: boolean;
  icon?: React.ReactNode;
}

function ServiceCategory({ title, items, highlight = false, icon }: ServiceCategoryProps) {
  return (
    <div
      className={`group p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl 
      ${highlight 
        ? "bg-gradient-to-br from-secondary to-secondary-dark text-primary-dark" 
        : "bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-light"}`}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          {icon && (
            <div className={`p-3 rounded-xl ${highlight ? 'bg-primary/10' : 'bg-primary/5'} 
              group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
          )}
          <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
              <div className={`p-1.5 rounded-lg ${highlight ? 'bg-primary/10' : 'bg-primary/5'}`}>
                <ChevronRight className={`w-4 h-4 ${highlight ? 'text-primary-dark' : 'text-primary'}`} />
              </div>
              <span className="text-base sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCategory;