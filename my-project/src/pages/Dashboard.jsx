import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login');
    };

    // Mock data for the dashboard
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
        <div style={styles.dashboardContainer}>
            {/* Sidebar Placeholder (integrated into layout) */}
            <div style={styles.content}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Dashboard Overview</h1>
                    <div style={styles.userProfile}>
                        <span style={styles.userName}>Welcome back, Admin</span>
                        <div style={styles.avatar}>A</div>
                        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div style={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} style={styles.statCard}>
                            <div style={styles.statHeader}>
                                <span style={styles.statIcon}>{stat.icon}</span>
                                <span style={styles.statName}>{stat.name}</span>
                            </div>
                            <div style={styles.statValue}>{stat.value}</div>
                            <div style={styles.statChange}>{stat.change} from last month</div>
                        </div>
                    ))}
                </div>

                {/* Main Section */}
                <div style={styles.mainSection}>
                    <div style={styles.tableCard}>
                        <h3 style={styles.sectionTitle}>Recent Activity</h3>
                        <table style={styles.table}>
                            <thead>
                                <tr style={styles.tableHeadRow}>
                                    <th style={styles.th}>User</th>
                                    <th style={styles.th}>Action</th>
                                    <th style={styles.th}>Time</th>
                                    <th style={styles.th}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentActivity.map((activity) => (
                                    <tr key={activity.id} style={styles.tableRow}>
                                        <td style={styles.td}>{activity.user}</td>
                                        <td style={styles.td}>{activity.action}</td>
                                        <td style={styles.td}>{activity.time}</td>
                                        <td style={styles.td}>
                                            <span style={{
                                                ...styles.statusBadge,
                                                backgroundColor: activity.status === 'Success' ? '#e6fffa' : '#fff5f5',
                                                color: activity.status === 'Success' ? '#2c7a7b' : '#c53030'
                                            }}>
                                                {activity.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={styles.infoCard}>
                        <h3 style={styles.sectionTitle}>System Status</h3>
                        <div style={styles.systemStatus}>
                            <div style={styles.statusItem}>
                                <span>API Server</span>
                                <span style={styles.onlineDot}>Online</span>
                            </div>
                            <div style={styles.statusItem}>
                                <span>Database</span>
                                <span style={styles.onlineDot}>Online</span>
                            </div>
                            <div style={styles.statusItem}>
                                <span>Storage</span>
                                <span style={styles.onlineDot}>Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    dashboardContainer: {
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: "'Inter', sans-serif",
        padding: '24px',
    },
    content: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
    },
    title: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#1e293b',
        margin: 0,
    },
    userProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    userName: {
        color: '#64748b',
        fontSize: '14px',
    },
    avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#6366f1',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'Bold',
    },
    logoutButton: {
        backgroundColor: '#ef4444',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        marginLeft: '12px',
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        marginBottom: '32px',
    },
    statCard: {
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        border: '1px solid #f1f5f9',
    },
    statHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px',
    },
    statIcon: {
        fontSize: '20px',
    },
    statName: {
        fontSize: '14px',
        color: '#64748b',
        fontWeight: '500',
    },
    statValue: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '4px',
    },
    statChange: {
        fontSize: '12px',
        color: '#10b981',
        fontWeight: '600',
    },
    mainSection: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        gap: '24px',
    },
    tableCard: {
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        border: '1px solid #f1f5f9',
    },
    infoCard: {
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        border: '1px solid #f1f5f9',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '20px',
        marginTop: 0,
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHeadRow: {
        borderBottom: '1px solid #f1f5f9',
    },
    th: {
        textAlign: 'left',
        padding: '12px',
        fontSize: '13px',
        color: '#64748b',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    tableRow: {
        borderBottom: '1px solid #f1f5f9',
    },
    td: {
        padding: '16px 12px',
        fontSize: '14px',
        color: '#334155',
    },
    statusBadge: {
        padding: '4px 8px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '600',
    },
    systemStatus: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    statusItem: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px',
        color: '#475569',
    },
    onlineDot: {
        color: '#10b981',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
};

export default Dashboard;
