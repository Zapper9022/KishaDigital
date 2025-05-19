
import { Link, useLocation } from "react-router-dom";
import { Search, User, Home, Film, Tv } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <>
      {/* Top Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm p-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="relative h-8 w-8">
              <img 
                src="/lovable-uploads/4ddcc736-3bdb-49be-ae13-68f7b5099d72.png" 
                alt="Kisah Digital Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-base font-bold ml-1">KISAH<sup>2</sup> DIGITAL</span>
          </Link>
        </div>
      </div>
      
      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-kisah-dark/95 border-t border-muted/30 flex items-center justify-around p-1 z-50 backdrop-blur-sm">
        <NavItem to="/" icon={<Home className="w-5 h-5" />} title="Home" isActive={isActive("/")} />
        <NavItem to="/movies" icon={<Film className="w-5 h-5" />} title="Movies" isActive={isActive("/movies")} />
        <NavItem to="/series" icon={<Tv className="w-5 h-5" />} title="Series" isActive={isActive("/series")} />
        <NavItem to="/search" icon={<Search className="w-5 h-5" />} title="Search" isActive={isActive("/search")} />
        <NavItem to="/profile" icon={<User className="w-5 h-5" />} title="Profile" isActive={isActive("/profile")} />
      </div>
    </>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, title, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center py-2 px-3",
        isActive 
          ? "text-kisah-primary" 
          : "text-muted-foreground"
      )}
    >
      {icon}
      <span className="text-[10px] mt-1">{title}</span>
    </Link>
  );
};

export default Navigation;
