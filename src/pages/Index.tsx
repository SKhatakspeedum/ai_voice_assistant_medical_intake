
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const chatMessages = [
    { type: 'ai', message: 'Hello! I\'m here to help you. What is your name?' },
    { type: 'user', message: 'Hi, my name is John.' },
    { type: 'ai', message: 'Nice to meet you, John! How are you feeling today?' },
    { type: 'user', message: 'I\'m feeling a bit stressed lately.' },
    { type: 'ai', message: 'I understand. Can you tell me more about what\'s been causing you stress?' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Section Left */}
          <div className="flex flex-col gap-6 h-full">
            {/* Left Top Section - Profile */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex-1 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Profile" />
                  <AvatarFallback className="text-2xl font-semibold bg-blue-100 text-blue-800">JD</AvatarFallback>
                </Avatar>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h2>
                <p className="text-gray-600 max-w-md">
                  Welcome to my profile. This section showcases personal information
                  and serves as an introduction to visitors.
                </p>
              </div>
            </div>
            
            {/* Left Bottom Section - Chat Conversation */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1 min-h-[300px]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conversation History</h3>
              <div className="space-y-4 max-h-[250px] overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-blue-500 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Section Right */}
          <div className="flex flex-col gap-4 h-full">
            {/* Section Right Top - Current Question (30% height) */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-gray-200 p-6 h-[30%] flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Current Question</h2>
                <p className="text-lg text-gray-700 font-medium">What is your name?</p>
              </div>
            </div>
            
            {/* Section Right Bottom - Tabbed Forms (70% height) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-[70%]">
              <Tabs defaultValue="personal" className="h-full flex flex-col">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="emotional">Emotional Info</TabsTrigger>
                  <TabsTrigger value="patient">Patient Issue</TabsTrigger>
                </TabsList>
                
                <div className="flex-1 overflow-y-auto">
                  <TabsContent value="personal" className="space-y-4">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input id="age" type="number" placeholder="Enter your age" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">Gender</Label>
                          <Input id="gender" placeholder="Enter your gender" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="emotional" className="space-y-4">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="mood">Mood Level (1-10)</Label>
                          <Input id="mood" type="number" min="1" max="10" placeholder="Rate your mood" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="stress">Stress Level (1-10)</Label>
                          <Input id="stress" type="number" min="1" max="10" placeholder="Rate your stress level" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="energy">Energy Level (1-10)</Label>
                          <Input id="energy" type="number" min="1" max="10" placeholder="Rate your energy level" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="patient" className="space-y-4">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="symptoms">Symptoms</Label>
                          <Input id="symptoms" placeholder="Describe your symptoms" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="duration">Duration</Label>
                          <Input id="duration" placeholder="How long have you experienced this?" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Urgency Level (1-10)</Label>
                          <Input id="urgency" type="number" min="1" max="10" placeholder="Rate the urgency" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full">Submit Information</Button>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
