import { LayoutDashboard, ArrowLeftRight, Receipt, TrendingUp, CreditCard, Target, Lightbulb, BarChart3, Settings, HelpCircle, Headset, LogOut } from 'lucide-react';

export const menuGroups = [
    {
        title: "General",
        items: [
            { name: "Dashboard", icon: LayoutDashboard },
            { name: "All Expenses", icon: ArrowLeftRight },
            { name: "Bill & Subscription", icon: Receipt },
            { name: "Investment", icon: TrendingUp },
            { name: "Card", icon: CreditCard },
            { name: "Goals", icon: Target },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Insight", icon: Lightbulb },
            { name: "Analytics", icon: BarChart3 },
        ],
    },
    {
        title: "Other",
        items: [
            { name: "Setting", icon: Settings},
            { name: "Help Center", icon: HelpCircle},
            { name: "Support", icon: Headset},
            { name: "Logout", icon: LogOut}
        ]
    }
];