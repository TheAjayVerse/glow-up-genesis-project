
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, Camera, ChevronDown, Plus } from 'lucide-react';

const Progress = () => {
  const categories = ["All", "Skin", "Hair", "Body", "Teeth", "Mind"];
  
  const mockPhotos = [
    { 
      id: 1, 
      category: "Skin", 
      date: "April 15, 2025", 
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop&q=80" 
    },
    { 
      id: 2, 
      category: "Body", 
      date: "April 16, 2025", 
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&q=80" 
    },
    { 
      id: 3, 
      category: "Hair", 
      date: "April 18, 2025", 
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop&q=80" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-3xl font-serif font-bold mb-2">Your Progress</h1>
              <p className="text-glow-neutral-gray">
                Track your transformation journey with before and after photos.
              </p>
            </div>
            <Button className="glow-button mt-4 md:mt-0 flex items-center gap-2">
              <Plus size={16} />
              <span>Upload New Photo</span>
            </Button>
          </div>
          
          {/* Main content */}
          <div className="bg-white rounded-xl shadow-md border border-glow-soft-purple overflow-hidden">
            <Tabs defaultValue="photos">
              <div className="border-b border-glow-soft-purple px-6 pt-4">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
              </div>
              
              {/* Photos Tab */}
              <TabsContent value="photos" className="p-6">
                {/* Category filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      className={category === "All" ? "bg-glow-purple hover:bg-glow-purple-dark" : ""}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm" className="ml-auto">
                    <Calendar className="h-4 w-4 mr-1" /> 
                    Date
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                
                {/* Photo gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {mockPhotos.map((photo) => (
                    <div key={photo.id} className="border rounded-lg overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img src={photo.image} alt={`${photo.category} progress`} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{photo.category}</span>
                          <span className="text-xs text-glow-neutral-gray">{photo.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Upload placeholder */}
                  <div className="border border-dashed border-glow-soft-purple rounded-lg h-48 flex flex-col items-center justify-center">
                    <Camera className="h-8 w-8 mb-2 text-glow-neutral-gray" />
                    <p className="text-sm text-glow-neutral-gray">Upload new photo</p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8 text-sm">
                  <p className="text-glow-neutral-gray">Showing 3 of 3 photos</p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" disabled className="h-8 w-8">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <span>Page 1</span>
                    <Button variant="outline" size="icon" disabled className="h-8 w-8">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Comparisons Tab */}
              <TabsContent value="comparisons" className="p-6">
                <div className="text-center py-8">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-glow-neutral-gray" />
                  <h3 className="font-serif font-semibold text-xl mb-2">Create Your First Comparison</h3>
                  <p className="text-glow-neutral-gray mb-6 max-w-md mx-auto">
                    Upload at least two photos to start tracking your progress with side-by-side comparisons.
                  </p>
                  <Button className="glow-button flex items-center gap-2">
                    <Plus size={16} />
                    <span>Create Comparison</span>
                  </Button>
                </div>
              </TabsContent>
              
              {/* Insights Tab */}
              <TabsContent value="insights" className="p-6">
                <div className="text-center py-8">
                  <h3 className="font-serif font-semibold text-xl mb-2">Coming Soon</h3>
                  <p className="text-glow-neutral-gray mb-6 max-w-md mx-auto">
                    We're building powerful AI-driven insights to help you understand your transformation journey better.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Progress;
