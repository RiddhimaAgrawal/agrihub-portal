
import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartProps {
  microSolution?: string;
  fertilizer?: string;
  microCost?: number;
  fertilizerCost?: number;
  microFertilityIncrease?: number;
  fertilizerFertilityIncrease?: number;
}

const COLORS = ['#4ade80', '#22c55e', '#16a34a', '#15803d'];
const FERT_COLORS = ['#fb923c', '#f97316', '#ea580c', '#c2410c'];

export const RecommendationCharts: React.FC<ChartProps> = ({
  microSolution,
  fertilizer,
  microCost,
  fertilizerCost,
  microFertilityIncrease,
  fertilizerFertilityIncrease,
}) => {
  // Format data for the comparison chart
  const costComparisonData = [
    {
      name: "Cost (₹)",
      Microbial: microCost || 0,
      Fertilizer: fertilizerCost || 0,
    },
    {
      name: "Fertility Increase (%)",
      Microbial: microFertilityIncrease || 0,
      Fertilizer: fertilizerFertilityIncrease || 0,
    },
    {
      name: "Cost Efficiency",
      Microbial: microFertilityIncrease ? (microFertilityIncrease / (microCost || 1)) * 100 : 0,
      Fertilizer: fertilizerFertilityIncrease ? (fertilizerFertilityIncrease / (fertilizerCost || 1)) * 100 : 0,
    }
  ];

  // Data for the nutrient balance
  const nutrientBalanceData = [
    { name: "Nitrogen (N)", valueWithMicrobial: 85, valueWithFertilizer: 65 },
    { name: "Phosphorus (P)", valueWithMicrobial: 70, valueWithFertilizer: 55 },
    { name: "Potassium (K)", valueWithMicrobial: 75, valueWithFertilizer: 60 },
    { name: "Organic Matter", valueWithMicrobial: 90, valueWithFertilizer: 45 }
  ];

  // Data for benefits of stubble dissolution
  const stubbleBenefitsData = [
    { name: "Soil Structure", value: 30 },
    { name: "Carbon Sequestration", value: 25 },
    { name: "Nutrient Cycling", value: 20 },
    { name: "Microbial Activity", value: 25 }
  ];

  return (
    <div className="space-y-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Solution Comparison</CardTitle>
          <CardDescription>
            Cost and effectiveness comparison between microbial solution and fertilizer
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={costComparisonData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: number | string) => {
                  if (typeof value === 'number') {
                    return [value.toFixed(2), ''];
                  }
                  return [value, ''];
                }} />
                <Legend />
                <Bar dataKey="Microbial" fill="#22c55e" name={`Microbial${microSolution ? ` (${microSolution})` : ''}`} />
                <Bar dataKey="Fertilizer" fill="#f97316" name={`Fertilizer${fertilizer ? ` (${fertilizer})` : ''}`} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>* Cost Efficiency represents the fertility increase percentage per 100 rupees spent</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Benefits of Stubble Dissolution</CardTitle>
            <CardDescription>
              Key environmental and agricultural benefits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stubbleBenefitsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {stubbleBenefitsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number | string) => {
                    if (typeof value === 'number') {
                      return [`${value}%`, ''];
                    }
                    return [value, ''];
                  }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm space-y-2">
              <p><span className="font-medium">Soil Structure:</span> Improves soil aggregation, water infiltration, and root growth</p>
              <p><span className="font-medium">Carbon Sequestration:</span> Helps store carbon in soil, reducing atmospheric CO₂</p>
              <p><span className="font-medium">Nutrient Cycling:</span> Releases nutrients gradually, enhancing long-term fertility</p>
              <p><span className="font-medium">Microbial Activity:</span> Stimulates beneficial soil organisms essential for plant health</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Soil Nutrient Balance</CardTitle>
            <CardDescription>
              Comparing nutrient levels with different solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={nutrientBalanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis label={{ value: "Nutrient Availability (%)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="valueWithMicrobial" name="With Microbial Solution" fill="#22c55e" />
                  <Bar dataKey="valueWithFertilizer" name="With Fertilizer" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-sm space-y-2">
              <p className="font-medium">Impacts of Nutrient Imbalance:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reduced crop yield and quality</li>
                <li>Decreased soil biodiversity</li>
                <li>Increased susceptibility to pests and diseases</li>
                <li>Long-term soil degradation and erosion</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecommendationCharts;
