
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            RetroGameVault
          </span>
        </Link>

        <div className="hidden md:flex relative max-w-md w-full mx-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            className="pl-10 bg-accent/50" 
            placeholder="Поиск игр..."
          />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/categories">
            <Button variant="ghost" size="sm">Категории</Button>
          </Link>
          <Link to="/upload">
            <Button size="sm">Загрузить игру</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
