
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/20 py-16 mb-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Библиотека ретро и редких игр
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Скачивайте демо-версии, альфа-билды и классические игры, 
            которые уже невозможно найти на официальных платформах
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Button className="flex-1">
              <Search className="mr-2" size={18} />
              Найти игры
            </Button>
            <Button variant="outline" className="flex-1">
              Загрузить свою игру
            </Button>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
