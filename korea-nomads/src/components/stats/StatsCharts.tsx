'use client';

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cities } from '@/lib/data';
import { BarChart3, PieChart as PieChartIcon, TrendingUp, MapPin } from 'lucide-react';

export default function StatsCharts() {
  // 지역별 도시 분포
  const regionStats = Object.entries(
    cities.reduce((acc, city) => {
      acc[city.region] = (acc[city.region] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([region, count]) => ({
    region,
    count,
    emoji: {
      '수도권': '🏙️',
      '영남권': '🌊', 
      '호남권': '🌸',
      '충청권': '🔬',
      '강원권': '🏔️',
      '제주권': '🍊'
    }[region] || '📍'
  }));

  // 생활비 분포
  const costDistribution = Object.entries(
    cities.reduce((acc, city) => {
      acc[city.cost.category] = (acc[city.cost.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([category, count]) => ({
    category: {
      'cheap': '저렴',
      'moderate': '보통', 
      'expensive': '비쌈',
      'luxury': '고급'
    }[category] || category,
    count,
    color: {
      'cheap': '#10B981',
      'moderate': '#3B82F6',
      'expensive': '#F59E0B', 
      'luxury': '#8B5CF6'
    }[category] || '#6B7280'
  }));

  // 평점 분포 (구간별)
  const ratingDistribution = [
    { range: '4.5-5.0', count: cities.filter(c => c.rating.overall >= 4.5).length },
    { range: '4.0-4.4', count: cities.filter(c => c.rating.overall >= 4.0 && c.rating.overall < 4.5).length },
    { range: '3.5-3.9', count: cities.filter(c => c.rating.overall >= 3.5 && c.rating.overall < 4.0).length },
    { range: '3.0-3.4', count: cities.filter(c => c.rating.overall >= 3.0 && c.rating.overall < 3.5).length },
  ].filter(item => item.count > 0);

  // 인프라 지표별 상위 도시들 (인터넷 속도 기준)
  const topInternetCities = cities
    .sort((a, b) => b.infrastructure.internetSpeed - a.infrastructure.internetSpeed)
    .slice(0, 10)
    .map(city => ({
      name: city.name,
      speed: city.infrastructure.internetSpeed,
      emoji: city.emoji
    }));

  // 월별 가상 성장 데이터 (실제 구현에서는 real data 사용)
  const monthlyGrowth = [
    { month: '1월', searches: 8500, users: 89, reviews: 156 },
    { month: '2월', searches: 9200, users: 124, reviews: 203 },
    { month: '3월', searches: 11800, users: 167, reviews: 289 },
    { month: '4월', searches: 13600, users: 234, reviews: 345 },
    { month: '5월', searches: 15100, users: 298, reviews: 398 },
    { month: '6월', searches: 17200, users: 356, reviews: 445 },
    { month: '7월', searches: 19800, users: 412, reviews: 523 },
    { month: '8월', searches: 22100, users: 489, reviews: 612 },
    { month: '9월', searches: 24200, users: 567, reviews: 698 },
    { month: '10월', searches: 26800, users: 634, reviews: 789 },
    { month: '11월', searches: 29600, users: 712, reviews: 856 },
    { month: '12월', searches: 32100, users: 798, reviews: 934 },
  ];

  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

  // 커스텀 툴팁
  interface TooltipProps {
    active?: boolean;
    payload?: Array<{
      color: string;
      dataKey: string;
      value: number;
    }>;
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-semibold">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* 지역별 도시 분포 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            지역별 도시 분포
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionStats} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 생활비 분포 파이 차트 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="w-5 h-5" />
              생활비 분포
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={costDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, count, percent }) => `${category}: ${count}개 (${(percent * 100).toFixed(1)}%)`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {costDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 평점 분포 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              평점 분포
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ratingDistribution} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* 인터넷 속도 Top 10 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            인터넷 속도 Top 10
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart 
              data={topInternetCities} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              layout="horizontal"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const city = topInternetCities.find(c => c.name === label);
                    return (
                      <div className="bg-white p-3 border rounded-lg shadow-lg">
                        <p className="font-semibold flex items-center gap-2">
                          <span>{city?.emoji}</span>
                          {label}
                        </p>
                        <p style={{ color: payload[0].color }}>
                          {`인터넷 속도: ${payload[0].value}Mbps`}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="speed" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 월별 성장 트렌드 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            월별 성장 트렌드
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={monthlyGrowth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorSearches" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorReviews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="searches" 
                stackId="1" 
                stroke="#3B82F6" 
                fill="url(#colorSearches)" 
              />
              <Area 
                type="monotone" 
                dataKey="users" 
                stackId="2" 
                stroke="#10B981" 
                fill="url(#colorUsers)" 
              />
              <Area 
                type="monotone" 
                dataKey="reviews" 
                stackId="3" 
                stroke="#F59E0B" 
                fill="url(#colorReviews)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}