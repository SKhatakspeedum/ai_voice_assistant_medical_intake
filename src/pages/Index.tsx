
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
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-7xl mx-auto h-[90vh] p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 h-full ">
          {/* Section Left */}
          <div className="flex flex-col gap-6 h-full">
            {/* Left Top Section - Profile */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200  h-[20vh] flex items-center justify-center">
              <div className="text-center">
                <Avatar className="w-14 h-14 mx-auto mb-2">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="Profile" />
                  <AvatarFallback className="text-xl font-semibold bg-blue-100 text-blue-800">JD</AvatarFallback>
                </Avatar>
                <h2 className="text-lg font-bold text-gray-900 mb-2">John Doe</h2>
                <p className="text-gray-600 max-w-md ">
                  Welcome to the AI Voice Assistant Medical Intake.
                </p>
              </div>
            </div>
            
            {/* Left Bottom Section - Chat Conversation */}
            <div className="bg-blue-50 rounded-xl border-2 border-blue-200 border-dashed p-6 h-[70vh]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conversation History</h3>
              <div className="space-y-4 h-[60vh] overflow-y-auto">
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-[15%] flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-gray-700 font-medium">What is your name?</p>
              </div>
            </div>
            
            {/* Section Right Bottom - Tabbed Forms (70% height) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-[85%]">
              <Tabs defaultValue="personal" className="h-full flex flex-col overflow-y-auto">
                <TabsList className="flex w-full mb-4 items-center overflow-x-auto whitespace-nowrap scrollbar-thin">
                  <TabsTrigger value="personal" className="min-w-max data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:rounded-br-none">Personal Test Info</TabsTrigger>
                  <span className="text-gray-300 text-lg mx-1">|</span>
                  <TabsTrigger value="emotional" className="min-w-max data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:rounded-br-none">Emotional Test Info</TabsTrigger>
                  <span className="text-gray-300 text-lg mx-1">|</span>
                  <TabsTrigger value="patient" className="min-w-max data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:rounded-br-none">Patient Test Issue</TabsTrigger>
                  <span className="text-gray-300 text-lg mx-1">|</span>
                  <TabsTrigger value="medical" className="min-w-max data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:rounded-br-none">Medical Test History</TabsTrigger>
                  <span className="text-gray-300 text-lg mx-1">|</span>
                  <TabsTrigger value="insurance" className="min-w-max data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:rounded-br-none">Insurance Test</TabsTrigger>
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
                    <div className="mt-4 flex justify-end">
                      <Button className="w-auto">Submit Information</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="medical" className="space-y-4">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="medical-history">Medical History</Label>
                          <Input id="medical-history" placeholder="Describe your medical history" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="lifestyle" className="space-y-4">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="lifestyle">Lifestyle</Label>
                          <Input id="lifestyle" placeholder="Describe your lifestyle" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="insurance" className="space-y-4">
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="insurance">Insurance Info</Label>
                          <Input id="insurance" placeholder="Enter your insurance details" />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
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
