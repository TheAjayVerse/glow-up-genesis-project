
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, MessageSquare, Search, Share2, ThumbsUp } from 'lucide-react';

const Community = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Emma Johnson",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=100&h=100&fit=crop&q=80",
        badge: "Premium"
      },
      category: "Skin",
      title: "My 3-Month Skincare Journey",
      content: "I've been following the recommended skincare routine from We Glow for the past 3 months, and the results have been amazing! My skin is clearer, more radiant, and the acne scars have significantly faded.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=500&fit=crop&q=80",
      likes: 126,
      comments: 32,
      shares: 14,
      date: "April 23, 2025"
    },
    {
      id: 2,
      user: {
        name: "Michael Chen",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&q=80",
        badge: "Top Contributor"
      },
      category: "Body",
      title: "How I Transformed My Physique in 60 Days",
      content: "Following the We Glow fitness plan has completely changed my approach to working out. I've not only lost weight but also built muscle definition that I never thought possible in such a short time.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop&q=80",
      likes: 245,
      comments: 56,
      shares: 38,
      date: "April 20, 2025"
    }
  ];

  const trendingTopics = [
    "#SkincareTips",
    "#TransformationTuesday",
    "#MindfulnessMatters",
    "#HairGoals",
    "#SmileBright",
    "#BodyConfidence",
    "#WellnessJourney"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-8 px-4 bg-glow-light-gray/30">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold mb-2">Community</h1>
            <p className="text-glow-neutral-gray">
              Connect, share, and get inspired by others on their glow-up journey.
            </p>
          </div>
          
          {/* Main content with sidebar */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main feed */}
            <div className="md:w-2/3 space-y-6">
              {/* Create post card */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-glow-soft-purple">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-glow-soft-purple flex items-center justify-center">
                    <span className="font-medium text-glow-purple">JD</span>
                  </div>
                  <Button variant="outline" className="w-full justify-start text-glow-neutral-gray">
                    Share your journey...
                  </Button>
                </div>
                <div className="flex justify-between flex-wrap gap-3">
                  <Button variant="ghost" size="sm" className="text-glow-neutral-gray">
                    <Camera className="h-4 w-4 mr-1" /> Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-glow-neutral-gray">
                    <BeforeAfter className="h-4 w-4 mr-1" /> Before/After
                  </Button>
                  <Button variant="ghost" size="sm" className="text-glow-neutral-gray">
                    <MessageSquare className="h-4 w-4 mr-1" /> Story
                  </Button>
                  <Button className="glow-button h-8">Share Post</Button>
                </div>
              </div>
              
              {/* Posts */}
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-glow-soft-purple">
                  {/* Post header */}
                  <div className="p-6 pb-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <img 
                            src={post.user.image} 
                            alt={post.user.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{post.user.name}</h3>
                            {post.user.badge && (
                              <span className="bg-glow-soft-purple text-glow-purple-dark text-xs px-2 py-0.5 rounded-full">
                                {post.user.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-glow-neutral-gray">{post.date}</p>
                        </div>
                      </div>
                      <span className="bg-glow-soft-pink text-glow-purple-dark text-xs px-2 py-1 rounded-full h-fit">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="font-serif font-semibold text-xl mt-4 mb-2">{post.title}</h2>
                    <p className="text-glow-neutral-gray">{post.content}</p>
                  </div>
                  
                  {/* Post image */}
                  {post.image && (
                    <div className="w-full">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  
                  {/* Post actions */}
                  <div className="p-4 border-t border-glow-soft-purple flex justify-between">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" /> {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" /> {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Share2 className="h-4 w-4" /> {post.shares}
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="text-glow-purple">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3 space-y-6">
              {/* Search box */}
              <div className="bg-white rounded-xl shadow-sm p-4 border border-glow-soft-purple">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-glow-neutral-gray" />
                  <Input className="pl-10" placeholder="Search community posts" />
                </div>
              </div>
              
              {/* Trending topics */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-glow-soft-purple">
                <h3 className="font-serif font-semibold mb-4">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="bg-glow-soft-purple text-glow-purple-dark rounded-full px-3 py-1 text-sm hover:bg-glow-purple hover:text-white transition-colors"
                    >
                      {topic}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Top contributors */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-glow-soft-purple">
                <h3 className="font-serif font-semibold mb-4">Top Contributors</h3>
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img 
                          src={post.user.image} 
                          alt={post.user.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{post.user.name}</h4>
                        <p className="text-xs text-glow-neutral-gray">{post.category} Expert</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Custom icon for Before/After
const BeforeAfter = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="8" height="16" rx="1" />
      <rect x="14" y="4" width="8" height="16" rx="1" />
      <path d="M10 12h4" />
    </svg>
  );
};

export default Community;
