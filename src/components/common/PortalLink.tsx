interface PortalLinkProps {
  icon: string;
  title: string;
  href: string;
}

export const PortalLink = ({ icon, title, href }: PortalLinkProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-2 md:p-3 bg-gray-600/40 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-gray-600/60"
    >
      <img src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6" loading="lazy" />
      <span className="font-medium text-white text-xs md:text-sm">{title}</span>
    </a>
  );
};
