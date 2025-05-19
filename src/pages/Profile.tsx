
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { User, Settings, Download, Clock, LogOut } from "lucide-react";

const Profile = () => {
  useEffect(() => {
    document.title = "My Profile | KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-kisah-primary to-kisah-secondary flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">John Doe</h1>
              <p className="text-muted-foreground mb-4">john.doe@example.com</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Account Settings
                </Button>
                <Button variant="outline" className="flex items-center gap-2 text-red-500 hover:text-red-400">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-kisah-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Downloads
              </h2>
              <p className="text-muted-foreground">No downloads available</p>
              <p className="text-sm text-muted-foreground mt-2">
                Download episodes to watch offline
              </p>
            </div>
            
            <div className="bg-kisah-gray rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Watch History
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="Moon Knight"
                    className="w-16 h-9 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">Moon Knight</p>
                    <p className="text-sm text-muted-foreground">Episode 1</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="The Mandalorian"
                    className="w-16 h-9 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">The Mandalorian</p>
                    <p className="text-sm text-muted-foreground">Episode 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-kisah-gray rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Subscription</h2>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Premium Plan</span>
                <span className="bg-gradient-to-r from-kisah-primary to-kisah-secondary text-white px-3 py-1 rounded-full text-xs">ACTIVE</span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">Renews on May 15, 2025</p>
            </div>
            <div className="bg-black/20 p-4 rounded-md">
              <h3 className="font-medium mb-2">Premium Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✓ Watch on 4 screens at the same time</li>
                <li>✓ Download on 10 devices</li>
                <li>✓ Full HD and 4K UHD available</li>
                <li>✓ Ad-free viewing experience</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
