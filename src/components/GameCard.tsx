
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Download } from "lucide-react";

export interface GameCardProps {
  id: string;
  title: string;
  imageUrl: string;
  developer: string;
  releaseYear: number;
  version: string;
  type: "demo" | "alpha" | "beta" | "classic";
  downloads: number;
  size: string;
}

const typeBadgeColors = {
  "demo": "bg-blue-500/20 text-blue-600 border-blue-500/30",
  "alpha": "bg-amber-500/20 text-amber-600 border-amber-500/30",
  "beta": "bg-purple-500/20 text-purple-600 border-purple-500/30",
  "classic": "bg-green-500/20 text-green-600 border-green-500/30"
};

const GameCard = ({ title, imageUrl, developer, releaseYear, version, type, downloads, size }: GameCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl || "https://source.unsplash.com/random/300x200/?videogame"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
          <Badge 
            variant="outline" 
            className={`${typeBadgeColors[type]} text-xs px-2 py-0 h-5`}
          >
            {type}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground flex flex-col">
          <span>{developer} • {releaseYear}</span>
          <span>Версия: {version}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm">
        <div className="flex items-center justify-between text-muted-foreground">
          <span>{downloads.toLocaleString()} загрузок</span>
          <span>{size}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" size="sm">
          <Download size={16} />
          Скачать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
