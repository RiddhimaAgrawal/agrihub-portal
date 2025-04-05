
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RecommendationCharts from "@/components/RecommendationCharts";
import StubbleInfoSection from "@/components/StubbleInfoSection";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [district, setDistrict] = useState("");
  const [crop, setCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [landSize, setLandSize] = useState("");
  const [unit, setUnit] = useState("Acre");
  const [recommendation, setRecommendation] = useState("");
  
  // Chart data
  const [chartData, setChartData] = useState({
    microSolution: "",
    fertilizer: "",
    microCost: 0,
    fertilizerCost: 0,
    microFertilityIncrease: 0,
    fertilizerFertilityIncrease: 0
  });

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem("currentUser");
    if (!userStr) {
      toast({
        title: "Authentication required",
        description: "Please log in to access this page",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    const user = JSON.parse(userStr);
    if (!user.isLoggedIn) {
      navigate("/login");
      return;
    }
    
    setCurrentUser(user);
    setLoading(false);
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/login");
  };

  const extractNumericValue = (text: string): number => {
    // Extract a number from formats like "15-20%" or "550-600"
    const matches = text.match(/(\d+\.?\d*)-(\d+\.?\d*)/);
    if (matches && matches.length >= 3) {
      return (parseFloat(matches[1]) + parseFloat(matches[2])) / 2;
    }
    return 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally call the backend with the form data
    // For demo purposes, we'll show a mock recommendation
    
    const mockRecommendation = `
    For ${crop} stubble in ${season}, ${district} (${soilType} soil):

    Microbial Solution:
    Bio-Decomposer Mix
    Content Ratio: Trichoderma 45%, Pseudomonas 35%, Organic activators 20%
    Dosage: ${(parseFloat(landSize) * 2.5).toFixed(2)} kg in ${(parseFloat(landSize) * 50).toFixed(2)} L water
    Fertility Increase: 15-20%
    Cost: ₹${(parseFloat(landSize) * 575).toFixed(2)}

    OR

    Fertilizer Solution:
    NPK 19:19:19 + Micro
    Content Ratio: N 19%, P 19%, K 19%, Micronutrients 2%
    Dosage: ${(parseFloat(landSize) * 25).toFixed(2)} kg/acre
    Fertility Increase: 20-25%
    Cost: ₹${(parseFloat(landSize) * 2250).toFixed(2)}

    Recommendation:
    Better Option: Microbial Solution
    Why: The microbial solution (Bio-Decomposer Mix) is recommended because it offers good soil fertility increase at a lower cost compared to the fertilizer. Additionally, microbial solutions are more eco-friendly, promoting sustainable soil health.
    `;
    
    setRecommendation(mockRecommendation);
    
    // Extract data for charts
    const microCost = parseFloat(landSize) * 575;
    const fertilizerCost = parseFloat(landSize) * 2250;
    const microFertility = extractNumericValue("15-20%");
    const fertilizerFertility = extractNumericValue("20-25%");
    
    setChartData({
      microSolution: "Bio-Decomposer Mix",
      fertilizer: "NPK 19:19:19 + Micro",
      microCost: microCost,
      fertilizerCost: fertilizerCost,
      microFertilityIncrease: microFertility,
      fertilizerFertilityIncrease: fertilizerFertility
    });
    
    toast({
      title: "Analysis complete",
      description: "Recommendation generated successfully",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-agrihub-darkGreen">
            Welcome, {currentUser.name}
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Stubble Management Advisor</CardTitle>
              <CardDescription>
                Enter your field details to get personalized recommendations for stubble management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Select value={district} onValueChange={setDistrict} required>
                      <SelectTrigger id="district">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ambala">Ambala</SelectItem>
                        <SelectItem value="Kurukshetra">Kurukshetra</SelectItem>
                        <SelectItem value="Karnal">Karnal</SelectItem>
                        <SelectItem value="Panipat">Panipat</SelectItem>
                        <SelectItem value="Sonipat">Sonipat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="crop">Harvested Crop</Label>
                    <Select value={crop} onValueChange={setCrop} required>
                      <SelectTrigger id="crop">
                        <SelectValue placeholder="Select crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Rice">Rice</SelectItem>
                        <SelectItem value="Wheat">Wheat</SelectItem>
                        <SelectItem value="Cotton">Cotton</SelectItem>
                        <SelectItem value="Sugarcane">Sugarcane</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select value={soilType} onValueChange={setSoilType} required>
                      <SelectTrigger id="soilType">
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Clay">Clay</SelectItem>
                        <SelectItem value="Sandy">Sandy</SelectItem>
                        <SelectItem value="Loamy">Loamy</SelectItem>
                        <SelectItem value="Silt">Silt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="season">Season</Label>
                    <Select value={season} onValueChange={setSeason} required>
                      <SelectTrigger id="season">
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Kharif">Kharif</SelectItem>
                        <SelectItem value="Rabi">Rabi</SelectItem>
                        <SelectItem value="Zaid">Zaid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="landSize">Land Size</Label>
                    <div className="flex gap-2">
                      <Input
                        id="landSize"
                        type="number"
                        placeholder="Enter land size"
                        value={landSize}
                        onChange={(e) => setLandSize(e.target.value)}
                        required
                        min="0.1"
                        step="0.1"
                      />
                      <Select value={unit} onValueChange={setUnit}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Acre">Acre</SelectItem>
                          <SelectItem value="Hectare">Hectare</SelectItem>
                          <SelectItem value="Square Meter">Square Meter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              
                <Button type="submit" className="w-full bg-agrihub-green hover:bg-agrihub-darkGreen">
                  Get Recommendation
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recommendation</CardTitle>
              <CardDescription>
                Your personalized stubble management recommendation
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recommendation ? (
                <div className="whitespace-pre-line bg-gray-50 p-4 rounded-md max-h-[500px] overflow-y-auto">
                  {recommendation}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Fill out the form to get your personalized recommendation</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-end">
              {recommendation && (
                <Button variant="outline" onClick={() => window.print()}>
                  Print Report
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
        
        {recommendation && (
          <RecommendationCharts 
            microSolution={chartData.microSolution}
            fertilizer={chartData.fertilizer}
            microCost={chartData.microCost}
            fertilizerCost={chartData.fertilizerCost}
            microFertilityIncrease={chartData.microFertilityIncrease}
            fertilizerFertilityIncrease={chartData.fertilizerFertilityIncrease}
          />
        )}
        
        <StubbleInfoSection />
      </div>
    </div>
  );
};

export default Dashboard;
