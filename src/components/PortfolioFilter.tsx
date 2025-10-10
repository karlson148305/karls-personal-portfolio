import { Button } from './ui/button';

interface PortfolioFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const PortfolioFilter = ({ categories, activeCategory, onCategoryChange }: PortfolioFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <Button
        variant={activeCategory === 'All' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('All')}
        className="transition-all duration-300 hover:scale-105"
      >
        All Projects
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-300 hover:scale-105"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
