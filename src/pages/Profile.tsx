
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Camera, Upload } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-md p-8 border border-glow-soft-purple">
            <h1 className="text-3xl font-serif font-bold mb-6">Your Profile</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile sidebar */}
              <div className="md:w-1/3">
                <div className="flex flex-col items-center p-6 bg-glow-light-gray rounded-lg">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-glow-soft-purple flex items-center justify-center">
                      {/* Replace with actual user avatar or default icon */}
                      <span className="text-5xl text-glow-purple-dark font-serif">JD</span>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-glow-purple text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={16} />
                    </button>
                  </div>
                  <h2 className="font-serif font-semibold text-xl mt-4">John Doe</h2>
                  <p className="text-glow-neutral-gray text-sm">Member since April 2025</p>
                  
                  <div className="w-full mt-8 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Profile Completion</span>
                      <span className="font-medium">60%</span>
                    </div>
                    <div className="w-full bg-glow-soft-purple rounded-full h-2">
                      <div className="bg-glow-purple h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Profile content */}
              <div className="md:w-2/3">
                <Tabs defaultValue="account">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="photos">Your Photos</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="account" className="pt-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Birth Date</Label>
                          <Input id="birthdate" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <select id="gender" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-binary</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                          </select>
                        </div>
                      </div>
                      
                      <Button className="glow-button">Save Changes</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="photos" className="pt-6">
                    <div className="space-y-6">
                      <p className="text-glow-neutral-gray">Upload photos to track your transformation journey.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Photo upload cards */}
                        {["skin", "hair", "body", "teeth"].map((category) => (
                          <div key={category} className="border border-dashed border-glow-soft-purple rounded-lg p-6 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 rounded-full bg-glow-soft-purple flex items-center justify-center mb-4">
                              <Upload className="h-6 w-6 text-glow-purple" />
                            </div>
                            <h3 className="font-medium capitalize mb-1">{category}</h3>
                            <p className="text-xs text-glow-neutral-gray mb-4">Upload your {category} photos</p>
                            <Button variant="outline" size="sm" className="text-glow-purple border-glow-purple">
                              Add Photos
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="preferences" className="pt-6">
                    <div className="space-y-6">
                      <p className="text-glow-neutral-gray">Set your preferences to get personalized recommendations.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <Label className="mb-2 block">Skin Type</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {["Normal", "Dry", "Oily", "Combination"].map((type) => (
                              <label key={type} className="flex items-center space-x-2 border rounded-md p-2 cursor-pointer hover:bg-glow-soft-purple/30">
                                <input type="radio" name="skinType" className="text-glow-purple" />
                                <span>{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label className="mb-2 block">Hair Type</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {["Straight", "Wavy", "Curly", "Coily", "Fine", "Thick"].map((type) => (
                              <label key={type} className="flex items-center space-x-2 border rounded-md p-2 cursor-pointer hover:bg-glow-soft-purple/30">
                                <input type="radio" name="hairType" className="text-glow-purple" />
                                <span>{type}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label className="mb-2 block">Fitness Goals</Label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {["Weight Loss", "Muscle Gain", "Toning", "Endurance", "Flexibility", "Overall Health"].map((goal) => (
                              <label key={goal} className="flex items-center space-x-2 border rounded-md p-2 cursor-pointer hover:bg-glow-soft-purple/30">
                                <input type="checkbox" name="fitnessGoals" className="text-glow-purple" />
                                <span>{goal}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="glow-button">Save Preferences</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
