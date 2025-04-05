
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, CircleCheck, CircleX } from "lucide-react";

const StubbleInfoSection = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-agrihub-green" />
          Stubble Management Education
        </CardTitle>
        <CardDescription>
          Learn about the importance of proper stubble management and its effects on soil health
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why is stubble burning harmful?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Stubble burning has several negative impacts:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Releases particulate matter (PM2.5, PM10) causing respiratory issues</li>
                  <li>Emits greenhouse gases like CO2, CO, NOx contributing to climate change</li>
                  <li>Destroys soil microbiota and reduces soil fertility</li>
                  <li>Wastes valuable organic matter that could improve soil structure</li>
                  <li>Causes significant air pollution in surrounding regions</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Benefits of stubble dissolution</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p>Proper stubble management through dissolution offers numerous benefits:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 text-agrihub-darkGreen mb-2">
                      <CircleCheck className="h-4 w-4 text-green-600" /> Environmental Benefits
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Reduces air pollution by 70-90%</li>
                      <li>Prevents greenhouse gas emissions</li>
                      <li>Supports biodiversity conservation</li>
                      <li>Protects water quality in nearby sources</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 text-agrihub-darkGreen mb-2">
                      <CircleCheck className="h-4 w-4 text-green-600" /> Agricultural Benefits
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Increases organic matter in soil by 15-25%</li>
                      <li>Improves water retention capacity</li>
                      <li>Enhances soil structure and reduces erosion</li>
                      <li>Reduces fertilizer requirements by 10-20%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Nutrient balance and soil health</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>Maintaining proper nutrient balance is crucial for long-term soil health:</p>
                
                <h4 className="font-medium text-agrihub-darkGreen mt-3">Key Nutrients and Their Roles</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">Nitrogen (N):</span> Essential for leaf and stem growth, protein synthesis</li>
                  <li><span className="font-medium">Phosphorus (P):</span> Critical for root development, flowering, and seed formation</li>
                  <li><span className="font-medium">Potassium (K):</span> Regulates water use, disease resistance, and overall plant vigor</li>
                  <li><span className="font-medium">Micronutrients:</span> Required in small amounts but vital for plant metabolism</li>
                </ul>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 text-red-700 mb-2">
                      <CircleX className="h-4 w-4 text-red-600" /> Nutrient Imbalance Effects
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Stunted plant growth and reduced yields</li>
                      <li>Increased susceptibility to pests and diseases</li>
                      <li>Soil acidification or alkalization</li>
                      <li>Nutrient runoff causing water pollution</li>
                      <li>Long-term soil degradation</li>
                    </ul>
                  </div>
                  
                  <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center gap-2 text-green-700 mb-2">
                      <CircleCheck className="h-4 w-4 text-green-600" /> Balanced Nutrient Benefits
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Optimal crop growth and quality</li>
                      <li>Enhanced soil microbial activity</li>
                      <li>Improved nutrient use efficiency</li>
                      <li>Reduced fertilizer costs</li>
                      <li>Sustainable long-term productivity</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-3 text-sm">
                  <strong>Note:</strong> Microbial solutions typically promote better nutrient cycling and balanced 
                  availability compared to synthetic fertilizers, which can sometimes create short-term nutrient spikes followed by depletion.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default StubbleInfoSection;
