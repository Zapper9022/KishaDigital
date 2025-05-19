
import { Link, useLocation } from "react-router-dom";
import { Search, User, Home, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <div className="relative h-12 w-12">
              <img 
                src="/lovable-uploads/4ddcc736-3bdb-49be-ae13-68f7b5099d72.png" 
                alt="Kisah Digital Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-bold ml-2">KISAH<sup>2</sup> DIGITAL</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavItem to="/" icon={<Home className="w-4 h-4" />} title="Home" isActive={isActive("/")} />
            <NavItem to="/movies" icon={<Play className="w-4 h-4" />} title="Movies" isActive={isActive("/movies")} />
            <NavItem to="/series" icon={<Play className="w-4 h-4" />} title="Series" isActive={isActive("/series")} />
            <NavItem to="/search" icon={<Search className="w-4 h-4" />} title="Search" isActive={isActive("/search")} />
          </nav>
        </div>
        
        <Link to="/profile" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-kisah-primary to-kisah-secondary flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="hidden md:inline">Profile</span>
        </Link>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-kisah-gray border-t border-muted flex items-center justify-around p-2">
        <NavItem to="/" icon={<Home className="w-5 h-5" />} title="Home" isActive={isActive("/")} isMobile />
        <NavItem to="/movies" icon={<Play className="w-5 h-5" />} title="Movies" isActive={isActive("/movies")} isMobile />
        <NavItem to="/series" icon={<Play className="w-5 h-5" />} title="Series" isActive={isActive("/series")} isMobile />
        <NavItem to="/search" icon={<Search className="w-5 h-5" />} title="Search" isActive={isActive("/search")} isMobile />
        <NavItem to="/profile" icon={<User className="w-5 h-5" />} title="You" isActive={isActive("/profile")} isMobile />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  isMobile?: boolean;
}

const NavItem = ({ to, icon, title, isActive, isMobile = false }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center transition-colors duration-200",
        isMobile ? "flex-col py-1 px-3" : "space-x-2",
        isActive 
          ? "text-kisah-primary font-medium" 
          : "text-muted-foreground hover:text-white"
      )}
    >
      {icon}
      <span className={cn(
        isMobile ? "text-xs mt-1" : ""
      )}>{title}</span>
      
      {isActive && !isMobile && (
        <div className="absolute h-1 bg-kisah-primary rounded-full bottom-[-14px] left-0 right-0" />
      )}
    </Link>
  );
};

export default Navigation;
