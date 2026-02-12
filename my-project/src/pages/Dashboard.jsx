import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login');
    };

    const stats = [
        { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: '💰' },
        { name: 'Active Users', value: '+2350', change: '+180.1%', icon: '👥' },
        { name: 'Sales', value: '+12,234', change: '+19%', icon: '🛒' },
        { name: 'Active Now', value: '+573', change: '+201', icon: '⏱️' },
    ];

    const recentActivity = [
        { id: 1, user: 'Sneha', action: 'Signed up', time: '2 minutes ago', status: 'Success' },
        { id: 2, user: 'John Doe', action: 'Purchased Pro Plan', time: '15 minutes ago', status: 'Pending' },
        { id: 3, user: 'Jane Smith', action: 'Updated profile', time: '1 hour ago', status: 'Success' },
        { id: 4, user: 'Rahul', action: 'Logged in', time: '2 hours ago', status: 'Success' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 px-6 pb-12">
            <div className="max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Dashboard Overview</h1>
                        <p className="text-slate-500 dark:text-slate-400">Welcome back, Admin. Here's what's happening today.</p>
                    </div>
                    <div className="flex items-center gap-4 glass p-2 rounded-2xl">
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">A</div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">Admin User</p>
                            <p className="text-xs text-slate-500">admin@antigravity.io</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="ml-4 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-rose-500/20 transition-all active:scale-95"
                        >
                            Log Out
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass p-6 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all group">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.name}</span>
                            </div>
                            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-bold text-emerald-500 flex items-center gap-1">
                                <span>{stat.change}</span>
                                <span className="text-slate-400 font-normal">from last month</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Table */}
                    <div className="lg:col-span-2 glass rounded-3xl overflow-hidden border border-white/10">
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-bold text-slate-900 dark:text-white">Recent Activity</h3>
                            <button className="text-xs font-bold text-indigo-500 hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-100/50 dark:bg-white/5">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Time</th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {recentActivity.map((activity) => (
                                        <tr key={activity.id} className="hover:bg-indigo-500/5 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{activity.user}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{activity.action}</td>
                                            <td className="px-6 py-4 text-sm text-slate-500">{activity.time}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${activity.status === 'Success'
                                                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400'
                                                        : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400'
                                                    }`}>
                                                    {activity.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="glass p-6 rounded-3xl border border-white/10 flex flex-col">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-6">System Status</h3>
                        <div className="space-y-6 flex-1">
                            {[
                                { name: 'API Server', uptime: '99.9%', status: 'Online' },
                                { name: 'Database', uptime: '100%', status: 'Online' },
                                { name: 'Cloud Storage', uptime: '98.5%', status: 'Online' },
                                { name: 'CDN Edge', uptime: '100%', status: 'Online' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">{item.name}</p>
                                        <p className="text-[10px] text-slate-500">Uptime: {item.uptime}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-bold text-emerald-500 uppercase">{item.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-8 w-full py-4 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-500 text-sm font-bold rounded-2xl transition-all">
                            Check Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

