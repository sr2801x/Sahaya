
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  BarChart4, Users, AlertTriangle, MapPin, 
  BookOpen, HeartHandshake, ArrowUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Admin = () => {
  // Mock data for charts and stats
  const stats = [
    { title: "Active Alerts", value: "12", icon: <AlertTriangle className="h-5 w-5 text-red-400" />, change: "+3" },
    { title: "Volunteers", value: "5,247", icon: <Users className="h-5 w-5 text-sahaya-blue" />, change: "+124" },
    { title: "Donations", value: "$142,580", icon: <HeartHandshake className="h-5 w-5 text-sahaya-green" />, change: "+$15,400" },
    { title: "Trained Users", value: "3,156", icon: <BookOpen className="h-5 w-5 text-sahaya-purple" />, change: "+43" },
  ];

  return (
    <div className="circuit-bg min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-32 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px bg-sahaya-blue/50 flex-grow max-w-[50px]"></div>
              <span className="text-sahaya-blue uppercase text-sm font-semibold tracking-wider">Admin Panel</span>
            </div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="tech-card py-2 px-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sahaya-blue" />
              <span className="text-sm">Global View</span>
            </div>
            <Button className="bg-sahaya-blue hover:bg-sahaya-blue/90 text-white">
              Create Alert
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="tech-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-green-400">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Activity Chart */}
            <div className="tech-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Disaster Activity</h3>
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Week</Button>
                  <Button variant="ghost" size="sm" className="text-sahaya-blue">Month</Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">Year</Button>
                </div>
              </div>
              
              <div className="h-[300px] flex items-end">
                {[35, 45, 30, 60, 75, 45, 55, 40, 50, 60, 35, 45].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full max-w-[30px] bg-sahaya-blue/20 hover:bg-sahaya-blue/40 transition-colors rounded-t-sm" 
                      style={{height: `${value}%`}}
                    >
                      <div 
                        className="w-full bg-sahaya-blue rounded-t-sm"
                        style={{height: `${value * 0.6}%`}}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Active Alerts */}
            <div className="tech-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Active Alerts</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sahaya-blue hover:text-white hover:bg-sahaya-blue/20"
                >
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { type: "Earthquake", location: "Tokyo, Japan", severity: "High", time: "2h ago" },
                  { type: "Flooding", location: "Mumbai, India", severity: "Critical", time: "30m ago" },
                  { type: "Wildfire", location: "California, USA", severity: "Medium", time: "1h ago" }
                ].map((alert, index) => (
                  <div key={index} className="p-4 border border-gray-800 rounded-lg bg-gray-900/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.severity === 'Critical' ? 'text-red-500' : 
                        alert.severity === 'High' ? 'text-red-400' : 'text-orange-400'
                      }`} />
                      <div>
                        <h4 className="font-medium">{alert.type}</h4>
                        <p className="text-sm text-gray-400">{alert.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        alert.severity === 'Critical' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 
                        alert.severity === 'High' ? 'bg-red-400/20 text-red-200 border border-red-400/30' : 
                        'bg-orange-400/20 text-orange-200 border border-orange-400/30'
                      }`}>
                        {alert.severity}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Volunteer Stats */}
            <div className="tech-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-sahaya-blue/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-sahaya-blue" />
                </div>
                <h3 className="font-semibold">Volunteer Distribution</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { region: "North America", count: 1842, color: "bg-sahaya-blue" },
                  { region: "Asia", count: 1256, color: "bg-sahaya-purple" },
                  { region: "Europe", count: 976, color: "bg-sahaya-green" },
                  { region: "Africa", count: 679, color: "bg-orange-500" },
                  { region: "South America", count: 494, color: "bg-red-500" }
                ].map((region, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{region.region}</span>
                      <span>{region.count}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full">
                      <div 
                        className={`h-2 ${region.color} rounded-full`} 
                        style={{ width: `${(region.count / 1842) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Activity */}
            <div className="tech-card">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              
              <div className="space-y-4">
                {[
                  { action: "Alert Created", user: "Admin", time: "5 minutes ago" },
                  { action: "Volunteer Registered", user: "John Doe", time: "12 minutes ago" },
                  { action: "Donation Received", user: "Anonymous", time: "25 minutes ago" },
                  { action: "Course Completed", user: "Sarah Smith", time: "1 hour ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.action.includes('Alert') ? 'bg-red-500' : 
                      activity.action.includes('Volunteer') ? 'bg-sahaya-blue' : 
                      activity.action.includes('Donation') ? 'bg-sahaya-green' : 'bg-sahaya-purple'
                    }`}></div>
                    <div>
                      <p className="text-sm">{activity.action} by <span className="text-sahaya-blue">{activity.user}</span></p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="text-sahaya-blue hover:text-white hover:bg-sahaya-blue/20 mt-4 w-full"
              >
                View All Activity
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="tech-card">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { action: "New Alert", icon: <AlertTriangle className="h-4 w-4" /> },
                  { action: "Add Volunteer", icon: <Users className="h-4 w-4" /> },
                  { action: "View Reports", icon: <BarChart4 className="h-4 w-4" /> },
                  { action: "Settings", icon: <BarChart4 className="h-4 w-4" /> }
                ].map((action, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    className="border-gray-800 hover:border-sahaya-blue hover:bg-sahaya-blue/10"
                  >
                    {action.icon}
                    <span>{action.action}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
