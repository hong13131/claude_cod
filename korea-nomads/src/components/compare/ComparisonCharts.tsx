'use client';

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  LineChart, 
  Line 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { City } from '@/lib/types';
import { BarChart3, Activity, Wifi } from 'lucide-react';

interface ComparisonChartsProps {
  cities: (City | null)[];
}

export default function ComparisonCharts({ cities }: ComparisonChartsProps) {
  const validCities = cities.filter((city): city is City => city !== null);
  
  if (validCities.length === 0) {
    return null;
  }

  // 생활비 비교 차트 데이터
  const costData = validCities.map(city => ({
    name: city.name,
    cost: city.cost.monthly / 10000, // 만원 단위
    emoji: city.emoji
  }));

  // 인프라 점수 비교 (레이더 차트)
  const infraData = validCities.map(city => ({
    name: city.name,
    internetSpeed: Math.min(city.infrastructure.internetSpeed / 10, 100), // 0-100 스케일
    cafeCount: Math.min(city.infrastructure.cafeCount / 10, 100), // 0-100 스케일
    coworkingSpaces: Math.min(city.infrastructure.coworkingSpaces * 2, 100), // 0-100 스케일
    transportation: city.transportation.score * 10, // 0-100 스케일
    rating: city.rating.overall * 20 // 0-100 스케일
  }));

  // 전체 점수 트렌드 (가상 데이터 - 실제로는 시간별 데이터가 필요)
  const trendData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const data: Record<string, string | number> = { month: `${month}월` };
    
    validCities.forEach((city, index) => {
      // 가상의 월별 변화 데이터 생성 (실제 구현에서는 real data 사용)
      const baseScore = city.rating.overall;
      const variance = 0.3 * Math.sin((month + index * 2) * Math.PI / 6);
      data[city.name] = Math.max(0, Math.min(5, baseScore + variance));
    });
    
    return data;
  });

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
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'];

  return (
    <div className="space-y-8">
      {/* 생활비 비교 바 차트 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            월 생활비 비교 (만원)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12 }}
                interval={0}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                label={{ value: '만원', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="cost" 
                fill="#3B82F6" 
                radius={[4, 4, 0, 0]}
                name="월 생활비"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 종합 인프라 점수 레이더 차트 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            종합 인프라 점수 비교
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={infraData[0] ? [infraData[0]] : []} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
              <PolarGrid />
              <PolarAngleAxis 
                tick={{ fontSize: 11 }}
                dataKey="subject"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
              />
              {validCities.map((city, index) => (
                <Radar
                  key={city.id}
                  name={city.name}
                  dataKey={city.name}
                  stroke={colors[index % colors.length]}
                  fill={colors[index % colors.length]}
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              ))}
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
          
          {/* 레이더 차트를 위한 데이터 재구성 */}
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart 
              data={[
                {
                  subject: '인터넷 속도',
                  ...validCities.reduce((acc, city) => {
                    acc[city.name] = Math.min(city.infrastructure.internetSpeed / 10, 100);
                    return acc;
                  }, {} as Record<string, number>)
                },
                {
                  subject: '카페',
                  ...validCities.reduce((acc, city) => {
                    acc[city.name] = Math.min(city.infrastructure.cafeCount / 10, 100);
                    return acc;
                  }, {} as Record<string, number>)
                },
                {
                  subject: '코워킹',
                  ...validCities.reduce((acc, city) => {
                    acc[city.name] = Math.min(city.infrastructure.coworkingSpaces * 2, 100);
                    return acc;
                  }, {} as Record<string, number>)
                },
                {
                  subject: '교통',
                  ...validCities.reduce((acc, city) => {
                    acc[city.name] = city.transportation.score * 10;
                    return acc;
                  }, {} as Record<string, number>)
                },
                {
                  subject: '평점',
                  ...validCities.reduce((acc, city) => {
                    acc[city.name] = city.rating.overall * 20;
                    return acc;
                  }, {} as Record<string, number>)
                }
              ]}
              margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            >
              <PolarGrid />
              <PolarAngleAxis 
                tick={{ fontSize: 12 }}
                dataKey="subject"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                tickCount={6}
              />
              {validCities.map((city, index) => (
                <Radar
                  key={city.id}
                  name={city.name}
                  dataKey={city.name}
                  stroke={colors[index % colors.length]}
                  fill={colors[index % colors.length]}
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              ))}
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 평점 트렌드 라인 차트 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wifi className="w-5 h-5" />
            평점 트렌드 (가상 데이터)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={[0, 5]}
                label={{ value: '평점', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              {validCities.map((city, index) => (
                <Line
                  key={city.id}
                  type="monotone"
                  dataKey={city.name}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ fill: colors[index % colors.length], strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: colors[index % colors.length], strokeWidth: 2 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}