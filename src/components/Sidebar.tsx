import { 
  Globe,
  Menu,
  Users,
  Bell,
  FolderOpen,
  Hand,
  Coins,
  Calculator,
  ClipboardList,
  Radio,
  Store,
  Activity,
  Settings,
  ChevronLeft,
  ExternalLink,
  Newspaper
} from 'lucide-react';
import svgPaths from '../imports/svg-m05st3o4hq';

interface SidebarProps {
  activeView?: 'adverse-media' | 'adverse-media-results';
  onNavigate?: (view: 'adverse-media' | 'adverse-media-results') => void;
}

export function Sidebar({ activeView = 'adverse-media', onNavigate }: SidebarProps) {
  return (
    <div className="w-[220px] bg-sidebar text-sidebar-foreground flex flex-col h-screen">
      {/* Logo */}
      <div className="px-2 py-6">
        <div className="flex items-center gap-3 px-2">
          {/* SEON Symbol */}
          <div className="h-7 w-10 shrink-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 28">
              <path d={svgPaths.p1f857e00} fill="#00C1B6" />
            </svg>
          </div>
          {/* SEON Text */}
          <div className="flex items-center h-7">
            <div className="h-[15.474px] w-[51.971px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 16">
                <path d={svgPaths.p2094d280} fill="#00C1B6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 flex flex-col">
        <div className="space-y-0.5">
          <NavItem icon={Globe} label="Dashboard" />
          <NavItem icon={Menu} label="Transactions" />
          <NavItem icon={Users} label="Customers" />
          <NavItem icon={Bell} label="Alerts" />
          <NavItem icon={FolderOpen} label="Cases" />
          <NavItem icon={Hand} label="Manual Lookup" />
          <NavItem 
            icon={Newspaper} 
            label="Adverse Media Screening" 
            active={activeView === 'adverse-media'}
            onClick={() => onNavigate?.('adverse-media')}
          />
          <NavItem icon={Coins} label="AML" />
          <NavItem icon={Calculator} label="Scoring Engine" />
          <NavItem icon={ClipboardList} label="Lists" />
          <NavItem icon={Radio} label="Monitoring" />
          <NavItem icon={Store} label="Channels" />
        </div>

        <div className="mt-4 space-y-0.5">
          <NavItem icon={Activity} label="Logs" />
          <NavItem icon={Settings} label="Settings" />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Collapse */}
        <div className="mt-4">
          <NavItem icon={ChevronLeft} label="Collapse" />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ 
  icon: Icon, 
  label, 
  active = false,
  hasExternalLink = false,
  onClick
}: { 
  icon: React.FC<React.SVGProps<SVGSVGElement>>; 
  label: string; 
  active?: boolean;
  hasExternalLink?: boolean;
  onClick?: () => void;
}) {
  const isClickable = !!onClick;
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors ${
        active 
          ? 'bg-white/10 text-accent' 
          : 'text-sidebar-foreground hover:bg-white/5'
      } ${isClickable ? 'btn-interactive cursor-pointer' : ''}`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="truncate text-[14px]">{label}</span>
      {hasExternalLink && (
        <div className="ml-auto">
          <ExternalLink className="w-3 h-3 opacity-64" />
        </div>
      )}
    </button>
  );
}